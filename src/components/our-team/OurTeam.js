import Navbar from "../../common/Navbar";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import GradientAvatar from "../../assets/team-images/personAvatar1.png";

// Board Members
import BharaninathImg from "../../assets/team-images/board-members/Bharaninath.jpg";
import CharulathaImg from "../../assets/team-images/board-members/Charulatha.png";
import AdityaImg from "../../assets/team-images/board-members/Adhithya.jpg";
import MeghaImg from "../../assets/team-images/board-members/Megha.jpg";
import AkileshImg from "../../assets/team-images/board-members/Akilesh.jpg";
 import HareeshImg from "../../assets/team-images/board-members/Hareesh.jpg";
 import KamalihaImg from "../../assets/team-images/board-members/Kamaliha.jpg";
 import RahulImg from "../../assets/team-images/board-members/Rahul.jpg";
 import PradeepaImg from "../../assets/team-images/board-members/Pradeepa.jpg";
 import RanjitImg from "../../assets/team-images/board-members/Ranjit.jpg";
 import DhanyaImg from "../../assets/team-images/board-members/Dhanya.jpg";
 

// Fund Riser
import ArunImg from "../../assets/team-images/arun.jpg";

// Dev Team
import deepakImg from "../../assets/team-images/dev-team/deepak.jpg";
import gunaImg from "../../assets/team-images/dev-team/guna.jpg";
import barath from  "../../assets/team-images/dev-team/barath.jpg"
import { Helmet } from "react-helmet";

// Design Team
import AakashImg from "../../assets/team-images/design-team/Aakash.jpg"
import DhanuImg from "../../assets/team-images/design-team/DhanuShree.jpg";
import AshokImg from "../../assets/team-images/design-team/Ashok.jpg";
import RenugaImg from "../../assets/team-images/design-team/Renuga.jpg";
import SanthoshNImg from "../../assets/team-images/design-team/Santhosh Narayanan.jpg";
import RidhuImg from "../../assets/team-images/design-team/Ridhumiga.jpg"; 
import NandhiniImg from "../../assets/team-images/design-team/Nandhini.jpg";
import SriramImg from "../../assets/team-images/Social_Media/Sriram.jpg";
import KarthigaImg from "../../assets/team-images/Social_Media/Karthika.jpg";
import SusaImg from "../../assets/team-images/Social_Media/Sudharshan.jpg";

import San from "../../assets/team-images/Tech_Team/San.jpg";
import Sharmila from "../../assets/team-images/Tech_Team/Sharmila.jpg";
import Thiagesh from "../../assets/team-images/Tech_Team/Thiageshwaran.jpg";
import Nilesh from "../../assets/team-images/Tech_Team/Nilesh.jpg";
import Rajithra from "../../assets/team-images/Tech_Team/Rajithra.jpg";
import Chitra from "../../assets/team-images/Tech_Team/Chitra.jpg";
import Gomathi from "../../assets/team-images/Tech_Team/Gomathy.jpg";
import Supritha from "../../assets/team-images/Tech_Team/Supritha Narayani.jpg";
import Vasan from "../../assets/team-images/Tech_Team/Vasan.jpg";
import GokulN from "../../assets/team-images/Tech_Team/Gokulnath.jpg";
import kawin  from "../../assets/team-images/Tech_Team/Kawin.jpg";
import Sayas from "../../assets/team-images/Tech_Team/Vishnu Sayas.jpg";
import Dharaneesh from "../../assets/team-images/Tech_Team/Dharanesh.jpg";
import Vishnu from "../../assets/team-images/Tech_Team/Vishnu Aravind.jpg";

import Harsha from "../../assets/team-images/Non-Tech_Team/Harshavarthan.jpg";
import Shanmika from "../../assets/team-images/Non-Tech_Team/Shanmika.jpg";

