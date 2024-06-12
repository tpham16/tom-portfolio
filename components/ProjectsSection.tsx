import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Social Media Engagement Analytics",
    description:
      "Developed and implemented an end-to-end ETL pipeline for processing social media engagement data across Instagram, Twitter, and YouTube. The pipeline encompassed extracting raw data, performing data transformation using Python, orchestrating the pipeline on PostgreSQL, and creating a dashboard using Tableau.",
    image: "/SocialMediaEngagementDashboard.png",
    github: "https://github.com/tpham16/TKH-Social-Media-Engagement-Analytics",
    link: "https://public.tableau.com/app/profile/tom.pham5473/viz/TKHSocialMediaEngagement/DASHBOARD",
  },
  {
    name: "FIFA 21 Players Dataset Data Cleaning & Transformation",
    description: "Analyzed the FIFA 2021 player dataset with a focus on data cleaning, transformation, and exploratory data analysis (EDA). This extensive dataset provided in-depth information about football players, encompassing attributes, ratings, positions, and personal details. Through EDA, I delved into player attributes and positions, uncovering valuable insights, including the identification of highly valuable but underpaid players.",
    image: "/fifa21.png",
    github: "https://github.com/tpham16/FIFA-21-Players",
    link: "https://github.com/tpham16/FIFA-21-Players",
  },
  {
    name: "Coffee Bean Sales Analysis",
    description:
      "Analyzed global coffee bean sales data using Excel. Ulitized Excel functions such as XLOOKUP, Index Match, Pivot Charts to clean and format columns. Visualized key insights, including interactive timeline, sales over time, bean roast preferences, package size, top sales by country, and top 5 customers.",
    image: "/Coffee Bean Sales Dashboard.png",
    github: "https://github.com/tpham16/excelproject_coffeesales",
    link: "https://github.com/tpham16/excelproject_coffeesales",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
