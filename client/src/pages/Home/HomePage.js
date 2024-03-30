import React, { useState, useEffect } from "react";
import TaskList from "../../components/TaskList";
import axios from "axios";

import Header from "../../components/Header for engine/Header";
import Footer from "../../components/Footer";
import { HashLink as Link } from "react-router-hash-link";
function Home() {
  const [tasks, setTasks] = useState([]);
  // axios.post('/api/items/YourModel', data);
  // axios.get('/api/items/YourModel');
  // axios.get('/api/items/YourModel/:id');
  // axios.put('/api/items/YourModel/:id', data);
  // axios.delete('/api/items/YourModel/:id');
  // .get("http://localhost:5000/api/items/Task?sort=dueDate&order=asc&limit=10&filter={\"completed\":false}")

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/items/Task?sort=dueDate&order=desc&limit=10"
      )

      .then((response) => {
        const fetchedTasks = response.data;
        console.log("fetchedTasks :", fetchedTasks);
        const demoTasks = [
          {
            id: 1,
            name: "Organize conference agenda",
            user: "Eric Wallace",
            priority: "High",
            status: "Finished",
            dueDate: "2023-04-30",
          },
          {
            id: 2,
            name: "Prepare conference content",
            user: "Lucas Fadel",
            priority: "Medium",
            status: "Finished",
            dueDate: "2023-05-05",
          },
          {
            id: 3,
            name: "Reserve rooms and catering",
            user: "Lucas Fadel",
            priority: "High",
            status: "In progress",
            dueDate: "2023-05-10",
          },
          {
            id: 4,
            name: "Send Save the Date email",
            user: "Robert Cantu",
            priority: "High",
            status: "Finished",
            dueDate: "2023-04-20",
          },
          {
            id: 5,
            name: "Print conference materials",
            user: "Robert Cantu",
            priority: "Low",
            status: "In progress",
            dueDate: "2023-04-25",
          },
          {
            id: 6,
            name: "Send official invitation",
            user: "Eric Wallace",
            priority: "High",
            status: "To do",
            dueDate: "2023-05-01",
          },
          {
            id: 7,
            name: "Prepare report for team meeting",
            user: "Leila Kuphal",
            priority: "Medium",
            status: "Finished",
            dueDate: "2023-04-15",
          },
          {
            id: 8,
            name: "Organize team event",
            user: "Eric Wallace",
            priority: "Low",
            status: "In progress",
            dueDate: "2023-05-20",
          },
        ];
        setTasks([...fetchedTasks, ...demoTasks]);
        // setTasks(demoTasks);
      })
      .catch((error) => console.log(error));
  }, []);
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/#about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Resume/CV", path: "/cv" },
    { label: "Blog/Articles", path: "/blog" },
    { label: "Contact", path: "/contact" },
    { label: "Services", path: "/Services" },
    { label: "Testimonials", path: "/Testimonials" },
    { label: "FAQ", path: "/FAQ" },
    { label: "Privacy Policy", path: "/PrivacyPolicy" },
    { label: "Sign In", path: "/signin" },
  ];

  return (
    <div className="">
      <Header
        logoSrc=""
        appName="Jon Doe"
        navLinks={navLinks}
        avatarSrc="/avatar.jpg"
        actionText="Get Started"
        showSearchInput={false}
        showAvatar={false}
        showActionButton={false}
        showAccountDropdown={true}
      />
      <main className="container mx-auto   mt-8">
        <section
          className="text-center bg-cover bg-center h-screen flex items-center justify-center"
          style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
          <div className="bg-black bg-opacity-50 text-white p-10">
            <h1 className="text-4xl font-bold">
              MERN Stack Developer with 2 years of experience
            </h1>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          {/* Add thumbnails or cards for featured projects here */}
        </section>
        <section className="mt-8 text-center">
          <a
            href="#portfolio"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-screen">
            Explore Portfolio
          </a>
        </section>
        <section className="mt-8 h-screen">
          <h2 className="text-2xl font-bold">Skills and Expertise</h2>
          {/* Add icons or list of skills here */}
        </section>
        <section className="mt-8" id="about">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-4">
            Brief summary about yourself and your background.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Testimonials</h2>
          {/* Add testimonials carousel or grid here */}
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Recent Blog Posts</h2>
          {/* Add thumbnails or excerpts of recent blog posts here */}
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          {/* Add contact information here */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
