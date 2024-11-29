"use client";

import React, { useState } from "react";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    companyStage: "",
    investmentType: "",
    impactCriteria: "",
    ticketSize: "",
    personalName: "",
    email: "",
    phone: "",
    projectName: "",
    projectDescription: "",
    fundingAmount: "",
    goals: "",
    additionalNotes: "",
  });

  const titles = [
    "User Preference",
    "Personal Information",
    "Project Details",
    "Funding Goals",
  ];
  const subTitles = [
    "For the purpose of giving you the best experience, these details are required",
    "Please provide your personal details for better identification.",
    "Describe your project to help us understand your work better.",
    "Specify your funding goals and additional information.",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  const handleNext = () => {
    if (currentPage < titles.length - 1) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">{titles[currentPage]}</h1>
        <p className="text-sm text-gray-500 mb-6">{subTitles[currentPage]}</p>
        <form>
          {/* Dynamic Form Content */}
          <Forms
            page={currentPage}
            formData={formData}
            onChange={handleInputChange}
          />
        </form>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`${
              currentPage === 0
                ? "text-gray-300"
                : "text-blue-500 hover:underline"
            }`}
          >
            Back
          </button>
          <button
            onClick={
              currentPage === titles.length - 1 ? handleSubmit : handleNext
            }
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {currentPage === titles.length - 1 ? "Save and continue" : "Next"}
          </button>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-500 mt-4">
          <span>🔒 Your info is safely secured</span>
        </div>
      </div>
    </div>
  );
};

// Forms Component to Render Forms Dynamically
export const Forms: React.FC<{
  page: number;
  formData: any;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}> = ({ page, formData, onChange }) => {
  switch (page) {
    case 0: // User Preference Form
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred company stage
            </label>
          </div>
        </div>
      );
    case 1: // Personal Information Form
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
          </div>
        </div>
      );
    case 2: // Project Details Form
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
          </div>
        </div>
      );
    case 3: // Funding Goals Form
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Funding Amount
            </label>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Page;
