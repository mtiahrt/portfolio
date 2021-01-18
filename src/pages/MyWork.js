import styled from "styled-components";
//Images
import amongUs from "../img/among-us.png";
import thePlayer from "../img/musicPlayer.jpg";
import grechenKelly from "../img/GretchenKelly.jpg";

//Animations
import {motion} from 'framer-motion';
import {sliderContainer, pageAnimation, fade, photoAnim, lineAnim, slider} from "../animation";
import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: "#fff"}}>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledMovie>
        <motion.h2 variants={fade}>Gamer Hub</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://game-hub3.herokuapp.com/">
          <Hide>
            <motion.img variants={photoAnim} src={amongUs} alt="amoungUs"/>
          </Hide>
        </a>
      </StyledMovie>
      <StyledMovie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Music Player</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://react-music-player.herokuapp.com/">
          <img src={thePlayer} alt="theracer" />
        </a>
      </StyledMovie>
      <StyledMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
        <h2>Flea Markert</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="http://www.gretchenkellyshop.com/">
          <img src={grechenKelly} alt="grechenKelly"/>
        </a>
      </StyledMovie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px){
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//frame anim
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
  `
const Frame2 = styled(Frame1)`
background: #ff8efb;
`
const Frame3 = styled(Frame1)`
background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
background: #8effa0;
  `
export default MyWork;