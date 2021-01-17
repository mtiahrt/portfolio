import computing from "../img/computing-720x405.jpg"
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave';
import {Link} from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>I work hard</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              so you <span>don't</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> have to.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any Frontend/Full Stack development needs that you have. I
          am a professional with great verbal and written communication.  I am passionate
          for new technologies.  React and GraphQL are to name a couple. 
          I enjoy learning new coding pattens and technologies.  I 
          believe learning doesn't happen through watching but by doing and teaching others.  
          I am based in Fort Collins, CO.  
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={computing} alt="people working together" />
      </Image>
      <Wave/>
    </About>
  );
};

//Styled Components

export default AboutSection;