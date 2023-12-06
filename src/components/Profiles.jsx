import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  SiTwitter,
  SiLeetcode,
  SiLinkedin,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
} from "react-icons/Si";
import { FaGithub } from "react-icons/fa";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const Profiles = () => {
  return (
    <>
      <div className="">
        <h2 className={styles.sectionHeadText}> My Profiles</h2>
        <div className="flex xl:flex-row flex-col gap-8 justify-center items-center mt-12 flex-wrap mx-auto w-full">
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                variants={fadeIn("right", "spring", 0.5, 0.55)}
                href="https://twitter.com/AjayManjhi_"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl blue-gradient p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className="text-blue-400">
                  <SiTwitter />
                </span>
                Twitter
              </a>
            </Tilt>
          </motion.div>
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                href="https://github.com/AjayManjhi09?tab=repositories"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl blue-gradient p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className=" bg-black rounded-full">
                  <FaGithub />
                </span>
                GitHub
              </a>
            </Tilt>
          </motion.div>
          
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                href="https://www.linkedin.com/in/ajay-manjhi-5146a0226/"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl blue-gradient p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className="text-blue-700 bg-white rounded-full">
                  <SiLinkedin />
                </span>
                Linkedin
              </a>
            </Tilt>
          </motion.div>
          
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Profiles, "profiles")