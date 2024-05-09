import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import All from "./Pages/All";
import FullStack from "./Pages/FullStack";
import Home from "./Pages/Home";
import Career from "./Pages/Career";
import CyberSecurity from "./Pages/CyberSecurity";
import DataScience from "./Pages/DataScience";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  const data = [
    {
      title: "Full Stack Development",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      content:
        "Become a Full Stack Developer in Just 90 days with our Full Stack Developer Course with Placement Guarantee, 50+ Interviews. Get enrolled today!",
      date : "08-may-2024"
    },
    {
      title: "Full Stack Development",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      content:
        "Become a Full Stack Developer in Just 90 days with our Full Stack Developer Course with Placement Guarantee, 50+ Interviews. Get enrolled today!",
      date : "08-may-2024"
    },
    {
      title: "Full Stack Development",
      image : "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
      content:
        "Become a Full Stack Developer in Just 90 days with our Full Stack Developer Course with Placement Guarantee, 50+ Interviews. Get enrolled today!",
      date : "08-may-2024"
    },
    {
      title: "Data Science",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudfkZ3M0eVSpNZCpUqQB0dXiN8E-DEz2GHw&s",
      content:
        "Data science combines math and statistics, specialized programming!",
      date : "08-may-2024"
    },
    {
      title: "Data Science",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQXNzoN61ItbkUPzpnL5g_HSDt6EB82YusWSvgS7262fyPW_SjtnWP85MlZocyw1YGSA&usqp=CAU",
      content:
        "advanced analytics, artificial intelligence (AI) and machine learning with specific subject matter expertise to uncover actionable insights hidden in an organizations data.",
      date : "08-may-2024"
    },
    {
      title: "Data Science",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwH3F0iDHtQeBLDIpRLP8wFd6XJ59iWSiRoNdGgneqgMjsJ4KdYjDy0wkjHktc52psw-M&usqp=CAU",
      content:
        "Data Science insights can be used to guide decision making and strategic planning.",
      date : "08-may-2024"
    },
    {
      title: "Cyber Security",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXVSx5ozLxpi67QBZxp1aGwH5M9kZqKBiLQ&s",
      content:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
      date : "08-may-2024"
    },
    {
      title: "Cyber Security",
      image : "https://ars.els-cdn.com/content/image/1-s2.0-S0167404822003431-gr1.jpg",
      content:
        "These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware; or interrupting normal business processes.",
      date : "08-may-2024"
    },
    {
      title: "Cyber Security",
      image : "https://img.freepik.com/free-vector/server-room-rack-remote-system-administration-outsourcing-service_39422-368.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708128000&semt=ais",
      content:
        "Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people",
      date : "08-may-2024"
    },
    {
      title: "Career",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ylQKgpFtb5Ce8yipO_fZIav38iWMa0bmMw&s",
      content:
        "Career guidance can be defined as a comprehensive, developmental program designed to assist individuals in making and implementing informed educational and occupational choices.",
      date : "08-may-2024"
    },
  ];
  return (

    <div>

      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<FullStack data={data} />} />
        <Route path="/all" element={<All data={data}/>} />
        <Route path="/career" element={<Career data={data} />} />
        <Route path="/cybersecurity" element={<CyberSecurity data={data} />} />
        <Route path="/datascience" element={<DataScience data={data} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
