'use client'
import Button from "@/app/components/common/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { X } from "lucide-react";
import { FormEvent, useCallback } from "react";


export const Forms: React.FC<{
  page: number;
  formData: any;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}> = ({ page, formData, onChange }) => {
  // Parse categories safely
  const initialCategories = formData.selectedCategories 
    ? JSON.parse(formData.selectedCategories) 
    : [];

  const categories = [
    "Technology", "Healthcare", "Consumer Goods", "Energy", "Telecommunications", 
    "Real Estate", "Transportation", "Retail", "Agriculture", "Financial Services", 
    "Utilities", "Materials", "Industrial Goods and Services", "Consumer Services", 
    "Big data", "Fashion", "Food & Drinks",
  ];

  const handleCategoryClick = useCallback((category: string) => {
    const currentCategories = initialCategories;
    let newCategories;

    // If category is already selected, remove it
    if (currentCategories.includes(category)) {
      newCategories = currentCategories.filter((cat: string) => cat !== category);
    }
    // Limit to max 5 categories
    else if (currentCategories.length < 5) {
      newCategories = [...currentCategories, category];
    }
    // If already at max, replace the first selected category
    else {
      newCategories = [...currentCategories.slice(1), category];
    }

    // Trigger onChange with the new categories
    onChange({
      target: {
        name: "selectedCategories",
        value: JSON.stringify(newCategories),
        type: 'select-multiple'
      }
    } as React.ChangeEvent<HTMLSelectElement>);
  }, [initialCategories, onChange]);
  
  switch (page) {
    case 0: // User Preference Form
      return (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-2">
            Select up to 5 categories of interest 
            {initialCategories.length > 0 ? ` (${initialCategories.length} selected)` : ""}
          </p>
          <div className="grid grid-cols-3 w-full gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`py-2 px-1 rounded-full text-sm leading-sm text-center font-[400] transition-all duration-300 transform
                  ${
                    initialCategories.includes(category)
                      ? "bg-primaryColor text-white"
                      : "bg-gray-100 text-color1 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      );
    case 1: // Personal Information Form
      return (
        <div className="flex w-full flex-col gap-4">
          {/* First Select */}
          <div className="flex flex-col gap-2">
            <label htmlFor="theme-select-1" className="text-sm font-medium text-gray-700">
              Select Theme
            </label>
            <Select 
              value={formData.theme || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "theme",
                    value: value,
                    type: 'select-one'
                  }
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger id="theme-select-1" className="w-full outline-none focus:right-0">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        
          {/* Second Select */}
          <div className="flex flex-col gap-2">
            <label htmlFor="theme-select-2" className="text-sm font-medium text-gray-700">
              Select Mode
            </label>
            <Select 
              value={formData.mode || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "mode",
                    value: value,
                    type: 'select-one'
                  }
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger id="theme-select-2" className="w-full outline-none focus:right-0">
                <SelectValue placeholder="Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        
          {/* Third Select */}
          <div className="flex flex-col gap-2">
            <label htmlFor="theme-select-3" className="text-sm font-medium text-gray-700">
              Select Option
            </label>
            <Select 
              value={formData.option || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "option",
                    value: value,
                    type: 'select-one'
                  }
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger id="theme-select-3" className="w-full outline-none focus:right-0">
                <SelectValue placeholder="Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      );

    default:
      return null;
  }
};


export const SubmitConfirmationModal = ({
  onClose,
  onConfirm,
  formData,
}: {
  onClose: () => void;
  onConfirm: (e: FormEvent) => void;
  formData: Record<string, string>;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all ease-in-out duration-500 "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Confirm Submission</h2>
          <button
            onClick={onClose}
            className="text-color1 bg-gray-200 p-2 rounded-full  hover:bg-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-end space-x-4">
          <Button onClick={onClose} variant="secondary">
            Edit Information
          </Button>
          <Button onClick={onConfirm} variant="primary">
            Confirm Submission
          </Button>
        </div>
      </div>
    </div>
  );
};
