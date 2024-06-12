import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "MySQL" },
  { skill: "PostgreSQL" },
  { skill: "Tableau" },
  { skill: "Excel" },
  { skill: "Python" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Tom Pham and I am a{" "}
              <span className="font-bold text-teal-500">{"highly ambitious"}</span>,
              <span className="font-bold text-teal-500">{" self-motivated"}</span>, and
              <span className="font-bold text-teal-500">{" driven"}</span> Data Analyst
              based in Glendale, Arizona. 
            </p>
            <br />
            <p>
              I graduated from the University of California, Irvine in 2020
              with a BS in Biological Sciences. I successfully completed a Data Science & Python Fellowship 
              program at The Knowledge House and a Data Analytics Fellowship program at CO-OP Careers, paving
              the way for my transition into the tech sphere. I'm adept at quickly learning new technologies and 
              extracting insights from data is something that I truly enjoy.  
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From hiking, traveling, playing pickleball, and building DIY weekend projects,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I am inspired by {" "}
              <span className="font-bold text-teal-500">
                tough problems 
              </span>{" "}
              and am passionate about sharing innovative solutions. As a former EMT, I have
              a deep-rooted passion for helping people and making a difference in their lives. 
              This experience has stayed with me and has fueled my desire to leverage technology to solve
              real-world problems and improve lives. I am excited to see where my career takes me and am always open
              to new opportunities. 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
