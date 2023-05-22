import {
  bunmi,
  quoteRight,
  solarPanel,
  schneider,
  asohon,
  sdg,
  installers_solarpanel,
} from "./assets";
import Accordion from "./components/Accordion";

import React, { useState } from "react";
import { faq, projects } from "./constants";

import ProjectCard from "./components/ProjectCard";

function Initiatives() {
  const [project, setProject] = useState(0);

  const changeProject = (index) => {
    setProject(index);
  };

  return (
    <div className="px-16">
      

      <div className="flex mt-20 space-x-5">
        <div className="hidden lg:flex space-x-5">
          <div className="left">
            <div className="space-y-5">
              <div
                style={{ fontWeight: "bolder" }}
                className="bg-[#89347E] text-white py-16 px-5 w-[300px]"
              >
                <img src={solarPanel} alt="" className="h-22 w-22 mb-10" />
                <h1 className="mb-10 text-xl">Increased safety</h1>
                <p className="text-lg">
                  Energy access can improve safety by providing light and
                  reducing the need for dangerous fuels like kerosene.
                </p>
              </div>

              <div
                style={{ fontWeight: "bolder" }}
                className="bg-gray-200 text-black py-16 px-5 w-[300px]"
              >
                <img src={solarPanel} alt="" className="h-22 w-22 mb-10" />
                <h1 className="mb-10 text-xl">Education opportunities</h1>
                <p className="text-lg">
                  Energy access can provide light for studying and improve
                  access to information and communication technologies,
                  increasing educational opportunities for orphans.
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="space-y-5">
              <div
                style={{ fontWeight: "bolder" }}
                className="bg-gray-200 text-black py-16 px-5 w-[300px]"
              >
                <img src={solarPanel} alt="" className="h-22 w-22 mb-10" />
                <h1 className="mb-10 text-xl">Improved Health</h1>
                <p className="text-lg">
                  Energy access can improve access to clean water, refrigeration
                  for food storage, and better hygiene, leading to improved
                  health outcomes for orphans.
                </p>
              </div>

              <div
                style={{ fontWeight: "bolder" }}
                className="bg-[#89437e] text-white py-16 px-5 w-[300px]"
              >
                <img src={solarPanel} alt="" className="h-22 w-22 mb-10" />
                <h1 className="mb-10 text-xl">Economic empowerment</h1>
                <p className="text-lg">
                  Energy access can provide a source of income for orphans
                  through micro-enterprises and other economic activities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About the initiative */}
        <div className="mt-20 px-10">
          <div className="mb-10">
            <h1 style={{ fontWeight: "bolder" }} className="text-4xl mb-16">
              CSR initiative to bring solar power to orphanages
            </h1>
            <p className="text-lg">
              At Gridcrux, we believe that access to clean and sustainable
              energy is a basic human right.
              <br /> With this initiative, we will be installing
              state-of-the-art inverters in orphanages across Nigeria, providing
              a reliable source of electricity for the children and staff.
            </p>
          </div>

          {/* Image, quote and signature */}
          <div className="flex flex-col lg:flex-row">
            <img
              src={bunmi}
              alt=""
              className="aspect-square w-40 h-40
                w-50 object-contain rounded-full"
            />

            <div className="ml-10">
              <img
                src={quoteRight}
                alt=""
                height={100}
                width={100}
                className="mb-10"
              />
              <p className="text-lg mb-10">
                We are dedicated to ensuring that there is energy equity across
                all forms, works and strata of life. Our children must not be
                left out. They must be encouraged to innovate and deliver
                solutions that will also combat unforeseen challenges to come.
              </p>
              {/* Signature */}
              {/* <Image /> */}
            </div>
          </div>
        </div>
      </div>

      {/*Project Gallery*/}
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-evenly bg-[#efefef] mt-24 pt-10 pb-10">
          <img
            className="relative -top-24 mr-10"
            src={projects[project].image}
            width={500}
            alt=""
          />

          {/*Project details */}
          <div className="">
            {/*Header */}
            <div className="mb-8">
              <h1 className="text-4xl mb-2">{projects[project].name}</h1>
              <p className="text-xl">{projects[project].location}</p>
              <p className="text-xl">{projects[project].numberOfChildren}</p>
            </div>

            {/*Body */}
            <div>
              <p className="mb-5">{projects[project].summary}</p>
              <ul className="mb-8">
                <li>Proposed Capacity - 7.5kVA</li>
                <li>Solution - Inverter+Battery+Solar Panels</li>
                <li>Capex - 2.5mNGN (3,400USD)</li>
              </ul>
            </div>

            <button className="bg-red-400 text-white rounded-full w-48 p-3 mb-10">
              <a href="https://www.paypal.com/donate/?hosted_button_id=HB3WWAMRZMNU8">
                Donate
              </a>
            </button>

            {/*Progress bar */}
            <div className="">
              <div className="bg-[#385682] w-1/2 h-4 mb-5 rounded-full">
                <div className="bg-red-400 w-1/4 h-4 top-0 rounded-full"></div>
              </div>
              <p className="text-center text-red-400 text-3xl">76% completed</p>
            </div>
          </div>
        </div>

        {/*project list */}
        <div className="flex justify-center overflow-x-auto">
          {projects.map((prj, index) => (
            <ProjectCard
              image={prj.image}
              name={prj.name}
              status={prj.status}
              index={index}
              onChangeProject={changeProject}
            />
          ))}
        </div>
      </div>

      {/*Partners */}
      <div className="flex flex-col lg:flex-row justify-center mt-10">
        <div className="bg-gray-200 px-10 py-10 space-y-10 mr-10">
          <h1 style={{ fontStyle: "bolder" }} className="text-2xl mt-10">
            Partners
          </h1>
          <img src={schneider} alt="" />
          <img src={asohon} alt="" />
          <img src={sdg} alt="" />
        </div>

        {/*Goals*/}
        <div className="bg-[#89437e] text-white text-xl py-10 px-10">
          <h1 style={{ fontWeight: "bolder" }} className="text-5xl mb-10">
            Our mission
          </h1>
          <p className="mb-10">
            Project Catalyze’s goal is to reduce overall cost of power so the
            savings can be utilized for the children’s education, food and
            healthcare, ultimately leading to:
          </p>
          <ul className="list-disc space-y-5">
            <li>Conducive living environment</li>
            <li>Improved learning opportunities</li>
            <li>Equal learning opportunities</li>
            <li>Reduced Power cost</li>
            <li>Savings on orphanage running cost</li>

            <li>Improved access to indoor entertainment</li>
            <li>Improved psychological well being</li>
            <p className="mt-10">
              A gift from you can make a real difference and impact positively
              on so many people’s lives.
            </p>
          </ul>
          <button className="bg-white mt-16 py-5 px-10 text-[#89347e] rounded-[60px]">
            Donate Today!
          </button>
        </div>
      </div>

      {/*FAQ */}
      <div className="flex flex-col lg:flex-row  mx-auto mt-16 mb-10">
        <div className="mr-10">
          <img src={installers_solarpanel} alt="" width={700} height={600} />
        </div>
        <div className="mt-16">
          <h1 style={{ fontWeight: "bolder" }} className="text-5xl mb-20">
            Questions People Ask
          </h1>
          {faq.map((faq) => (
            <Accordion question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      {/*Contact Us */}
      <div></div>
    </div>
  );
}

export default Initiatives;
