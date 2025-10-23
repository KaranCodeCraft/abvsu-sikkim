"use client";

import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

export default function PopupDashboard() {
  const [form, setForm] = useState({
    imageUrl: "",
    isActive: false,
    startTime: "",
    endTime: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch existing popup settings
  // useEffect(() => {
  //   axios.get("/api/popup").then((res) => {
  //     if (res.data) {
  //       setForm({
  //         imageUrl: res.data.imageUrl || "",
  //         isActive: res.data.isActive || false,
  //         startTime: dayjs(res.data.startTime).format("YYYY-MM-DDTHH:mm"),
  //         endTime: dayjs(res.data.endTime).format("YYYY-MM-DDTHH:mm"),
  //       });
  //     }
  //   });
  // }, []);

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

    await fetch("/api/popup", {
      method: "POST",
      body: JSON.stringify({
        imageUrl: form.imageUrl,
        imageBase64,
        isActive: form.isActive,
        startTime: form.startTime,
        endTime: form.endTime,
      }),
      headers: { "Content-Type": "application/json" },
    });

    alert("Popup saved!");
  };

  return (
    <Box p={3} maxWidth={600} mx="auto">
      <Typography variant="h5" mb={2}>
        🎨 Admission Popup Settings
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={form.isActive}
            onChange={(e) =>
              setForm((f) => ({ ...f, isActive: e.target.checked }))
            }
          />
        }
        label="Popup Active"
      />

      <TextField
        label="Image URL (optional)"
        fullWidth
        margin="normal"
        value={form.imageUrl}
        onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
      />

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
        {selectedFile && <Typography>Selected: {selectedFile.name}</Typography>}
      </Box>

      <TextField
        label="Start Time"
        type="datetime-local"
        fullWidth
        margin="normal"
        value={form.startTime}
        onChange={(e) => setForm({ ...form, startTime: e.target.value })}
      />

      <TextField
        label="End Time"
        type="datetime-local"
        fullWidth
        margin="normal"
        value={form.endTime}
        onChange={(e) => setForm({ ...form, endTime: e.target.value })}
      />

      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSave}>
        Save Settings
      </Button>
    </Box>
  );
}
