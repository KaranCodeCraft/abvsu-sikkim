"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ApplicationForm() {
  const [photoPreview, setPhotoPreview] = useState("/images/pharmacy-user.png");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const restrictToNumbers = (selector, maxLength) => {
      const input = document.querySelector(selector);
      if (input) {
        input.addEventListener("input", () => {
          input.value = input.value.replace(/\D/g, "").slice(0, maxLength);
        });
      }
    };

    const restrictToText = (selector) => {
      const input = document.querySelector(selector);
      if (input) {
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^A-Za-z\s]/g, "");
        });
      }
    };

    restrictToNumbers('input[name="mobile"]', 10);
    restrictToNumbers('input[name="aadhaar_no"]', 12);
    restrictToNumbers('input[name="pincode"]', 6);

    restrictToText('input[name="student_name"]');
    restrictToText('input[name="father_name"]');
    restrictToText('input[name="mother_name"]');
    restrictToText('input[name="city"]');
    restrictToText('input[name="state"]');
    restrictToText('input[name="country"]');
  }, []);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isNumeric = (value, length) => new RegExp(`^\\d{${length}}$`).test(value);
  const isOnlyLetters = (value) => /^[A-Za-z\s]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    const email = formData.get("email").trim();
    const mobile = formData.get("mobile").trim();
    const aadhaar = formData.get("aadhaar_no").trim();
    const pincode = formData.get("pincode").trim();
    const studentName = formData.get("student_name").trim();
    const fatherName = formData.get("father_name").trim();
    const motherName = formData.get("mother_name").trim();

    if (!isValidEmail(email)) return alert("Valid Email Address required.");
    if (!isNumeric(mobile, 10)) return alert("Mobile Number must be 10 digits.");
    if (!isNumeric(aadhaar, 12)) return alert("Aadhaar must be 12 digits.");
    if (!isNumeric(pincode, 6)) return alert("Pincode must be 6 digits.");
    if (!isOnlyLetters(studentName)) return alert("Student Name must contain only letters.");
    if (!isOnlyLetters(fatherName)) return alert("Father's Name must contain only letters.");
    if (!isOnlyLetters(motherName)) return alert("Mother's Name must contain only letters.");

    try {
      setSubmitting(true);

      const res = await fetch("https://api.ABVSU.ac.in/api/pharmacyForm/create", {
        method: "POST",
        body: formData, 
        
      });

      const result = await res.json();
      if (res.status === 409) return alert("This entry already exists.");
      if (!res.ok) return alert("Submission failed: " + result.message);

      alert("Form submitted successfully!");
      form.reset();
      setPhotoPreview("/images/pharmacy-user.png");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const previewPhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setPhotoPreview(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview("/images/pharmacy-user.png");
    }
  };

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-orange-600">Application Form</h1>
        <p className="text-gray-600 mt-2">Fill all required fields to apply</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-12 bg-white shadow-xl p-8 rounded-xl max-w-6xl mx-auto"
        encType="multipart/form-data"
      >
        {/* Course Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Course/Programme Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <select name="programme" required className="border p-3 rounded focus:ring-2 focus:ring-orange-400">
              <option value="">Select course</option>
              <option value="D. Pharm">D. Pharm</option>
              <option value="B. Pharm">B. Pharm</option>
            </select>
            <select name="stream" required className="border p-3 rounded focus:ring-2 focus:ring-orange-400">
              <option value="">Select Stream</option>
              <option value="General">General</option>
            </select>
            <select name="session" required className="border p-3 rounded focus:ring-2 focus:ring-orange-400">
              <option value="">Select session</option>
              <option value="2025-2026">2025-2026</option>
            </select>
          </div>
        </div>

        {/* Personal Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Personal Details</h2>
          <div className="md:flex gap-6">
            <div className="flex-1 space-y-4">
              <input name="student_name" required placeholder="Student Name" className="w-full border p-3 rounded" />
              <input name="father_name" required placeholder="Father's Name" className="w-full border p-3 rounded" />
              <input name="mother_name" required placeholder="Mother's Name" className="w-full border p-3 rounded" />
              <input name="dob" type="date" required className="w-full border p-3 rounded" />
              <select name="gender" required className="w-full border p-3 rounded">
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <select name="category" required className="w-full border p-3 rounded">
                <option value="">Select Category</option>
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
              </select>
              <input name="mobile" required placeholder="Mobile No" className="w-full border p-3 rounded" />
              <input name="email" type="email" required placeholder="Email Address" className="w-full border p-3 rounded" />
              <input name="aadhaar_no" required placeholder="Aadhaar No" className="w-full border p-3 rounded" />
              <input type="file" name="aadhaar_front" required className="w-full border" />
              <input type="file" name="aadhaar_back" required className="w-full border" />
            </div>
            <div className="mt-2">
              <Image
                src={photoPreview}
                width={120}
                height={150}
                alt="Photo Preview"
                className="border mb-2 rounded shadow"
              />
              <input type="file" name="photo" accept="image/*" required onChange={previewPhoto} />
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Location</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="address" required placeholder="Current Address" className="w-full border p-3 rounded" />
            <input name="city" required placeholder="City" className="w-full border p-3 rounded" />
            <input name="state" required placeholder="State" className="w-full border p-3 rounded" />
            <input name="pincode" required placeholder="Pincode" className="w-full border p-3 rounded" />
            <input name="country" required placeholder="Country" className="w-full border p-3 rounded" />
          </div>
        </div>

        {/* Qualification Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Qualification Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">Examination</th>
                  <th className="p-2 border">Year</th>
                  <th className="p-2 border">Board/Univ.</th>
                  <th className="p-2 border">Total</th>
                  <th className="p-2 border">Obtained</th>
                  <th className="p-2 border">Grade</th>
                  <th className="p-2 border">Upload</th>
                </tr>
              </thead>
              <tbody>
                {["secondary", "sr", "grad", "pg"].map((level, i) => (
                  <tr key={i}>
                    <td className="p-2 border font-medium">
                      {level === "sr"
                        ? "Sr. Secondary"
                        : level.charAt(0).toUpperCase() + level.slice(1)}
                    </td>
                    {["year", "board", "total", "obtained", "grade"].map((field) => (
                      <td className="p-2 border" key={field}>
                        <input
                          type="text"
                          name={`${level}_${field}`}
                          className="w-full p-2 border rounded"
                        />
                      </td>
                    ))}
                    <td className="p-2 border">
                      <input type="file" name={`${level}_doc`} className="w-full border rounded" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-200"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </section>
  );
}
