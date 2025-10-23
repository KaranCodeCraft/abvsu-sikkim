"use client";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Switch,
  Typography,
  Box,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";

export default function PopupTable() {
  const [popups, setPopups] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingPopup, setEditingPopup] = useState(null);
  const [formData, setFormData] = useState({
    imageUrl: "",
    isActive: true,
    startTime: "",
    endTime: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  // 🔹 Fetch all popups
  useEffect(() => {
    fetch("/api/popup/admin") // <- admin route returning all popups
      .then((res) => res.json())
      .then((data) => setPopups(data || []))
      .catch((err) => console.error(err));
  }, []);

  // 🔹 Handle open dialog (add or edit)
  const handleOpen = (popup = null) => {
    if (popup) setFormData(popup);
    else
      setFormData({ imageUrl: "", isActive: true, startTime: "", endTime: "" });
    setEditingPopup(popup);
    setOpen(true);
  };

  // 🔹 Close dialog
  const handleClose = () => {
    setOpen(false);
    setEditingPopup(null);
  };

  // 🔹 Save (Create or Update)
  const handleSave = async () => {
    let imageBase64 = null;
    if (selectedFile) {
      imageBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
      });
    }
    const method = editingPopup ? "PATCH" : "POST";
    const url = editingPopup
      ? `/api/popup/${editingPopup.id}`
      : `/api/popup`;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageUrl: formData.imageUrl,
        imageBase64,
        isActive: formData.isActive,
        startTime: formData.startTime,
        endTime: formData.endTime,
      }),
    });

    handleClose();
    const res = await fetch("/api/popup/admin");
    const data = await res.json();
    setPopups(data);
  };

  // 🔹 Delete
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this popup?")) {
      await fetch(`/api/popup/${id}`, { method: "DELETE" });
      setPopups(popups.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-4">
      <Typography variant="h5" gutterBottom>
        Popup Settings
      </Typography>

      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add Popup
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>ID</b>
              </TableCell>
              <TableCell>
                <b>Image</b>
              </TableCell>
              <TableCell>
                <b>Active</b>
              </TableCell>
              <TableCell>
                <b>Start Time</b>
              </TableCell>
              <TableCell>
                <b>End Time</b>
              </TableCell>
              <TableCell>
                <b>Updated At</b>
              </TableCell>
              <TableCell align="right">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {popups.map((popup,index) => (
              <TableRow key={popup.id}>
                <TableCell>{index+1}</TableCell>
                <TableCell>
                  <img
                    src={popup.imageUrl}
                    alt="popup"
                    width={100}
                    style={{ borderRadius: 8 }}
                  />
                </TableCell>
                <TableCell>{popup.isActive ? "Yes" : "No"}</TableCell>
                <TableCell>
                  {new Date(popup.startTime).toLocaleString()}
                </TableCell>
                <TableCell>
                  {new Date(popup.endTime).toLocaleString()}
                </TableCell>
                <TableCell>
                  {new Date(popup.updatedAt).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  <IconButton color="primary" onClick={() => handleOpen(popup)}>
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(popup.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {popups.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No popups found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 🔹 Add/Edit Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          {editingPopup ? "Edit Popup" : "Add New Popup"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Image URL (optional)"
            fullWidth
            margin="normal"
            value={formData.imageUrl}
            onChange={(e) =>
              setFormData({ ...formData, imageUrl: e.target.value })
            }
          />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Typography>Active:</Typography>
            <Switch
              checked={formData.isActive}
              onChange={(e) =>
                setFormData({ ...formData, isActive: e.target.checked })
              }
            />
          </div>
          <Box mt={2} mb={2}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
            />
            {selectedFile && (
              <Typography>Selected: {selectedFile.name}</Typography>
            )}
          </Box>
          <TextField
            label="Start Time"
            type="datetime-local"
            fullWidth
            margin="normal"
            value={formData.startTime?.slice(0, 16) || ""}
            onChange={(e) =>
              setFormData({ ...formData, startTime: e.target.value })
            }
          />
          <TextField
            label="End Time"
            type="datetime-local"
            fullWidth
            margin="normal"
            value={formData.endTime?.slice(0, 16) || ""}
            onChange={(e) =>
              setFormData({ ...formData, endTime: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            {editingPopup ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
