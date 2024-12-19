import Image from "next/image";
import { MdVerified } from "react-icons/md";
import Button from "./Button";

interface ProfileHeaderProps {
  companyName: string;
  tagline: string;
  interestedTags: string[];
  logo: string;
  background: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  companyName,
  tagline,
  interestedTags,
  logo,
  background,
}) => {
  return (
    <div className="relative w-full border rounded-lg overflow-hidden shadow-lg">
      {/* Header Background */}
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={background}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative bg-white px-4 pb-6 pt-2 ">
        {/* Logo and Name */}
        <div className=" flex w-full md:flex-row flex-col  items-center  md:gap-[150px]">
          {/* Profile Logo */}
         <div className="w-full md:w-[0%]">
         <div className="absolute -top-8  md:w-[120px] h-[80px] w-[80px] md:h-[120px] bg-white border rounded-full overflow-hidden shadow-md">
            <Image
              src={logo}
              alt="Profile Logo"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
         </div>

          {/* Profile Information */}
         <div className="flex flex-col md:flex-row w-full md:justify-between items-end gap-2">
         <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <p className="md:text-lg  font-semibold text-color1">
                {companyName}
              </p>
              <MdVerified className="text-secondaryColor" />
            </div>
            <p className="text-sm sm:text-base text-color1 ">{tagline}</p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-4">
              {interestedTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-primaryColor text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

    {/* Buttons */}
    <div className="flex  gap-4 ">
          <Button className="w-full sm:w-auto">Schedule a call</Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            Seek deck
          </Button>
        </div>

         </div>
        </div>

    
      </div>
    </div>
  );
};


export default ProfileHeader;