import Adhithya1 from "../../assets/team-images/Non-Tech_Team/Adhiti.jpg";
import Elan from "../../assets/team-images/Non-Tech_Team/Elan.jpg";
import Gokulan from "../../assets/team-images/Non-Tech_Team/Gokulan.jpg";
import Haritha from "../../assets/team-images/Non-Tech_Team/Haritha.jpg";
import Humaira from "../../assets/team-images/Non-Tech_Team/Humaira.jpg";
import Jaiyu from "../../assets/team-images/Non-Tech_Team/JayaChandran.jpg";
import kaviyarisi from "../../assets/team-images/Non-Tech_Team/Kaviyarasi.jpg";
import Kavin from "../../assets/team-images/Non-Tech_Team/Kavin.jpg";
import Maggi from "../../assets/team-images/Non-Tech_Team/Maggi.jpg";
import Monika from "../../assets/team-images/Non-Tech_Team/Monika.jpg";
import Nandhana from "../../assets/team-images/Non-Tech_Team/Nandhana.jpg";
import Naveendar from "../../assets/team-images/Non-Tech_Team/Navindar.jpg";
import Nithin from "../../assets/team-images/Non-Tech_Team/Nithin.jpg";
import Partha from "../../assets/team-images/Non-Tech_Team/Parthasarathi.jpg";
import Rohit from "../../assets/team-images/Non-Tech_Team/ro.jpg";
import Sandy from "../../assets/team-images/Non-Tech_Team/Santhosh.jpg";
import Sarathi from "../../assets/team-images/Non-Tech_Team/Sarathi.jpg";
import Selva from "../../assets/team-images/Non-Tech_Team/Selvamannan.jpg";
import Sharan from "../../assets/team-images/Non-Tech_Team/Sharan Darshan.jpg";
import Sugi from "../../assets/team-images/Non-Tech_Team/Sugithan.jpg";
import Suriya from "../../assets/team-images/Non-Tech_Team/Surya.jpg";
import SuriyaP from "../../assets/team-images/Non-Tech_Team/Surya Prabagar.jpg";
import Tarun from "../../assets/team-images/Non-Tech_Team/Tarun.png";
import Vendhan from "../../assets/team-images/Non-Tech_Team/Vendhan.jpg";
import Natheesh from "../../assets/team-images/Non-Tech_Team/Natheesh.jpg";



// import narendaran from "../../assets/team-images/design-team/narendaran.jpg";

const boardMembers = [
  {
    name: "Bharaninath M",
    role: "President",
    imageUrl: BharaninathImg,
  },
  {
    name: "Charulatha B",
    role: "Vice-President",
    imageUrl: CharulathaImg,
  },
  
  {
    name: "Aditya S",
    role: "Treasurer",
    imageUrl: AdityaImg,
  },
  {
    name: "Megha S",
    role: "Treasurer",
    imageUrl: MeghaImg,
  },
  {
    name: "Akilesh S",
    role: "Treasurer",
    imageUrl: AkileshImg,
  },
  

];

const leadTeam = [
  {
    name: "Hareesh R V",
    role: "Technical Lead",
    imageUrl: HareeshImg,
  },
  {
    name: "Kamaliha M.B",
    role: "Technical Lead",
    imageUrl: KamalihaImg,
  },
  {
    name: "Rahul Balaji S M",
    role: "Non-Technical Lead",
    imageUrl: RahulImg,
  },
  {
    name: "Pradeepa V",
    role: "Non-Technical Lead",
    imageUrl: PradeepaImg,
  },
  {
    name: "Ranjit T.N",
    role: "Design Lead",
    imageUrl: RanjitImg,
  },
  {
    name: "Dhanya Rithika S",
    role: "Design Lead",
    imageUrl: DhanyaImg,
  },

]
const designTeam = [
  {
    name: "Ridhumiga C.B",
    role: "Member",
    imageUrl: RidhuImg,
  },
  {
    name: "Nandhini B",
    role: "Member",
    imageUrl: NandhiniImg,
  },
  {
     name: "Akaash C",
     role: "Member",
     imageUrl: AakashImg,
   },
  
   {
     name: "Ashok M.J",
     role: "Member",
     imageUrl: AshokImg,
   },
   {
    name: "Renuga S",
    role: "Member",
    imageUrl: RenugaImg,
  },
  {
    name: "Santhosh Narayanan R",
    role: "Member",
    imageUrl: SanthoshNImg,
  },
  {
    name: "Dhanusree S ",
    role: "Member",
    imageUrl: DhanuImg,
  }

];

