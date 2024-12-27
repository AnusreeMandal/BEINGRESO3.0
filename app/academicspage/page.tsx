
"use client";
import React, { useState, useEffect } from "react";
import {
  Book,
  FileText,
  Archive,
  Download,
  Layers,
  GraduationCap,
} from "lucide-react";

const AcademicsPage = () => {
  const [isMounted, setIsMounted] = useState(false); // Add state for mounting animation
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(""); // State to store the selected department

  useEffect(() => {
    // Trigger heading animation after 500ms
    const headingTimer = setTimeout(() => {
      setIsHeadingVisible(true);
    }, 500);

    // Trigger mounted state for cards after component mounts
    const mountedTimer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(headingTimer);
      clearTimeout(mountedTimer);
    };
  }, []);

  const resourceCategories = [
    {
      icon: <Book className="text-white" size={36} />,
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
      title: "Textbook References",
      description: "Curated list of recommended textbooks for each subject",
      items: [
        "Computer Science Textbooks",
        "Engineering Mathematics",
        "Programming Language References",
      ],
    },
    {
      icon: <FileText className="text-white" size={36} />,
      bgColor: "bg-gradient-to-r from-teal-400 to-teal-600",
      title: "Study Notes",
      description: "Comprehensive notes created by top students and professors",
      items: [
        "Semester-wise Class Notes",
        "Subject Summaries",
        "Exam Preparation Guides",
      ],
    },
    {
      icon: <Archive className="text-white" size={36} />,
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-700",
      title: "Previous Year Papers",
      description: "Archived question papers to help you understand exam patterns",
      items: [
        "Semester Exam Papers",
        "Competitive Exam Questions",
        "Mock Test Papers",
      ],
    },
    {
      icon: <Layers className="text-white" size={36} />,
      bgColor: "bg-gradient-to-r from-indigo-400 to-indigo-600",
      title: "Study Materials",
      description: "Additional resources to supplement your learning",
      items: ["Video Tutorials", "Research Papers", "Online Workshops"],
    },
    {
      icon: <GraduationCap className="text-white" size={36} />,
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
      title: "Career Guidance",
      description: "Resources to help you plan your academic and professional path",
      items: ["Internship Guides", "Career Counseling", "Skill Development"],
    },
  ];

  // List of departments
  const departments = [
    "Computer Science and Engineering",
    "Information Technology",
    "Electronics and Telecommunications",
    "Electrical Engineering",
    "Mechanical",
    "Civil",
    "Aerospace",
    "Mining",
    "Metallurgy",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:via-fuchsia-700 hover:to-pink-700 transition-colors duration-300 animate-fade-in">
            Academic Resources Hub
          </h1>
          <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 mt-4 animate-fade-in-delay">
            Your comprehensive platform for learning, growth, and academic success
          </p>
        </div>

        {/* Department Selection */}
        <div className="mb-8 border-2 border-transparent border-animate rounded-lg p-4 bg-white shadow-md">
          <label
            htmlFor="department"
            className="block text-xl font-semibold text-purple-800 mb-2"
          >
            Select Your Department:
          </label>
          <select
            id="department"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg text-purple-800"
          >
            <option value="">-- Choose Department --</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Render Resources only if a department is selected */}
        {selectedDepartment && (
          <>
            {/* Resource Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 hover:scale-105 ${
                    isMounted ? "animate__animated animate__fadeInUp" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`${category.bgColor} rounded-lg p-6 h-full flex flex-col shadow-lg hover:shadow-2xl`}
                  >
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <h2 className="text-2xl font-semibold ml-4 text-white">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-white/80 mb-4 flex-grow">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center text-white hover:bg-white/20 p-2 rounded transition-colors cursor-pointer"
                        >
                          <Download size={16} className="mr-2 text-white/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore Resources Button */}
            <div
              className="mt-12 text-center animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                hover:from-purple-700 hover:to-pink-700 transition-colors shadow-md hover:shadow-lg"
              >
                Explore All Resources
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AcademicsPage;
