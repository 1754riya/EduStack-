"use client";
import { UsercourselistContext } from "@/app/_context/UsercourselistContext";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useContext } from "react";

function AddCourse() {
  const { user } = useUser();
  const { usercourselist, setUsercourselist } = useContext(
    UsercourselistContext
    
  );
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl">
          Hello, <span className="font-bold">{user?.fullName || "User"}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Create new course with AI, Share with friends and Learn.
        </p>
      </div>
      <Link
        href={
          usercourselist?.length >= 5 ? "/dashboard/upgrade" : "/create-course"
        }
      >
        <Button>+ Create AI Course</Button>
      </Link>
    </div>
  );
}

export default AddCourse;
