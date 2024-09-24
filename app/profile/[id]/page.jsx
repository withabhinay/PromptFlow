"use client"
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const PplProfile = ({params}) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get('name');

  const [PplPosts, setPplPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async() => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setPplPosts(data); 
    }
    if (params?.id) fetchPosts();
  }, [params.id]);

  const handleEdit =(post) => {
    router.push(`/update-prompt?id=${post._id}`) //to get this use :"useSearchParams"
  }

  
  
  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName} personalized profile page. Explore ${userName}'s exceptional prompts`}
      data={PplPosts}
    />
  )
}

export default PplProfile