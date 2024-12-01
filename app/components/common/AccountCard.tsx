
interface AccountProps {
    isActive: boolean;
    title: string;
    description: string;
    icon: any;
  }
  
  const Account: React.FC<AccountProps> = ({
    isActive,
    icon,
    title,
    description,
  }) => {
    return (
      <div
        className={`flex items-center px-4 py-3 rounded-md w-full ${
          isActive ? "bg-gray-50 border-secondaryColor border" : "bg-white shadow"
        } hover:bg-green-50 transition-all ease-in-out duration-100`}
      >
      <div>
      <div
          className={`w-[52px] h-[52px] rounded-full ${
            isActive
              ? "bg-green-500"
              : "bg-white border-[1.5px] border-primaryColor"
          } flex items-center justify-center mr-3 transition-all ease-in-out duration-100`}
        >
          {icon}
        </div>
      </div>
        <div className="w-full">
          <div className="flex w-full justify-between items-center">
            <h3 className="font-medium text-color1 md:text-[18px] leading-[27px]">{title}</h3>
            {isActive && (
              <div className="ml-2 w-4 h-4 rounded-full bg-secondaryColor text-white flex items-center justify-center transition-all ease-in-out duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          <p className="text-color2 text-sm leading-sm w-full text-start flex items-center justify-start">{description}</p>
        </div>
      </div>
    );
  };
  

  export default Account