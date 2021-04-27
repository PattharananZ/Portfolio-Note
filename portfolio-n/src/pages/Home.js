import "../css/Home.css";
import React from 'react'
import { Image, Card, Button,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Profile from './imgs/Profile.png';
import networking from './imgs/networking.png';
import creativity from './imgs/creativity.png';
import leadership from './imgs/leadership.png';
import teamwork from './imgs/teamwork.png';
import together from './imgs/together.png';
import p1 from './imgs/p1.png';
import p2 from './imgs/p2.png';
import p3 from './imgs/p3.png';
import p4 from './imgs/p4.png';
import p5 from './imgs/p5.png';
import ue from './imgs/ue.png';
import maya from './imgs/maya.png';
import zbrush from './imgs/zbrush.png';
import subp from './imgs/subp.png';
import vscode from './imgs/vscode.png';
const Home = () => {
  return (
    <div className="All">
      <div className="section1">
        <div className="sholder">
          <div className="me-cv">
            <h1>PORTFOLIO</h1>
            <h2>Pattharanan Ruengchana</h2>
            <p>IT MULTIMEDIA AND GAME DEVELOPMENT KMITL<br />
              <span className="sp1">Function:Active<span className="sp2">{'{'}</span></span></p><pre>{"                "}<span className="sp3">skills: </span> 3D Modeler, Web and Game Designer;</pre><span className="sp2">{'}'}</span>
            <p />
          </div>
          <div className="bg-holder">
            <Image src={Profile} className="profile-img" alt="" />
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="sholder2">
          <div className="pe-sk">
            <h1>Personal skill and Usage skill</h1>
          </div>
          <div className="Box-person">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={networking} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Good Communication</Card.Title>
                <Card.Text>
                  มีทักษะการสื่อสารกับบุคคลที่ดี
    </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={creativity} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Creativity</Card.Title>
                <Card.Text>
                  มีความคิดสร้างสรรค์อยู่เสมอ
    </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={teamwork} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Teamwork</Card.Title>
                <Card.Text>
                  ทำงานร่วมกับผู้อื่นได้ดี
    </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={leadership} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Leadership</Card.Title>
                <Card.Text>
                  มีภาวะความเป็นผู้นำ
    </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={together} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Organizational</Card.Title>
                <Card.Text>
                  ปรับสภาพให้เข้ากับองค์กรได้
    </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="Box-skill">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p1} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Unreal Engine</Card.Title>
                <Card.Text>
                  Game Development/ Game Design
    </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p2} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Maya</Card.Title>
                <Card.Text>
                  Model / Rigging / Lighting / Animation
    </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p3} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Zbrush</Card.Title>
                <Card.Text>
                  Model / Blocking /Fiber Mash / Painting
    </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p4} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Substance Painter</Card.Title>
                <Card.Text>
                  Make Textures / Materials
    </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p5} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Visual studio Code</Card.Title>
                <Card.Text>
                  Coding website
    </Card.Text>
              </Card.Body>
            </Card>
            </div>
            </div>
          </div>

          <div className="section3">
            <div className="sholder3">
              <div className="my-pj">
                <h1>My Project</h1>
                <h5>รวมผลงานต่างๆที่ได้ทำระหว่างเรียนในรั้วมหาลัย</h5>
                <h4>แบ่งเป็นทั้งหมด 5 โปรแกรมหลักๆ ดังนี้</h4>
              </div>
              <div className="Box-work">
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ue} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Unreal Engine</Card.Title>
                <Card.Text className="ptext">
                  การทำBlueprint / landscape / lighting / Cinematic 
    </Card.Text>
    <Link className="links" to="/mywork-unreal" exact>
    <Button variant="outline-dark" className="homes">See more</Button></Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={maya} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Maya</Card.Title>
                <Card.Text className="ptext">
                  การทำModel / Rigging / lighting / Animation 
    </Card.Text>
    <Link className="links" to="/mywork-maya" exact>
    <Button variant="outline-dark" className="homes">See more</Button></Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={zbrush} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Zbrush</Card.Title>
                <Card.Text className="ptext">
                  การทำ Mockup / Fiber Mesh / Human Painting 
    </Card.Text>
    <Link className="links" to="/mywork-zbrush" exact>
    <Button variant="outline-dark" className="homes">See more</Button></Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={subp} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Substance Painter</Card.Title>
                <Card.Text className="ptext">
                  การทำ Texture ให้กับ Model / Environment
    </Card.Text>
    <Link className="links" to="/mywork-substance-painter" exact>
    <Button variant="outline-dark" className="homes">See more</Button></Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={vscode} className="icon-img" alt="" />
              <Card.Body>
                <Card.Title>Visual studio Code</Card.Title>
                <Card.Text className="ptext">
                  การเขียนเว็บไซต์ด้วยภาษาต่างๆ ออกแบบ wireframe
    </Card.Text>
    <Link className="links" to="/mywork-vscode" exact>
    <Button variant="outline-dark" className="homes">See more</Button></Link>
              </Card.Body>
            </Card>
              
          </div>
        </div>
      </div>
    </div>

  )
}
export default Home;