import styled from "styled-components";
import {About} from "../styles";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveal} from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
              <Toggle title='Frontend Technologies I use'>
                  <ul className="answer">
                      <li>React</li>
                      <li>Apollo Client</li>
                      <li>Jest</li>
                      <li>Enzyme</li>
                      <li>Flexbox</li>
                      <li>CSS Grid</li>
                      <li>Leaflet.js</li>
                  </ul>
              </Toggle>
              <Toggle title = 'Backend Technologies I use'>
              <ul className="answer">
                      <li>Node.js</li>
                      <li>GraphQL</li>
                      <li>C#</li>
                      <li>.Net Core</li>
                      <li>Linq</li>
                      <li>Java</li>
                      <li>Rest</li>
                  </ul>
              </Toggle>
              <Toggle title= 'Database Technologies I use'>
              <ul className="answer">
                      <li>Postgres</li>
                      <li>Oracle</li>
                      <li>SQL Server</li>
                      <li>SQL</li>
                      <li>PLSQL</li>
                      <li>TSQL</li>
                  </ul>
              </Toggle>
              <Toggle title= 'Devops Technologies I use'>
              <ul className="answer">
                      <li>Docker</li>
                      <li>Jenkins</li>
                      <li>Github deployment pipeline</li>
                  </ul>
              </Toggle>
              <Toggle title='Daily Schedule'>
                    <div className="answer">
                        <p>I'm available daily Monday thru Friday.  8 am to 5 pm.</p>
                        <p>I am a believer in work live balance. Yet understand when an important mile stone needs to be completed by a particular timeline</p>
                    </div>
              </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  li {
    margin-left: 1%;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection