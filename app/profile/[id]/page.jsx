"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();

  const username = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`, {
        cache: "no-store",
      });
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params?.id]);

  return (
    <Profile
      name={`${username}'s`}
      desc={`Welcome to ${username}'s personalized profile page`}
      data={userPosts}
    />
  );
};

export default UserProfile;

export const revalidate = 10;
