import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full orange-black-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-orange-black-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[18px] font-bold text-center '>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-lato'
      >
        Hi there! My name is Bart, and I'm a junior front-end developer with a passion for photography, and UX/UI design.
        <br></br>
        <br></br>

From a young age, I've always been fascinated by the way that images can tell stories and evoke emotions. This passion for visual storytelling led me to pursue photography as a hobby, and I've found that it's a great way to express my creativity and explore the world around me.
<br></br>
<br></br>
As a front-end developer, I'm excited to combine my love of photography and design with my technical skills to create beautiful and functional websites and applications. I believe that a well-designed interface can make all the difference in how people interact with technology, and I'm passionate about creating user experiences that are both intuitive and enjoyable.
<br></br><br></br>
In my free time, you can usually find me out and about with my camera, exploring new places and capturing moments of beauty and wonder. Whether I'm photographing landscapes, people, or objects, I'm always striving to create images that tell a story and capture the essence of the moment.
<br></br><br></br>
I'm excited to continue to learn and grow as a front-end developer and UX/UI designer, and I'm looking forward to the many opportunities and challenges that lie ahead.
<br></br>
<br></br>

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
