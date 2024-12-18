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
      <div className="relative w-full h-48">
        <Image
          src={background}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative bg-white px-4 pb-6 pt-4">
        {/* Logo and Name */}
        <div className="flex items-center gap-4">
          {/* Profile Logo */}
          <div className="w-1/4">
            <div className="absolute -top-8 left-4 w-[100px] h-[100px] bg-white border rounded-full overflow-hidden shadow-md">
              <Image
                src={logo}
                alt="Profile Logo"
                layout="responsive"
                width={64}
                height={64}
              />
            </div>
          </div>

          {/* Profile Information */}
          <div className="w-full">
            <div className="flex items-center gap-4">
              <p className=" text-[18px]  leading-[28px] font-[600] text-color1">
                {companyName}
              </p>
              <MdVerified className="text-secondaryColor" />
            </div>
            <p className="text-[16px] leading-[20px] text-color1">{tagline}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {interestedTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-primaryColor text-[14px] font-[500] px-3 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
                {/* Buttons */}
          <div className="flex gap-4 mt-6 h-full items-end w-full">
      <Button className="w-full">
      Schedule a call
      </Button>
     <Button variant="secondary">
        Seek deck
     </Button>
        </div>
        </div>

  
       
      </div>
    </div>
  );
};

export default ProfileHeader;
