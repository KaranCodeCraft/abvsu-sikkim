"use client";
import React, { useImperativeHandle, forwardRef, useState, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnquirySchema } from "@/lib/validations/enquiry.schema";

// Forward ref so parent can call openDialog
const EnquiryFormDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(EnquirySchema) });

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  useImperativeHandle(ref, () => ({ openDialog }));

  const onSubmit = async (data) => {
    if (!captchaValue) {
      alert("Please verify that you are a human!");
      return;
    }

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captcha: captchaValue }),
      });

      const result = await res.json();

      if (res.ok) {
        alert(result.message);
        recaptchaRef.current?.reset();
        setCaptchaValue(null);
        reset();
        closeDialog();
      } else {
        alert(result.error || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <Dialog open={open} onClose={closeDialog} fullWidth maxWidth="sm">
      <DialogTitle>
        Enquiry Form
        <IconButton
          aria-label="close"
          onClick={closeDialog}
          sx={{ position: "absolute", right: 8, top: 8, color: "gray" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Phone"
            fullWidth
            margin="normal"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
          <TextField
            label="Message"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <ReCAPTCHA
            sitekey="6LdzXForAAAAAOM2V_gQZ6pAEEqbWwSVA9gXL6IK"
            onChange={(val) => setCaptchaValue(val)}
            ref={recaptchaRef}
            className="mt-4"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
});

export default EnquiryFormDialog;