const SMTeam = [
  {
     name: "Sriram L",
     role: "Manager",
     imageUrl: SriramImg,
   },
   {
     name: "Karthika C",
     role: "Manager",
     imageUrl: KarthigaImg,
   },
   {
     name: "Sudharsan V",
     role: "Manager",
     imageUrl: SusaImg,
   }
  ];
  const WebTeam = [
    {
       name: "Hareesh RV",
       role: "Member",
       imageUrl: HareeshImg,
     },
     {
       name: "Sanjith Sivendra K",
       role: "Member",
       imageUrl: San,
     },
     {
       name: "Ranjit TN",
       role: "Member",
       imageUrl: RanjitImg,
     },
     
     {
      name: "Thiageshwaran S",
      role: "Member",
      imageUrl: Thiagesh,
    }
    ];
   const TechTeam = [
    {
       name: "Sanjith Sivendra K",
       role: "Member",
       imageUrl: San,
     },
     {
       name: "Sharmila C",
       role: "Member",
       imageUrl: Sharmila,
     },
     {
       name: "Thiageshwaran S",
       role: "Member",
       imageUrl: Thiagesh,
     },
     {
      name:"Ranjit T N",
      role:"Member",
      imageUrl:RanjitImg,
     },
     {
      name: "Nilesh S",
      role: "Member",
      imageUrl: Nilesh,
    },
    {
      name: "Rajithra R.J",
      role: "Member",
      imageUrl: Rajithra,
    },
    {
      name: "Chitra Devi R",
      role: "Member",
      imageUrl: Chitra,
    },
    {
      name: "Gomathi V",
      role: "Member",
      imageUrl: Gomathi,
    },
    {
      name: "Supritha Narayini I",
      role: "Member",
      imageUrl: Supritha,
    },
    {
      name: "Vasan S",
      role: "Member",
      imageUrl:Vasan,
    },
    {
      name: "GokulNath S",
      role: "Member",
      imageUrl:GokulN,
    },
    {
      name: "Kawin K S",
      role: "Member",
      imageUrl:kawin,
    },
    {
      name: "Vishnu Sayas R",
      role: "Member",
      imageUrl:Sayas,
    },
    {
      name: "Dharaneesh K",
      role: "Member",
      imageUrl:Dharaneesh,
    },
    
  ];
  const SponsorTeam = [
    {
       name: "Harshavardhan A",
       role: "Co-Ordinator",
       imageUrl: Harsha,
     },
     {
       name: "Shanmika P.S",
       role: "Co-ordinator",
       imageUrl: Shanmika,
     },
     {
      name: "Selvamannan S ",
      role: "Member",
      imageUrl:Selva,
    },
    {
      name: "Jayachandran P ",
      role: "Member",
      imageUrl:Jaiyu,
    }
    ];
  const juniors=[
    {
      name:"Vishnu Aravind A.R.V",
      role:"Co-Ordinator",
      imageUrl: Vishnu,
    },
    {
      name:"Rajithra R.J",
      role:"Co-Ordinator",
      imageUrl: Rajithra,
    }
  ];

    const Promotion_Team = [
      {
         name: "Akaash C",
         role: "Co-Ordinator",
         imageUrl: AakashImg,
       },
       {
         name: "Ridhumiga C.B",
         role: "Co-Ordinator",
         imageUrl: RidhuImg,
       }
      ];

      const Non_TechTeam = [
        {
           name: "Adhithya K.N.V",
           role: "Member",
           imageUrl: Adhithya1,
         },
         {
           name: "Elan Kumaran K",
           role: "Member",
           imageUrl: Elan,
         },
         {
           name: "Gokulan N",
           role: "Member",
           imageUrl: Gokulan,
         },
         {
          name: "Haritha N",
          role: "Member",
          imageUrl: Haritha,
        },
        {
          name: "Nandhana M",
          role: "Member",
          imageUrl: Nandhana,
        },
        {
          name: "Humaira S",
          role: "Member",
          imageUrl: Humaira,
        },
        {
          name: "Kavin R",
          role: "Member",
          imageUrl: Kavin,
        },
        {
          name: "Parthasarathy B",
          role: "Member",
          imageUrl: Partha,
        },
        {
          name: "Rohit K.L",
          role: "Member",
          imageUrl: Rohit,
        },
        {
          name: "Surya Prabagar S",
          role: "Member",
          imageUrl:SuriyaP,
        },
        {
          name: "Tarunkrishna S.A",
          role: "Member",
          imageUrl:Tarun,
        },
        {
          name: "Monika V",
          role: "Member",
          imageUrl:Monika,
        },
        {
          name: "Kaviyarasi K",
          role: "Member",
          imageUrl:kaviyarisi,
        },
        {
          name: "Sarathi M ",
          role: "Member",
          imageUrl:Sarathi,
        },
     
        {
          name: "Santosh R ",
          role: "Member",
          imageUrl:Sandy,
        },
       
        {
          name: "Nithin Subhaanesh R ",
          role: "Member",
          imageUrl:Nithin,
        },
        {
          name: "Naveendar C ",
          role: "Member",
          imageUrl:Naveendar,
        },
        {
          name: "Vendhan R ",
          role: "Member",
          imageUrl:Vendhan,
        },
        {
          name: "Natheesh E ",
          role: "Member",
          imageUrl:Natheesh,
        },
        {
          name: "Meganathan S ",
          role: "Member",
          imageUrl:Maggi,
        },
        {
          name: "Sharan Darshan C",
          role: "Member",
          imageUrl:Sharan,
        },{
          name: "Surya K.M ",
          role: "Member",
          imageUrl:Suriya,
        },
        ,{
          name: "Sugithan P ",
          role: "Member",
          imageUrl:Sugi,
        },
        
        
      ];

const webDevelopers = [
  {
    name: "Deepak V",
    role: "Full Stack Developer - Team Head",
    imageUrl: deepakImg,
    githubUrl: "https://github.com/Iam-DeepakVel",
    linkedinUrl: "https://www.linkedin.com/in/iamdeepakvel",
  },
  {
    name: "Guna P",
    role: "Frontend Developer / UI Designer",
    imageUrl: gunaImg,
    githubUrl: "https://github.com/guna-pandi",
    linkedinUrl: "https://www.linkedin.com/in/guna-p-aa3357245",
  },
  {
    name: "Khabilan S",
    role: "Web & App Developer",
    imageUrl: GradientAvatar,
    githubUrl: "https://github.com/Khabilan1003",
    linkedinUrl:
      "https://www.linkedin.com/in/khabilan-somasundaram-0335971b0/ ",
  },
  {
    name: "Bharath S",
    role: "Backend Developer",
    imageUrl: barath,
    githubUrl: "https://github.com/BarathOfficial",
    linkedinUrl: "https://www.linkedin.com/in/barath-sreedharan-50a5a020a",
  },
];

 
export default function OurTeam() {
  return (
    <div className="bg-black py-6 sm:py-10 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ASTRANOVA | Team IT</title>
      </Helmet>
      {/* Navbar */}
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-3xl font-bold tracking-widest AstranovaHeroFont  text-white sm:text-4xl"
          >
            <span className="text-5xl text-teal-600">M</span>eet{" "}
            <span className="text-5xl text-teal-600">O</span>ur{" "}
            <span className="text-5xl text-teal-600">T</span>eam
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-4 text-lg tracking-widest  text-gray-400 AstranovaHeroFont"
          >
            We're a powerhouse of enthusiastic individuals who are absolutely
            lit about what we do!
          </motion.p>
        </div>

        {/*Board Members*/}
        <div className="mt-14">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white AstranovaHeroFont tracking-widest"
          >
            <span className="text-5xl text-teal-600">B</span>oard{" "}
            <span className="text-5xl text-teal-600">M</span>embers
          </motion.h2>
          <ul className="mx-auto px-4 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {boardMembers.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500  shadow-teal-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl font-semibold leading-7 AstranovaHeroFont tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 font-semibold tracking-wider font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* Team Section */}
<div className="mt-32">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 0, x: 120 },
      visible: { opacity: 1, x: 0 },
    }}
    className="text-4xl text-white AstranovaHeroFont tracking-widest text-center"
  >
    <span className="text-5xl text-teal-600">C</span>o{" "}
    <span className="text-5xl text-teal-600">O</span>rdinators
  </motion.h2>
  <ul className="mx-auto mt-10 px-4 grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-8">
    {leadTeam.map((person) => (
      <motion.li
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: 120 },
          visible: { opacity: 1, x: 0 },
        }}
        key={person.name}
        className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
      >
        <img
          className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
          src={person.imageUrl}
          alt={person.name}
        />
        <h3 className="mt-6 text-xl AstranovaHeroFont font-semibold leading-7 tracking-widest text-white text-center">
          {person.name}
        </h3>
        <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400 text-center">
          {person.role}
        </p>
      </motion.li>
    ))}
  </ul>
