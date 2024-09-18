//src/app/profile/[[...profile]]/page.tsx
import { UserProfile } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import '../../../app/globals-desktop.css';


const Profile = async () => {
  const { userId } = auth();
  const isAuth = !!userId;
  const user = await currentUser();

  if (!isAuth) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8 scaled-profile" style={{ transform: 'scale(0.6)', transformOrigin: 'top center' }}>
      <h1 style={{ color: 'white' }}>{user?.username}</h1>
      
      <UserProfile />
    </div>
  );
};

export default Profile;
