// Typed department/program data for reuse across pages
export interface Department {
  id: string;
  name: string;
  shortDescription: string;
  keyAreas: string[];
  duration: string;
  level: string;
}

export const departments: Department[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortDescription: "Cutting-edge curriculum in software development, AI, and systems design preparing students for the digital future.",
    keyAreas: ["Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Software Engineering"],
    duration: "4 years",
    level: "Undergraduate",
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    shortDescription: "Comprehensive training in electronics, telecommunications, and embedded systems with hands-on laboratory experience.",
    keyAreas: ["VLSI Design", "Wireless Communication", "IoT", "Signal Processing"],
    duration: "4 years",
    level: "Undergraduate",
  },
  {
    id: "me",
    name: "Mechanical Engineering",
    shortDescription: "Traditional and modern mechanical engineering principles with focus on automation, robotics, and sustainable design.",
    keyAreas: ["Robotics", "CAD/CAM", "Thermal Engineering", "Manufacturing"],
    duration: "4 years",
    level: "Undergraduate",
  },
  {
    id: "ce",
    name: "Civil Engineering",
    shortDescription: "Infrastructure development and sustainable construction practices with emphasis on smart cities and green building.",
    keyAreas: ["Structural Engineering", "Environmental Engineering", "Transportation", "Construction Management"],
    duration: "4 years",
    level: "Undergraduate",
  },
  {
    id: "it",
    name: "Information Technology",
    shortDescription: "Modern IT practices including web technologies, mobile development, and enterprise systems management.",
    keyAreas: ["Web Development", "Mobile Apps", "Database Systems", "Network Administration"],
    duration: "4 years",
    level: "Undergraduate",
  },
  {
    id: "mba",
    name: "Master of Business Administration",
    shortDescription: "Strategic business education combining management theory with practical industry exposure and leadership development.",
    keyAreas: ["Finance", "Marketing", "Operations", "Entrepreneurship"],
    duration: "2 years",
    level: "Postgraduate",
  },
];
