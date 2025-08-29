"use client"

import { useState } from "react"
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Paper,
  InputAdornment,
} from "@mui/material"
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    program: "",
    state: "",
    agreed: true,
  })

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ]

  const cities = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    Haryana: ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Yamunanagar"],
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleStateChange = (value) => {
    setFormData((prev) => ({ ...prev, state: value}))
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg wrap">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", color: "#1a1a1a", mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ color: "#666", maxWidth: "600px", mx: "auto" }}>
            Get in touch with us for any inquiries about our programs. We're here to help you succeed.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          {/* Contact Information */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: "100%", boxShadow: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 1, color: "#1a1a1a" }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Paper sx={{ p: 1.5, backgroundColor: "#e3f2fd", borderRadius: "50%" }}>
                      <PhoneIcon style={{ width: 24, height: 24, color: "#1976d2" }} />
                    </Paper>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
                        Phone
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        +91 9821666832
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Paper sx={{ p: 1.5, backgroundColor: "#e8f5e8", borderRadius: "50%" }}>
                      <EnvelopeIcon style={{ width: 24, height: 24, color: "#2e7d32" }} />
                    </Paper>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
                        Email
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        info@abvsu.ac.in
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Paper sx={{ p: 1.5, backgroundColor: "#f3e5f5", borderRadius: "50%" }}>
                      <MapPinIcon style={{ width: 24, height: 24, color: "#7b1fa2" }} />
                    </Paper>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
                        Address
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        Karthok Road, Pakyong, Sikkim - 737106
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Paper sx={{ p: 1.5, backgroundColor: "#fff3e0", borderRadius: "50%" }}>
                      <ClockIcon style={{ width: 24, height: 24, color: "#f57c00" }} />
                    </Paper>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
                        Office Hours
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: "100%", boxShadow: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 1, color: "#1a1a1a" }}>
                  Send us a Message
                </Typography>
                <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <TextField
                    label="Full Name *"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                  />

                  <TextField
                    label="Mobile Number *"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    placeholder="Enter your mobile number"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                    }}
                  />

                  <TextField
                    label="Email Address *"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                  />

                  <FormControl fullWidth required>
                    <InputLabel>Program *</InputLabel>
                    <Select
                      value={formData.program}
                      label="Program *"
                      onChange={(e) => handleInputChange("program", e.target.value)}
                    >
                      <MenuItem value="secondary">Secondary</MenuItem>
                      <MenuItem value="senior-secondary">Senior Secondary</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>State</InputLabel>
                    <Select value={formData.state} label="State" onChange={(e) => handleStateChange(e.target.value)}>
                      {indianStates.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                 
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.agreed}
                        onChange={(e) => handleInputChange("agreed", e.target.checked)}
                      />
                    }
                    label="I agree to the terms and conditions and privacy policy"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={!formData.agreed}
                    sx={{
                      mt: 2,
                      py: 1.5,
                      backgroundColor: "#1976d2",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
