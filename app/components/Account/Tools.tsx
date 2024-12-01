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
          <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-3">
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
          <div className="flex flex-col gap-1">
            <label htmlFor="preferredCompanyStage" className=" px-1 text-sm font-medium text-color1">
             Preferred company stage
            </label>
            <Select 
              value={formData.companyStage || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "companyStage",
                    value: value,
                    type: 'select-one'
                  }
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger id="preferredCompanyStage" className="w-full outline-none focus:right-0">
              <SelectValue placeholder="Select" className="text-color2" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="idea">Idea</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="prototype">Prototype</SelectItem>
                <SelectItem value="mvp">MVP</SelectItem>
                <SelectItem value="preRevenue">Pre revenue</SelectItem>
                <SelectItem value="postRevenue">Post revenue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        
          {/* Second Select */}
          <div className="flex flex-col gap-1">
            <label htmlFor="investmentsTypes" className=" px-1 text-sm font-medium text-color1">
            Investments Types
            </label>
            <Select 
              value={formData.investmentsTypes || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "investmentsTypes",
                    value: value,
                    type: 'select-one'
                  }
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger id="investmentsTypes" className="w-full outline-none focus:right-0">
               <SelectValue placeholder="Select" className="text-color2" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="debt">Debt</SelectItem>
                <SelectItem value="convertibles">Convertibles</SelectItem>
                <SelectItem value="safe">Safe</SelectItem>
                <SelectItem value="equity">Equity</SelectItem>
                <SelectItem value="impact">Impact</SelectItem>
                <SelectItem value="grants">Grants</SelectItem>
              </SelectContent>
            </Select>
          </div>
      
        
          {/* Third Select */}
          <div className="flex flex-col gap-1">
            <label htmlFor="investmentsTypes" className=" px-1 text-sm font-medium text-color1">
            Impact criteria
            </label>
            <Select 
              value={formData.impactCriteria || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "impactCriteria",
                    value: value,
                    type: 'select-one'
                  }
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger id="investmentsTypes" className="w-full outline-none focus:right-0">
                <SelectValue placeholder="Select" className="text-color2"  />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="debt">Debt</SelectItem>
                <SelectItem value="convertibles">Convertibles</SelectItem>
                <SelectItem value="safe">Safe</SelectItem>
                <SelectItem value="equity">Equity</SelectItem>
                <SelectItem value="impact">Impact</SelectItem>
                <SelectItem value="grants">Grants</SelectItem>
              </SelectContent>
            </Select>
          </div>
        
        </div>
      );

    default:
      return null;
  }
};

export const Forms2: React.FC<{
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
    "Big data", "Fashion", "Food & Drinks" ,
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
     <div>
        <input type="text" placeholder="Company Name" className={`w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-primaryColor outline-none border-gray-300 `} />
     </div>
      );

    default:
      return null;
  }
};


export  const SubmitConfirmationModal = ({ 
  onClose, 
  onConfirm, 
  formData 
}: { 
  onClose: () => void, 
  onConfirm: (e:FormEvent) => void, 
  formData: Record<string, string> 
}) => {
  return (
    <div 
      className=""
      onClick={onClose}
    >
      <div 
        className=""
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Confirm Submission</h2>
        </div>
        
        <div className="space-y-4 mb-6">
          <p className="text-gray-600">Please review your information before submitting:</p>
          
          {Object.entries(formData).map(([key, value]) => (
            <div 
              key={key} 
              className="flex justify-between bg-gray-100 p-2 rounded"
            >
              <span className="font-medium capitalize">
                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
              </span>
              <span className="text-gray-700">
                {value || 'Not provided'}
              </span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button 
            onClick={onClose} 
            variant="secondary"
          >
            Edit Information
          </Button>
          <Button 
            onClick={onConfirm} 
            variant="primary"
          >
            Confirm Submission
          </Button>
        </div>
      </div>
    </div>
  );
};
