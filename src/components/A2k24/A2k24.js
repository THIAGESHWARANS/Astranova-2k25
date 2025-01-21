import React from "react";
import "./about-us.css";
import { useState } from "react";
import logo from "../../assets/logo.png"; 
import Image1 from "../../assets/1.png";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.png";
import Image4 from "../../assets/A2k24.png";
import MainImage from "../../assets/4.png";
import Image5 from "../../assets/6.png";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { GiTimeSynchronization } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { FaTeamspeak } from "react-icons/fa";
import { SiEventstore, SiRiotgames } from "react-icons/si";
import { TbUnlink } from "react-icons/tb";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const A2k24 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ASTRANOVA | About Us</title>
      </Helmet>
      <nav className="flex items-center justify-between pb-10 md:px-4">
        <Link to={"/"}>
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={logo}
            alt="astranova-logo"
            className="lg:absolute lg:left-4 lg:top-4 w-44 md:w-52 rounded-full"
          />
        </Link>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -120 },
            visible: { opacity: 1, x: 0 },
          }}
          onClick={() => setOpen(!open)}
          className="relative flex items-center gap-2 mb-3 mr-4 lg:absolute lg:right-10 lg:top-20 cursor-pointer"
        >
          <p className="text-xl text-white AstranovaHeroFont tracking-widest">
            {open ? (
              <motion.div
                whileTap={{ scale: 0.6 }}
                className="flex items-center"
              >
                <span className="text-4xl text-purple-500">C</span>
                <span className="mt-1">lose</span>
              </motion.div>
            ) : (
              <motion.div whileTap={{ scale: 0.6 }}>
                <span className="text-4xl text-purple-500">M</span>
                <span>enu</span>
              </motion.div>
            )}
          </p>
          <span className={`mt-2 ${open && "rotate-90"}`}>
            <AiOutlineDoubleRight size={20} color="white" />
          </span>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute top-14 z-100 right-0 opacity-95 w-72 h-auto bg-white rounded-lg AstranovaHeroFont "
            >
              <ul>
                <Link to={"/"} className="flex text-lg px-4 py-4 items-center gap-3 rounded-t-lg transition-all duration-300 ease-in-out hover:bg-purple-300">
                  <HiOutlineHome size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
                    H<span className="text-black text-xl">ome</span>
                  </div>
                </Link>
                <Link to={"/about-us"} className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-purple-300">
                  <TbUnlink size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
                    A<span className="text-black text-xl">bout Us</span>
                  </div>
                </Link>
                <Link to={"/events"} className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-purple-300">
                  <SiEventstore size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
                    E<span className="text-black text-xl">vents</span>
                  </div>
                </Link>
       
                <Link to={"/chronoline"} className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-purple-300">
                  <GiTimeSynchronization size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
                    C<span className="text-black text-xl">hronoline</span>
                  </div>
                </Link>
                <Link to={"/team"} className="flex text-lg px-4 py-4 items-center gap-3 rounded-b-lg transition-all duration-300 ease-in-out hover:bg-purple-300">
                  <FaTeamspeak size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
                    C<span className="text-black text-xl">Our Team</span>
                  </div>
                </Link>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </nav>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -120 },
          visible: { opacity: 1, x: 0 },
        }}
        className="text-white text-6xl text-center mt-10 md:mt-4 AstranovaHeroFont tracking-widest"
      >
        <span className="text-7xl text-purple-500">A</span>bout Astranova 2K24
      </motion.h2>

      {/* Section 1 */}
      <div className="pt-10 lg:pt-20">
        <div className="about-content">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={Image4}
            alt="Astranova 2K24 Highlights"
            className="mb-10 shadow-lg w-full h-auto"
          />
          <div className="text-right">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-4xl text-purple-500 AstranovaHeroFont mb-6 text-center"
            >
              Participants, Events, and Sponsors
            </motion.h3>
            <p className="mb-8 text-2xl text-slate-200 font-poppins leading-relaxed">
              Astranova 2K24 witnessed an overwhelming participation of over 1500 attendees. The event featured an impressive lineup of 25+ events and distributed a total prize pool of ₹50,000. We express our gratitude to our esteemed sponsors: Legends, Innovative, and Abito Mobile Accessories, whose support made this event a grand success.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="pt-10 lg:pt-20">
        <div className="about-content">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={MainImage}
            alt="Astranova 2K24 Main Image"
            className="mb-10 shadow-lg w-full h-auto"
          />
          <div className="text-right">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-4xl text-purple-500 AstranovaHeroFont mb-6 text-center"
            >
              Welcome to Astranova 2K24
            </motion.h3>
            <p className="mb-8 text-2xl text-slate-200 font-poppins leading-relaxed">
              Astranova 2K24 marked a milestone in technical symposiums, celebrating innovation and knowledge at the Coimbatore Institute of Technology. This event saw unparalleled enthusiasm with over 1500 participants competing across a range of technical and non-technical events, setting a benchmark for excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      
      <div className="about-content">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={Image5}
            alt="Astranova 2K24 Main Image"
            className="mb-10 shadow-lg w-full h-auto"
          />
        <div className="about-content">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={Image5}
            className="text-4xl text-purple-500 AstranovaHeroFont mb-6 text-center"
          >
            Overview
          </motion.h3>
          <p className="mb-8 text-2xl text-slate-200 font-poppins leading-relaxed">
            Astranova 2K24, held at the prestigious Coimbatore Institute of Technology (CIT), was a grand two-day event that attracted over 5000 participants from across the region. Featuring 25+ events and a total prize pool of ₹5,00,000, this symposium showcased innovation and creativity like never before.
          </p>
          <motion.img src={Image1} alt="Astranova 2K24 Overview" className="mb-10 shadow-lg w-full h-auto" />
        </div>
      </div>

      {/* Section 4 */}
      <div className="mt-20">
        <div className="about-content">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-purple-500 AstranovaHeroFont mb-6 text-center"
          >
            Events and Highlights
          </motion.h3>
          <p className="mb-8 text-2xl text-slate-200 font-poppins leading-relaxed">
            The symposium featured an impressive lineup of 25+ events, including:
          </p>
          <ul className="mb-8 text-2xl text-slate-200 font-poppins leading-relaxed pl-8 list-disc">
            <li>Reverse Coding</li>
            <li>Paper Presentation</li>
            <li>Astranova Coding Contest</li>
            <li>Treasure Hunt</li>
            <li>Technical Quiz</li>
            <li>Anime Quiz</li>
            <li>Bug Busters</li>
            <li>Relay Coding</li>
            <li>Poster Designing</li>
            <li>Ideathon</li>
            <li>Prompt Engineering</li>
            <li>Codehunt</li>
            <li>Workshop on Data Mining</li>
          </ul>
          <motion.img src={Image2} alt="Astranova Events and Highlights" className="mb-10 shadow-lg w-full h-auto" />
        </div>
      </div>

      {/* Section 5 */}
      <div className="mt-20">
        <div className="about-content">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-purple-500 AstranovaHeroFont mb-6 text-center"
          >
            Sponsors and Acknowledgements
          </motion.h3>
          <p className="mb-8 text-2xl text-slate-200 font-poppins leading-relaxed">
            We extend our heartfelt gratitude to our sponsors: Legends, Innovative, and Abito Mobile Accessories, for their invaluable support in making Astranova 2K24 a resounding success.
          </p>
          <motion.img src={Image3} alt="Astranova Sponsors" className="mb-10 shadow-lg w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default A2k24;
