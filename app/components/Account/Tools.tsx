"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useCallback } from "react";

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
  const initialCategories = formData.interestedTags
    ? JSON.parse(formData.interestedTags)
    : [];

  const categories = [
    "Technology",
    "Healthcare",
    "Consumer Goods",
    "Energy",
    "Telecommunications",
    "Real Estate",
    "Transportation",
    "Retail",
    "Agriculture",
    "Financial Services",
    "Utilities",
    "Materials",
    "Industrial Goods and Services",
    "Consumer Services",
    "Big data",
    "Fashion",
    "Food & Drinks",
  ];

  const handleCategoryClick = useCallback(
    (category: string) => {
      const currentCategories = initialCategories;
      let newCategories;

      // If category is already selected, remove it
      if (currentCategories.includes(category)) {
        newCategories = currentCategories.filter(
          (cat: string) => cat !== category
        );
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
          name: "interestedTags",
          value: JSON.stringify(newCategories),
          type: "select-multiple",
        },
      } as React.ChangeEvent<HTMLSelectElement>);
    },
    [initialCategories, onChange]
  );

  switch (page) {
    case 0: // User Preference Form
      return (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-2">
            Select up to 5 categories of interest
            {initialCategories.length > 0
              ? ` (${initialCategories.length} selected)`
              : ""}
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
            <label
              htmlFor="preferredCompanyStage"
              className=" px-1 text-sm font-medium text-color1"
            >
              Preferred company stage
            </label>
            <Select
              value={formData.companyStage || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "companyStage",
                    value: value,
                    type: "select-one",
                  },
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger
                id="preferredCompanyStage"
                className="w-full outline-none focus:right-0"
              >
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
            <label
              htmlFor="investmentsType"
              className=" px-1 text-sm font-medium text-color1"
            >
              Investments Types
            </label>
            <Select
              value={formData.investmentsType || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "investmentsType",
                    value: value,
                    type: "select-one",
                  },
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger
                id="investmentsType"
                className="w-full outline-none focus:right-0"
              >
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
            <label
              htmlFor="investmentsType"
              className=" px-1 text-sm font-medium text-color1"
            >
              Impact criteria
            </label>
            <Select
              value={formData.companyType || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "companyType",
                    value: value,
                    type: "select-one",
                  },
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger
                id="investmentsType"
                className="w-full outline-none focus:right-0"
              >
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

          {/* fouth Select */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="ticketSize"
              className=" px-1 text-sm font-medium text-color1"
            >
              Ticket Size
            </label>
            <Select
              value={formData.ticketSize || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "ticketSize",
                    value: value,
                    type: "select-one",
                  },
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger
                id="ticketSize"
                className="w-full outline-none focus:right-0"
              >
                <SelectValue placeholder="Select" className="text-color2" />
              </SelectTrigger>
              <SelectContent>
  <SelectItem value="4999">$0 - $4,999</SelectItem>
  <SelectItem value="5000">$5,000 - $9,999</SelectItem>
  <SelectItem value="50000">$50,000 - $99,999</SelectItem>
  <SelectItem value="100000">$100,000 - $499,999</SelectItem>
  <SelectItem value="500000">$500,000 - $999,999</SelectItem>
  <SelectItem value="1000000">$1,000,000+</SelectItem>
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
  setFormData: any;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}> = ({ page, formData, onChange, setFormData }) => {
  // Parse categories safely
  const initialCategories = formData.interestedTags
    ? JSON.parse(formData.interestedTags)
    : [];

  const categories = [
    "Technology",
    "Healthcare",
    "Consumer Goods",
    "Energy",
    "Telecommunications",
    "Real Estate",
    "Transportation",
    "Retail",
    "Agriculture",
    "Financial Services",
    "Utilities",
    "Materials",
    "Industrial Goods and Services",
    "Consumer Services",
    "Big data",
    "Fashion",
    "Food & Drinks",
  ];

  const handleCategoryClick = useCallback(
    (category: string) => {
      const currentCategories = initialCategories;
      let newCategories;

      // If category is already selected, remove it
      if (currentCategories.includes(category)) {
        newCategories = currentCategories.filter(
          (cat: string) => cat !== category
        );
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
          name: "interestedTags",
          value: JSON.stringify(newCategories),
          type: "select-multiple",
        },
      } as React.ChangeEvent<HTMLSelectElement>);
    },
    [initialCategories, onChange]
  );

  switch (page) {
    case 0: // User Preference Form
      return (
        <div className="space-y-4">
        <p className="text-sm text-gray-600 mb-2">
          Select up to 5 categories of interest
          {initialCategories.length > 0
            ? ` (${initialCategories.length} selected)`
            : ""}
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
        <div className="flex flex-col gap-3">
          <div>
            <label htmlFor="companyName">Company name</label>
            <input
              type="text"
              value={formData.companyName || ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                })
              }
              name="companyName" // Ensure the name matches the key in the state
              placeholder="Enter company name"
              className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-primaryColor outline-none border-gray-300"
            />
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="jobTitleInCompany"
                className=" px-1 text-sm font-medium text-color1"
              >
                Job title in company
              </label>
              <Select
                value={formData.jobTitleInCompany || ""}
                onValueChange={(value) => {
                  onChange({
                    target: {
                      name: "jobTitleInCompany",
                      value: value,
                      type: "select-one",
                    },
                  } as React.ChangeEvent<HTMLSelectElement>);
                }}
              >
                <SelectTrigger
                  id="jobTitleInCompany"
                  className="w-full outline-none focus:right-0"
                >
                  <SelectValue placeholder="Select" className="text-color2" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cio">
                    Chief Information Officer (CIO)
                  </SelectItem>
                  <SelectItem value="cto">
                    Chief Technology Officer (CTO)
                  </SelectItem>
                  <SelectItem value="ceo">
                    Chief Executive Officer (CEO)
                  </SelectItem>
                  <SelectItem value="cfo">
                    Chief Financial Officer (CFO)
                  </SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="consultant">Consultant</SelectItem>
                  <SelectItem value="intern">Intern</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
