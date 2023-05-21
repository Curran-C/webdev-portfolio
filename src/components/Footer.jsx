import { Tilt } from "react-tilt";

import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { slideIn, textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

import { contacts } from "../constants";

const ImageCard = ({ src, alt, index, a }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
      <a href={a}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img className="h-9" src={src} alt={alt} />
        </Tilt>
      </a>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <div className="h-[80px] rounded-2xl bg-black-100  w-full flex flex-wrap items-center justify-center gap-5">
      <span className="text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        Contact:{" "}
      </span>
      {contacts.map((contact, index) => (
        <ImageCard
          key={index}
          src={contact.src}
          alt={contact.src}
          index={index}
          a={contact.a}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Footer, "");
