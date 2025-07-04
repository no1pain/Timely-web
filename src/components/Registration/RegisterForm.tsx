"use client";

import { useState } from "react";
import { COLORS } from "@/shared/constants/colors/colors";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full px-4">
      <h1
        className="text-4xl font-bold mb-8 text-left"
        style={{ color: COLORS.TEXT_PRIMARY }}
      >
        Sign Up
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <div
            className="flex items-center border rounded-lg overflow-hidden h-16"
            style={{ borderColor: COLORS.BORDER_PRIMARY }}
          >
            <div className="flex items-center justify-center h-full px-4">
              <FaUser size={18} color={COLORS.TEXT_SECONDARY} />
            </div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="flex-1 h-full w-full px-2 py-4 bg-transparent focus:outline-none text-input-placeholder placeholder-[#565454]"
              style={{ color: COLORS.TEXT_PRIMARY }}
              required
            />
          </div>
        </div>

        <div className="relative">
          <div
            className="flex items-center border rounded-lg overflow-hidden h-16"
            style={{ borderColor: COLORS.BORDER_PRIMARY }}
          >
            <div className="flex items-center justify-center h-full px-4">
              <FaUser size={18} color={COLORS.TEXT_SECONDARY} />
            </div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="flex-1 h-full w-full px-2 py-4 bg-transparent focus:outline-none text-input-placeholder placeholder-[#565454]"
              style={{ color: COLORS.TEXT_PRIMARY }}
              required
            />
          </div>
        </div>

        <div className="relative">
          <div
            className="flex items-center border rounded-lg overflow-hidden h-16"
            style={{ borderColor: COLORS.BORDER_PRIMARY }}
          >
            <div className="flex items-center justify-center h-full px-4">
              <FaUser size={18} color={COLORS.TEXT_SECONDARY} />
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="flex-1 h-full w-full px-2 py-4 bg-transparent focus:outline-none text-input-placeholder placeholder-[#565454]"
              style={{ color: COLORS.TEXT_PRIMARY }}
              required
            />
          </div>
        </div>

        <div className="relative">
          <div
            className="flex items-center border rounded-lg overflow-hidden h-16"
            style={{ borderColor: COLORS.BORDER_PRIMARY }}
          >
            <div className="flex items-center justify-center h-full px-4">
              <FaEnvelope size={18} color={COLORS.TEXT_SECONDARY} />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="flex-1 h-full w-full px-2 py-4 bg-transparent focus:outline-none text-input-placeholder placeholder-[#565454]"
              style={{ color: COLORS.TEXT_PRIMARY }}
              required
            />
          </div>
        </div>

        <div className="relative">
          <div
            className="flex items-center border rounded-lg overflow-hidden h-16"
            style={{ borderColor: COLORS.BORDER_PRIMARY }}
          >
            <div className="flex items-center justify-center h-full px-4">
              <FaLock size={18} color={COLORS.TEXT_SECONDARY} />
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="flex-1 h-full w-full px-2 py-4 bg-transparent focus:outline-none text-input-placeholder placeholder-[#565454]"
              style={{ color: COLORS.TEXT_PRIMARY }}
              required
            />
          </div>
        </div>

        <div className="relative">
          <div
            className="flex items-center border rounded-lg overflow-hidden h-16"
            style={{ borderColor: COLORS.BORDER_PRIMARY }}
          >
            <div className="flex items-center justify-center h-full px-4">
              <FaLock size={18} color={COLORS.TEXT_SECONDARY} />
            </div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="flex-1 h-full w-full px-2 py-4 bg-transparent focus:outline-none text-input-placeholder placeholder-[#565454]"
              style={{ color: COLORS.TEXT_PRIMARY }}
              required
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="h-5 w-5 text-blue-600 rounded"
            style={{ borderColor: COLORS.BORDER_PRIMARY }}
            required
          />
          <label
            htmlFor="agreeTerms"
            className="ml-2 block text-sm text-gray-700"
          >
            I agree to all terms
          </label>
        </div>

        <button
          type="submit"
          className="w-32 h-12 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 hover:bg-rose-500"
          style={{ backgroundColor: COLORS.BUTTON_SECONDARY }}
        >
          Register
        </button>

        <div className="mt-4">
          <p className="text-sm text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:text-blue-700">
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