</div>

        


       {/* Fund-Raising */}
<div className="mt-32">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 0, x: 120 },
      visible: { opacity: 1, x: 0 },
    }}
    className="text-4xl text-white AstranovaHeroFont tracking-widest text-center"
  >
    <span className="text-5xl text-teal-600">F</span>und{" "}
    <span className="text-5xl text-teal-600">R</span>aisers
  </motion.h2>
  <ul className="mx-auto mt-10 px-4 grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-8">
    {SponsorTeam.map((person) => (
      <motion.li
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: 120 },
          visible: { opacity: 1, x: 0 },
        }}
        key={person.name}
        className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
      >
        <img
          className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
          src={person.imageUrl}
          alt={person.name}
        />
        <h3 className="mt-6 text-xl AstranovaHeroFont font-semibold leading-7 tracking-widest text-white text-center">
          {person.name}
        </h3>
        <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400 text-center">
          {person.role}
        </p>
      </motion.li>
    ))}
  </ul>
</div>

{/* Promotion Team */}
<div className="mt-32">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 0, x: 120 },
      visible: { opacity: 1, x: 0 },
    }}
    className="text-4xl text-white AstranovaHeroFont tracking-widest text-center"
  >
    <span className="text-5xl text-teal-600">P</span>romotion{" "}
    <span className="text-5xl text-teal-600">T</span>eam
  </motion.h2>
  <ul className="mx-auto mt-10 px-4 grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-8">
    {Promotion_Team.map((person) => (
      <motion.li
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: 120 },
          visible: { opacity: 1, x: 0 },
        }}
        key={person.name}
        className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
      >
        <img
          className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
          src={person.imageUrl}
          alt={person.name}
        />
        <h3 className="mt-6 text-xl AstranovaHeroFont font-semibold leading-7 tracking-widest text-white text-center">
          {person.name}
        </h3>
        <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400 text-center">
          {person.role}
        </p>
      </motion.li>
    ))}
  </ul>
</div>
{/* Juniors */}
<div className="mt-32">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 0, x: 120 },
      visible: { opacity: 1, x: 0 },
    }}
    className="text-4xl text-white AstranovaHeroFont tracking-widest text-center"
  >
    <span className="text-5xl text-teal-600">J</span>uniors{" "}
    <span className="text-5xl text-teal-600">C</span>o-Ordinator
  </motion.h2>
  <ul className="mx-auto mt-10 px-4 grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-8">
    {juniors.map((person) => (
      <motion.li
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: 120 },
          visible: { opacity: 1, x: 0 },
        }}
        key={person.name}
        className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
      >
        <img
          className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
          src={person.imageUrl}
          alt={person.name}
        />
        <h3 className="mt-6 text-xl AstranovaHeroFont font-semibold leading-7 tracking-widest text-white text-center">
          {person.name}
        </h3>
        <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400 text-center">
          {person.role}
        </p>
      </motion.li>
    ))}
  </ul>
