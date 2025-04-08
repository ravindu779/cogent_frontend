import React, { useState, useEffect } from "react";
import { FORM_CONFIG } from "../constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: null });
  };

  const validate = () => {
    const newErrors = {};
    FORM_CONFIG.fields.forEach((field) => {
      const value = formData[field.id] || "";
      if (field.required && !value.trim()) {
        newErrors[field.id] = field.validation?.required || "Required";
      }
      if (field.validation?.pattern && !field.validation.pattern.value.test(value)) {
        newErrors[field.id] = field.validation.pattern.message;
      }
    });

    if (!agreed) {
      newErrors.agreed = "You must agree to the privacy policy.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      alert(FORM_CONFIG.successMessage);
      setFormData({});
      setAgreed(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="register" className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center p-6 scroll-smooth">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="text-white space-y-4">
          <h2 className="text-6xl font-bold">{FORM_CONFIG.title}</h2>
          <p className="text-2xl">{FORM_CONFIG.description}</p>
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={handleSubmit}
          className={`bg-gray-900 text-white p-8 rounded-2xl shadow-lg shadow-gray-700 w-full space-y-4 transition-all duration-700 transform ${
            showForm ? "opacity-100 translate-y-0 animate-fadeIn" : "opacity-0 translate-y-10"
          }`}
        >
          {FORM_CONFIG.fields.map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium mb-1">
                {field.label || field.placeholder}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-xl transition-all duration-300"
                  placeholder={field.placeholder}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                />
              ) : (
                <input
                  type={field.type}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-xl transition-all duration-300"
                  placeholder={field.placeholder}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                />
              )}
              {errors[field.id] && (
                <p className="text-red-400 text-sm mt-1">{errors[field.id]}</p>
              )}
            </div>
          ))}

          {/* Privacy Checkbox */}
          <div className="flex items-start">
            <input
              id="agreement"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 mr-2"
              required
            />
            <label htmlFor="agreement" className="text-sm text-gray-300">
              {FORM_CONFIG.privacyText}{" "}
              <a href={FORM_CONFIG.privacyLink} className="underline text-pink-400" target="_blank" rel="noopener noreferrer">
                Cogent Solutions Privacy Policy
              </a>.
            </label>
          </div>
          {errors.agreed && (
            <p className="text-red-400 text-sm mt-1">{errors.agreed}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3 rounded-lg ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : FORM_CONFIG.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}