"use client";

import { userService } from "@/services/user.service";
import { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await userService.getUserProfile();
        setUserData(response.data);
      } catch (error) {
        console.error("Get user profile error:", error);
      }
    };
    getUserData();
  }, []);
  return <div className="w-full pt-20 flex flex-col">
        
  </div>;
};

export default Profile;
