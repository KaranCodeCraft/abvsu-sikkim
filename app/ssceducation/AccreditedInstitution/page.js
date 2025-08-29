"use client"
import { motion } from "framer-motion"
import React, { useState } from "react";

export default function AccreditedInstitutionPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const [institutionId, setInstitutionId] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const trimmed = institutionId.trim();
    if (!trimmed) {
      setError("Please enter an Institution ID.");
      return;
    }

    try {
      setIsSubmitting(true);
      console.log("Searching for institution:", trimmed);
      await new Promise((r) => setTimeout(r, 600));
      alert(`Please enter a valid Roll No.`);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-left sm:text-justify">
      {/* Banner */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <div className="w-full">
          <img
            src="/Banner/ssceducation/accredited-institutions.jpg"
            alt="Accredited Institutions"
            className="w-full h-auto max-h-[350px] object-cover"
          />
        </div>
      </motion.div>

      {/* Form Section */}
      <div className="w-full bg-gradient-to-b from-white to-slate-50 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-100">
            <header className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Accredited Institution</h1>
              <p className="text-slate-600 mt-1">Enter the Institution ID and click search.</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="institutionId" className="block text-sm font-medium text-slate-700">
                  Enter Institution ID
                </label>
                <input
                  id="institutionId"
                  type="text"
                  placeholder=""
                  value={institutionId}
                  onChange={(e) => setInstitutionId(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition shadow-sm"
                  aria-invalid={!!error}
                  aria-describedby={error ? "institutionId-error" : undefined}
                />
                {error && (
                  <p id="institutionId-error" className="mt-2 text-sm text-red-600">
                    {error}
                  </p>
                )}
              </div>
{/* rounded-tl-[25px] rounded-tr-[0px] rounded-br-[25px] rounded-bl-[0px] */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 hover:bg-blue-950 text-white rounded-2xl px-4 py-3 font-medium shadow-sm border border-slate-200 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              >
                {isSubmitting ? "Searching…" : "Search Institute"}
              </button>
            </form>

            <footer className="mt-6 text-xs text-slate-500">
              Tip: You can paste the ID and press Enter.
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
