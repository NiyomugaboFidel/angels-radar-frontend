import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SidebarProps {
  isActive?: string;
  setIsActive?: (value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isActive, setIsActive }) => {
  // Define the buttons' data
  const buttons = [
    {
      id: "watchlist",
      label: "Watchlist",
      icon: (isActive: boolean) => (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.5H6.00001C5.40327 1.5 4.83097 1.73705 4.40902 2.15901C3.98706 2.58097 3.75001 3.15326 3.75001 3.75V15.75C3.74948 15.8822 3.78389 16.0121 3.84974 16.1267C3.91559 16.2413 4.01055 16.3364 4.12501 16.4025C4.23902 16.4683 4.36835 16.503 4.50001 16.503C4.63166 16.503 4.76099 16.4683 4.87501 16.4025L9.00001 14.0175L13.125 16.4025C13.2393 16.4673 13.3686 16.5009 13.5 16.5C13.6314 16.5009 13.7607 16.4673 13.875 16.4025C13.9895 16.3364 14.0844 16.2413 14.1503 16.1267C14.2161 16.0121 14.2505 15.8822 14.25 15.75V3.75C14.25 3.15326 14.013 2.58097 13.591 2.15901C13.169 1.73705 12.5967 1.5 12 1.5ZM12.75 14.4525L9.37501 12.5025C9.26099 12.4367 9.13166 12.402 9.00001 12.402C8.86835 12.402 8.73902 12.4367 8.62501 12.5025L5.25001 14.4525V3.75C5.25001 3.55109 5.32902 3.36032 5.46968 3.21967C5.61033 3.07902 5.80109 3 6.00001 3H12C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V14.4525Z"
            fill={isActive ? "#ffffff" : "#073763"}
          />
        </svg>
      ),
    },
    {
      id: "radar",
      label: "Radar",
      icon: (isActive: boolean) => (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2501 7.50005H9.00005V5.25005C9.00005 5.05114 8.92103 4.86037 8.78038 4.71972C8.63973 4.57907 8.44896 4.50005 8.25005 4.50005C8.05114 4.50005 7.86037 4.57907 7.71972 4.71972C7.57907 4.86037 7.50005 5.05114 7.50005 5.25005V7.50005H5.25005C5.05114 7.50005 4.86037 7.57907 4.71972 7.71972C4.57907 7.86037 4.50005 8.05114 4.50005 8.25005C4.50005 8.44896 4.57907 8.63973 4.71972 8.78038C4.86037 8.92103 5.05114 9.00005 5.25005 9.00005H7.50005V11.2501C7.50005 11.449 7.57907 11.6397 7.71972 11.7804C7.86037 11.921 8.05114 12.0001 8.25005 12.0001C8.44896 12.0001 8.63973 11.921 8.78038 11.7804C8.92103 11.6397 9.00005 11.449 9.00005 11.2501V9.00005H11.2501C11.449 9.00005 11.6397 8.92103 11.7804 8.78038C11.921 8.63973 12.0001 8.44896 12.0001 8.25005C12.0001 8.05114 11.921 7.86037 11.7804 7.71972C11.6397 7.57907 11.449 7.50005 11.2501 7.50005ZM16.2825 15.2176L13.5001 12.4576C14.5801 11.1109 15.1032 9.40152 14.9617 7.68103C14.8201 5.96053 14.0248 4.35964 12.7392 3.20753C11.4536 2.05543 9.77541 1.43968 8.04974 1.4869C6.32408 1.53412 4.68209 2.24072 3.46141 3.46141C2.24072 4.68209 1.53412 6.32408 1.4869 8.04974C1.43968 9.77541 2.05543 11.4536 3.20753 12.7392C4.35964 14.0248 5.96053 14.8201 7.68103 14.9617C9.40152 15.1032 11.1109 14.5801 12.4576 13.5001L15.2176 16.2601C15.2873 16.3303 15.3702 16.3861 15.4616 16.4242C15.553 16.4623 15.651 16.4819 15.7501 16.4819C15.8491 16.4819 15.9471 16.4623 16.0385 16.4242C16.1299 16.3861 16.2128 16.3303 16.2825 16.2601C16.4177 16.1202 16.4933 15.9333 16.4933 15.7388C16.4933 15.5443 16.4177 15.3574 16.2825 15.2176ZM8.25005 13.5001C7.2117 13.5001 6.19666 13.1921 5.33331 12.6153C4.46995 12.0384 3.79704 11.2185 3.39968 10.2591C3.00232 9.29983 2.89836 8.24423 3.10093 7.22583C3.3035 6.20743 3.80351 5.27197 4.53774 4.53774C5.27197 3.80351 6.20743 3.3035 7.22583 3.10093C8.24423 2.89836 9.29983 3.00232 10.2591 3.39968C11.2185 3.79704 12.0384 4.46995 12.6153 5.33331C13.1921 6.19666 13.5001 7.2117 13.5001 8.25005C13.5001 9.64244 12.9469 10.9778 11.9624 11.9624C10.9778 12.9469 9.64244 13.5001 8.25005 13.5001Z"
            fill={isActive ? "#ffffff" : "#073763"}
          />
        </svg>
      ),
    },
    {
      id: "profile",
      label: "Profile",
      icon: (isActive: boolean) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1075 8.21C10.5822 7.70018 10.8497 7.03158 10.8575 6.335C10.8575 5.58311 10.5588 4.86202 10.0271 4.33035C9.49548 3.79869 8.77439 3.5 8.0225 3.5C7.27061 3.5 6.54952 3.79869 6.01785 4.33035C5.48619 4.86202 5.1875 5.58311 5.1875 6.335C5.19533 7.03158 5.46277 7.70018 5.9375 8.21C5.27649 8.53915 4.70767 9.02745 4.28219 9.63098C3.85671 10.2345 3.58792 10.9343 3.5 11.6675C3.47812 11.8664 3.53615 12.0659 3.66133 12.222C3.78651 12.3781 3.96859 12.4781 4.1675 12.5C4.36641 12.5219 4.56587 12.4638 4.72199 12.3387C4.87812 12.2135 4.97812 12.0314 5 11.8325C5.0895 11.1059 5.44163 10.437 5.99006 9.95199C6.5385 9.46696 7.24536 9.19923 7.9775 9.19923C8.70964 9.19923 9.4165 9.46696 9.96494 9.95199C10.5134 10.437 10.8655 11.1059 10.955 11.8325C10.9759 12.0248 11.0702 12.2016 11.2184 12.326C11.3665 12.4504 11.557 12.5127 11.75 12.5H11.8325C12.0291 12.4774 12.2088 12.378 12.3324 12.2234C12.456 12.0689 12.5136 11.8718 12.4925 11.675C12.4111 10.9457 12.1508 10.2478 11.7347 9.64328C11.3186 9.03879 10.7597 8.54645 10.1075 8.21ZM8 7.67C7.73596 7.67 7.47785 7.5917 7.25831 7.44501C7.03877 7.29832 6.86766 7.08982 6.76662 6.84588C6.66558 6.60194 6.63914 6.33352 6.69065 6.07455C6.74216 5.81559 6.86931 5.57772 7.05601 5.39101C7.24272 5.20431 7.48059 5.07716 7.73955 5.02565C7.99852 4.97414 8.26694 5.00058 8.51088 5.10162C8.75482 5.20266 8.96332 5.37377 9.11001 5.59331C9.2567 5.81285 9.335 6.07096 9.335 6.335C9.335 6.68906 9.19435 7.02863 8.94399 7.27899C8.69363 7.52935 8.35406 7.67 8 7.67ZM13.25 0.5H2.75C2.15326 0.5 1.58097 0.737053 1.15901 1.15901C0.737053 1.58097 0.5 2.15326 0.5 2.75V13.25C0.5 13.8467 0.737053 14.419 1.15901 14.841C1.58097 15.2629 2.15326 15.5 2.75 15.5H13.25C13.8467 15.5 14.419 15.2629 14.841 14.841C15.2629 14.419 15.5 13.8467 15.5 13.25V2.75C15.5 2.15326 15.2629 1.58097 14.841 1.15901C14.419 0.737053 13.8467 0.5 13.25 0.5ZM14 13.25C14 13.4489 13.921 13.6397 13.7803 13.7803C13.6397 13.921 13.4489 14 13.25 14H2.75C2.55109 14 2.36032 13.921 2.21967 13.7803C2.07902 13.6397 2 13.4489 2 13.25V2.75C2 2.55109 2.07902 2.36032 2.21967 2.21967C2.36032 2.07902 2.55109 2 2.75 2H13.25C13.4489 2 13.6397 2.07902 13.7803 2.21967C13.921 2.36032 14 2.55109 14 2.75V13.25Z"
            fill={isActive ? "#ffffff" : "#073763"}
          />
        </svg>
      ),
    },
    {
      id: "plans",
      label: "Plans",
      icon: (isActive: boolean) => (
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2966 4.94195L13.3591 0.441953C13.3064 0.381824 13.2416 0.333604 13.1688 0.300505C13.0961 0.267406 13.0171 0.250189 12.9372 0.25H5.06221C4.98229 0.250189 4.90333 0.267406 4.83058 0.300505C4.75784 0.333604 4.69298 0.381824 4.64033 0.441953L0.702835 4.94195C0.610976 5.04683 0.561339 5.18208 0.563547 5.32148C0.565756 5.46088 0.619653 5.59449 0.714788 5.69641L8.58979 14.1339C8.64242 14.1903 8.7061 14.2353 8.77686 14.2661C8.84762 14.2968 8.92396 14.3127 9.00112 14.3127C9.07828 14.3127 9.15461 14.2968 9.22537 14.2661C9.29614 14.2353 9.35981 14.1903 9.41244 14.1339L17.2874 5.69641C17.3822 5.59414 17.4356 5.46034 17.4373 5.32094C17.439 5.18154 17.3888 5.04648 17.2966 4.94195ZM15.6351 4.75H12.656L10.1247 1.375H12.682L15.6351 4.75ZM5.24362 5.875L7.36213 11.1716L2.41916 5.875H5.24362ZM11.5436 5.875L8.99971 12.2355L6.4558 5.875H11.5436ZM6.74971 4.75L8.99971 1.74977L11.2497 4.75H6.74971ZM12.7558 5.875H15.5803L10.6373 11.1716L12.7558 5.875ZM5.31744 1.375H7.87471L5.34346 4.75H2.36432L5.31744 1.375Z"
            fill={isActive ? "#ffffff" : "#073763"}
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="text-color1 shadow-md w-full  flex flex-col  justify-center">
      {/* Logo Section */}
      <Link className=" p-2 xl:p-5" href="/">
        <div className="flex justify-start items-center gap-1">
          <Image
            height={30}
            width={30}
            src="/logo.svg"
            alt="Angels Radar Logo"
          />
          <span className="text-[24px] font-bold">Angels Radar</span>
        </div>
      </Link>

      {/* Sidebar Buttons */}
      <div className="flex flex-col gap-2 border-[#ECEDEF] border-b-2 h-[70vh] ">
        <div className="p-5 w-full h-full flex flex-col gap-2">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => setIsActive?.(button.id)}
              className={`${
                isActive === button.id
                  ? "bg-primaryColor text-white"
                  : "bg-transparent"
              } group cursor-pointer p-2 hover:bg-primaryColor hover:text-white text-sm w-full rounded-[5px] flex items-center gap-3`}
            >
              {button.icon(isActive === button.id)}
              {button.label}
            </button>
          ))}
        </div>
      </div>
      {/* Sidbar Footer  */}
      <div className="p-2 xl:p-5 flex items-start justify-center flex-col gap-2">
        <button
          onClick={() => setIsActive?.("about")}
          className={`${
            isActive === "about"
              ? "bg-primaryColor text-white"
              : "bg-transparent"
          } group cursor-pointer p-2 hover:bg-primaryColor hover:text-white text-sm w-full rounded-[5px] flex items-center gap-3`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 7.25C7.80109 7.25 7.61033 7.32902 7.46967 7.46967C7.32902 7.61032 7.25 7.80109 7.25 8V11C7.25 11.1989 7.32902 11.3897 7.46967 11.5303C7.61033 11.671 7.80109 11.75 8 11.75C8.19892 11.75 8.38968 11.671 8.53033 11.5303C8.67099 11.3897 8.75 11.1989 8.75 11V8C8.75 7.80109 8.67099 7.61032 8.53033 7.46967C8.38968 7.32902 8.19892 7.25 8 7.25ZM8.285 4.31C8.10241 4.23499 7.8976 4.23499 7.715 4.31C7.62294 4.3457 7.53883 4.39922 7.4675 4.4675C7.40126 4.5404 7.34799 4.62411 7.31 4.715C7.26802 4.80401 7.24747 4.90162 7.25 5C7.24943 5.0987 7.26835 5.19655 7.30568 5.28793C7.343 5.37931 7.39799 5.46242 7.4675 5.5325C7.5404 5.59875 7.62412 5.65202 7.715 5.69C7.82863 5.73668 7.95198 5.75474 8.07421 5.74258C8.19645 5.73043 8.31383 5.68844 8.41604 5.6203C8.51825 5.55216 8.60215 5.45996 8.66039 5.3518C8.71862 5.24364 8.74939 5.12284 8.75 5C8.74724 4.80142 8.66955 4.61123 8.5325 4.4675C8.46118 4.39922 8.37707 4.3457 8.285 4.31ZM8 0.5C6.51664 0.5 5.0666 0.939867 3.83323 1.76398C2.59986 2.58809 1.63856 3.75943 1.07091 5.12987C0.50325 6.50032 0.354725 8.00832 0.644114 9.46318C0.933503 10.918 1.64781 12.2544 2.6967 13.3033C3.7456 14.3522 5.08197 15.0665 6.53683 15.3559C7.99168 15.6453 9.49968 15.4968 10.8701 14.9291C12.2406 14.3614 13.4119 13.4001 14.236 12.1668C15.0601 10.9334 15.5 9.48336 15.5 8C15.5 7.01509 15.306 6.03982 14.9291 5.12987C14.5522 4.21993 13.9997 3.39314 13.3033 2.6967C12.6069 2.00026 11.7801 1.44781 10.8701 1.0709C9.96019 0.693993 8.98492 0.5 8 0.5ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14Z"
              fill={isActive === "about" ? "#ffffff" : "#073763"}
            />
          </svg>
          About Angles Radar
        </button>
        <button className="group cursor-pointer p-2 hover:bg-red-600 hover:text-white text-sm w-full rounded-[5px] flex items-center gap-3">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5C7.60218 5 7.22065 5.15804 6.93934 5.43934C6.65804 5.72064 6.5 6.10218 6.5 6.5C6.50158 6.76177 6.57164 7.01857 6.70322 7.24488C6.83479 7.47118 7.0233 7.65912 7.25 7.79V10.25C7.25 10.4489 7.32902 10.6397 7.46967 10.7803C7.61033 10.921 7.80109 11 8 11C8.19892 11 8.38968 10.921 8.53033 10.7803C8.67099 10.6397 8.75 10.4489 8.75 10.25V7.79C8.97671 7.65912 9.16522 7.47118 9.29679 7.24488C9.42837 7.01857 9.49842 6.76177 9.5 6.5C9.5 6.10218 9.34197 5.72064 9.06066 5.43934C8.77936 5.15804 8.39783 5 8 5ZM8 0.5C6.51664 0.5 5.0666 0.939867 3.83323 1.76398C2.59986 2.58809 1.63856 3.75943 1.07091 5.12987C0.50325 6.50032 0.354725 8.00832 0.644114 9.46318C0.933503 10.918 1.64781 12.2544 2.6967 13.3033C3.7456 14.3522 5.08197 15.0665 6.53683 15.3559C7.99168 15.6453 9.49968 15.4968 10.8701 14.9291C12.2406 14.3614 13.4119 13.4001 14.236 12.1668C15.0601 10.9334 15.5 9.48336 15.5 8C15.5 7.01509 15.306 6.03982 14.9291 5.12987C14.5522 4.21993 13.9997 3.39314 13.3033 2.6967C12.6069 2.00026 11.7801 1.44781 10.8701 1.0709C9.96019 0.693993 8.98492 0.5 8 0.5ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14Z"
              fill={isActive === "logout" ? "#ffffff" : "#073763"}
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;