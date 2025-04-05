import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HEROABOUT_TEXT = `
I'm a passionate Flutter developer specializing in crafting beautiful, high-performance cross-platform mobile applications. With expertise in Dart and the Flutter framework, I build apps that deliver native-like experiences on both iOS and Android platforms.

My development approach combines:
- Clean, maintainable code architecture
- Responsive UI/UX design principles
- State management solutions (Provider, Bloc, Riverpod)
- Firebase integration for backend services
- Custom animations and fluid transitions

I take pride in staying at the forefront of Flutter's ecosystem, constantly exploring new packages and best practices. My apps are not just functional - they're polished experiences with attention to detail in every pixel and interaction.

Beyond coding, I'm an active contributor to Flutter communities and enjoy:
- Experimenting with new UI design patterns
- Optimizing app performance metrics
- Mentoring junior developers
- Participating in hackathons and code challenges

When I'm not building apps, you'll find me:
♟️ Competing in local chess tournaments (great for strategic thinking!)
🎹 Playing piano (which helps my sense of timing and rhythm in animations)
🎨 Exploring Japanese design aesthetics that often inspire my UI work

I believe great apps come from the perfect blend of technical excellence and creative vision - which is exactly what I bring to every project.
`;


export const EXPERIENCES = [
  {
    year: "03/2024 - Present",
    role: "IT Support Technician",
    company: "Arsenal",
    description: `In Arsenal's interactive environment, I provided technical support for gaming kiosks, ensuring smooth operation and resolving issues in real time on embedded systems. This role strengthened my ability to analyze and debug hardware and software problems under pressure while maintaining a focus on delivering effective and timely solutions.`,
    technologies: ["Embedded Systems", "Debugging", "Technical Support", "Hardware Diagnostics"],
  },
  {
    year: "01/2024 - 02/2024",
    role: "IT Support Technician",
    company: "Décathlon Digital",
    description: `At Décathlon Digital, I collaborated closely with development teams to diagnose and resolve complex technical incidents. I developed strong problem-solving skills and improved my ability to work in fast-paced environments, leveraging diagnostic tools to identify root causes and deliver lasting fixes.`,
    technologies: ["Troubleshooting", "Incident Management", "Collaboration Tools", "System Analysis"],
  },
  {
    year: "04/2023 - 12/2023",
    role: "IT Support & Supervisor",
    company: "Webhelp",
    description: `As a support technician for IKEA and later a supervisor for Younited Credit, I honed my leadership skills by managing teams and ensuring smooth workflows. I provided technical assistance, oversaw performance, and facilitated quick adaptations to new technologies and systems. This experience enhanced my ability to lead teams effectively while addressing both technical and operational challenges.`,
    technologies: ["Team Management", "Problem-Solving", "Multi-System Support", "Leadership"],
  },
];



export const PROJECTS = [
  {
    title: "Pearl et Pluthon",
    image: project1,
    description:
      "A work-in-progress 2D game inspired by my own two cats. Guide Pearl and Pluthon on a quest to retrieve their favorite toy—a red ball—taken by Rufus, the residence's guard dog. Explore diverse locations, overcome obstacles, and outsmart Rufus to reunite the cats with their cherished toy.",
    technologies: ["Unity", "C#"],
  },
  {
    title: "2D Chess Game",
    image: project2,
    description:
      "A classic 2D chess video game built with Unity, designed to showcase polished gameplay mechanics, intuitive controls, and a clean, modern UI.",
    technologies: ["Unity", "C#"],
  },
  {
    title: "React Portfolio",
    image: project3,
    description:
      "This current website—a responsive and modern portfolio built with React, designed to showcase projects, skills, and animations with smooth transitions and clean styling.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Expense Tracker",
    image: project4,
    description:
      "A complete expense tracker application built with ASP.NET Core MVC, designed for tracking and managing personal finances efficiently. Features include budget management, expense categorization, and detailed reporting.",
    technologies: ["ASP.NET Core", "C#", "MVC"],
  },
];


export const CONTACT = {
  address: "59000 Lille, France ",
  phoneNo: "+33 (0)6 29 26 79 25",
  email: "marouanebelkhdir@hotmail.fr",
};
