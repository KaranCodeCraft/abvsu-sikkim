"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

export default function AdmissionAlertPopup() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("admission-popup");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("admission-popup", "shown");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          width: "90%",
          maxWidth: isMobile ? "95%" : "600px",
          aspectRatio: "794 / 1123",
          position: "relative",
          background: "transparent",
          boxShadow: "none",
          overflow: "hidden",
        },
      }}
      BackdropProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      }}
    >
      <DialogContent
        style={{ padding: 0, position: "relative", background: "transparent" }}
      >
        <IconButton
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 2,
            background: "rgba(0,0,0,0.4)",
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Image
          src="/images/fest/goverdhan.jpeg"
          alt="Admissions 2025"
          fill
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
