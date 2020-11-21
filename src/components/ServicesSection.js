import React from 'react'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {About, Description, Image} from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={clock}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Voluptate ullamco amet magna sunt proident duis nulla.</p>
                    </Card>
                    <Card>
                        <div alt="icon" className="icon">
                            <img src={teamwork}/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Voluptate ullamco amet magna sunt proident duis nulla.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={diaphragm}/>
                            <h3>diaphragm</h3>
                        </div>
                        <p>Voluptate ullamco amet magna sunt proident duis nulla.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={money}/>
                            <h3>money</h3>
                        </div>
                        <p>Voluptate ullamco amet magna sunt proident duis nulla.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2}/>
            </Image>
        </Services>
    )
}
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection
