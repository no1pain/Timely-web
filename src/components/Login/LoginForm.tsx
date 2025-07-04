"use client";

import { useState } from "react";
import { COLORS } from "@/shared/constants/colors/colors";
import { FaEnvelope, FaLock, FaQuestionCircle } from "react-icons/fa";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
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
    <div className="w-full max-w-3xl px-4">
      <h1
        className="text-4xl font-bold mb-8 text-left"
        style={{ color: COLORS.TEXT_PRIMARY }}
      >
        Sign In
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 rounded"
              style={{ borderColor: COLORS.BORDER_PRIMARY }}
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-sm text-blue-500 hover:text-blue-700 flex items-center"
          >
            <FaQuestionCircle size={14} className="mr-1" />
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-32 h-12 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 hover:bg-blue-600"
          style={{ backgroundColor: COLORS.BUTTON_PRIMARY }}
        >
          Sign In
        </button>

        <div className="mt-4">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
