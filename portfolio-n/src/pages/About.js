import React from 'react'
import "../css/about.css";
import {Image} from 'react-bootstrap';
import i16 from './imgs/i16.jpg';
const About = () => {
  return (
    <div className="All-about">
    
    <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <Image src={i16} alt="" className="about-img" style={{borderRadius: '10px'}} /><style dangerouslySetInnerHTML={{__html: "\n                  .about-img:hover{\n                    box-shadow: 10px 10px 15px 5px rgba(1,1,1,100);\n                    transform: rotate(5deg);\n                   \n                    transition: 0.3s;      \n                  }              \n                  " }} />
            </div>
            <div className="column right about-img" style={{padding: '20px', borderRadius: '10px'}}>
              <div className="text">Mr.Pattharanan Ruengchana <span className="typing-2" /></div>
              <p>Graphic design with 3+ years of experience studying in university.Art design for website, game, content social and making 3D model for animation or product simulation. I am a driven individual with the ability to adapt to any situation and proven potential to grow myself and others.</p>
<p>Date of Birth : 20 / 04 / 2000 
Age : 20 years old
Line : nonote_ptrn
IG : nonote_ptrn
Streamer : @ChefWendyZ
</p>
<div className="text">Education <span className="typing-2" /></div>
<p>KING MONGKUT’S OF TECHNOLOGY LADKRABANG</p>
<p>Bachelor of Science 
Program in Information Technology
2018 - Present
Multimedia and Game Development
<div className="text">GITHUB and GOOGLE DRIVE <span className="typing-2" /></div>
<p>
GITHUB : PattharananZ
G-DRIVE : http://1ab.in/ZNV
</p>
</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About;