</div>
{/* Social Media Team */}
<div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white AstranovaHeroFont tracking-widest"
          >
            <span className="text-5xl text-teal-600">S</span>ocial Media{" "}
            <span className="text-5xl text-teal-600">C</span>oordinators
          </motion.h2>
          <ul className="mx-auto mt-10 px-4 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {SMTeam.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl AstranovaHeroFont font-semibold leading-7 tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div> 


        {/* Design Team */}
        <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white AstranovaHeroFont tracking-widest"
          >
            <span className="text-5xl text-teal-600">D</span>esign{" "}
            <span className="text-5xl text-teal-600">T</span>eam
          </motion.h2>
          <ul className="mx-auto mt-10 px-4 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {designTeam.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl AstranovaHeroFont font-semibold leading-7 tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div> 

{/* Technical Team */}
<div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white AstranovaHeroFont tracking-widest"
          >
            <span className="text-5xl text-teal-600">T</span>echnical{" "}
            <span className="text-5xl text-teal-600">T</span>eam
          </motion.h2>
          <ul className="mx-auto mt-10 px-4 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {TechTeam.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl AstranovaHeroFont font-semibold leading-7 tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div> 

 
        {/* Non-Tech Team */}
        
        <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white AstranovaHeroFont tracking-widest"
          >
            
            <span className="text-5xl text-teal-600">N</span>on-Technical{" "}
            <span className="text-5xl text-teal-600">T</span>eam
          </motion.h2>
          <ul className="mx-auto mt-10 px-4 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {Non_TechTeam.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl AstranovaHeroFont font-semibold leading-7 tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div> 
 {/* Web Developers */}
 <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white AstranovaHeroFont tracking-widest"
          >
            <span className="text-5xl text-teal-600">W</span>eb{" "}
            <span className="text-5xl text-teal-600">D</span>evelopers
            <span className="text-5xl text-teal-600">-C</span>yber{" "}
            <span className="text-5xl text-teal-600">B</span>ullies{" "}
          </motion.h2>
          <ul className="mx-auto mt-10 px-4 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {WebTeam.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl AstranovaHeroFont font-semibold leading-7 tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div> 
 
        {/* Special Thanks to  */}
        <div className="mt-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white AstranovaHeroFont tracking-widest"
          >
            <span className="text-5xl text-teal-600">S</span>pecial{" "}
            <span className="text-5xl text-teal-600">T</span>hanks to
          </motion.h2>
          <ul className="mx-auto px-4 mt-10 grid max-w-full sm:max-w-md gap-8">
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              key="Arunkumar"
              className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500  shadow-teal-400 bg-[#111111] py-10 px-8"
            >
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={ArunImg}
                alt="Arunkumar"
              />
              <h3 className="mt-6 text-xl font-semibold leading-7 AstranovaHeroFont tracking-widest text-white">
                Arunkumar S
              </h3>
              <p className="text-md leading-6 font-semibold tracking-wider font-poppins text-gray-400">
                Web & App Developer
              </p>
              <ul className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href="https://github.com/arunn03"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <AiFillGithub size={22} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/arunn03"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <AiFillLinkedin size={22} />
                  </a>
                </li>
              </ul>
            </motion.li>
          </ul>
        </div>

      
        
        <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white AstranovaHeroFont tracking-widest"
          >
           
          </motion.h2>
          <ul className="mx-auto px-4 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {webDevelopers.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl font-semibold leading-7 AstranovaHeroFont tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 font-semibold tracking-wider font-poppins text-gray-400">
                  {person.role}
                </p>
                <ul className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <AiFillLinkedin size={22} />
                    </a>
                  </li>
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
    
  );
}
