
# AI Course Generator

AI Course Generator is a web application built with Next.js to create and manage personalized coding courses. This project leverages the power of Gemini for generating course content and integrates YouTube videos using the YouTube Data API v3, tailoring course materials to users' preferences and learning needs.
Features

    AI-Generated Content: Automatically generate coding course materials using Gemini.
    Video Integration: Seamless YouTube video integration via YouTube Data API v3 to enrich learning.
    User Management: Secure user authentication powered by Clerk.
    Optimized Performance: Built with modern web technologies like Next.js and Tailwind CSS for styling.
    Responsive Design: Fully responsive and mobile-friendly.



## Tech Stack 

    Frontend: Next.js 15 with App Router and Tailwind CSS for modern styling.
    Backend: API routes with Gemini for AI-powered course content generation.
    Video Integration: YouTube Data API v3 for embedding relevant videos into courses.
    Styling: Tailwind CSS for responsive design.
    Authentication: Clerk integration for user management.
    Database: PostgreSQL with Drizzle ORM.

## Getting Started

Clone the repository:

    git clone : https://github.com/1754riya/EduStack-/new/master 
    cd ai-course-generator
## Set up environment variable

Add your Gemini API key and YouTube Data API v3 key in an .env file:
 
    GEMINI_API_KEY=your-gemini-api-key

    YOUTUBE_API_KEY=your-youtube-api-key
## Run the development serve:
    npm run dev

Open your browser and navigate to:

    http://localhost:3000
