import React from "react";

const ProfileImage = ({ src, alt = "Profile" }) => {
  return (
    <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-500/5 border-2 border-gray-400/10 shadow-2xl shadow-pink-400/20 p-1">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full  transition-opacity duration-100"
      />
    </div>
  );
};

export default ProfileImage;
