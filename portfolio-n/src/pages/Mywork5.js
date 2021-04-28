import React from 'react';
import Lottie from 'lottie-react';
import "../css/work.css";
import { Col, Row, Container, Image, Carousel } from 'react-bootstrap';
import vscode from './imgs/vscode.png';
import y1 from './imgs/y1.png';
import y2 from './imgs/y2.png';
import y4 from './imgs/y4.png';
import y5 from './imgs/y5.png';
import y0 from './imgs/y0.png';
import k1 from './imgs/k1.png';
import k2 from './imgs/k2.png';
import k3 from './imgs/k3.png';
import k4 from './imgs/k4.png';
import k5 from './imgs/k5.png';
import k6 from './imgs/k6.png';
import k7 from './imgs/k7.png';
import k8 from './imgs/k8.png';
import k9 from './imgs/k9.png';
import k10 from './imgs/k10.png';
import k11 from './imgs/k11.png';
import GameS from './lotties/8620-game-difficult-loading.json';
import Star3 from './lotties/lf30_editor_njvnsc0k.json';
import Star2 from './lotties/lf30_editor_eqqn3vdl.json';
const Mywork5 = () => {
  return (
    <div className="All">
      <div className="section1-w">
        <Container>
          <Row className="header-w">
            <Col xs={6} md={4}>
              <Image variant="top" src={vscode} className="icon-img2" alt="" />
            </Col>
            <Col xs={12} md={8}>
              <div className="work-header">
                <h1>Visual studio code </h1>
                <h5>โปรเจคต่างๆที่ได้ทำเกี่ยวกับเว็บไซตื โดยใช้ภาษาเขียนต่างๆ อาทิเช่น HTML/CSS/JAVASCRIPT/NODE.JS/REACT</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section2-w">
        <Row className="header-s">
          <Col xs={6} md={4} className="lotties-w">

            <Lottie animationData={GameS} className="size-s" />
          </Col>
          <Col xs={12} md={8} className="lotties-s">
            <div className="wks-header2">
              <h1> All Project Visual studio code (2018-2021)</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={y0}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={y1}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={y2}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={y4}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={y5}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
            <h1>GAME WEBSITE HTML/CSS/JAVA SCRIPT (2020)</h1>
            <Container className="stars">
              <Lottie animationData={Star2} className="size-small" /><Lottie animationData={Star2} className="size-small" />
              </Container>
              <h5>	เป็นการทำเกมเว็บไซต์ โดยใช้ HTML, CSS, Java Script  และ  Framework Boostrap งานกลุ่ม 4 คน ผมได้รับมอบหมายให้ดูแลฝ่าย Front-end  และงานDesign ทั้งหมด โดยจัดทำการวาดออกแบบการ์ด ทั้งตัวละคร ลายการ์ดและองค์ประกอบต่างๆภายในเว็บไซต์ วิดีโอโปรโมทเกม แต่หลักการทำานในส่วนหลังบ้านจะเป็นเพื่อนๆในทีมเป็นคนจัดการ </h5>
            </div>
          </Col>
        </Row>

        <Row className="header-s">
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={k1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={k2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={k3}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={k4}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
            <h1>Full-Stack React SpaceX Website Simulator (2021)</h1>
            <Container className="stars">
              <Lottie animationData={Star3} className="size-small" /><Lottie animationData={Star3} className="size-small" /><Lottie animationData={Star3} className="size-small" />
              </Container>
              <h5>	เป็นงานคู่จับทำเว็บไซต์โดยใช้Framework React จัด
ทำทั้ง Front-End และ Back-End  มีการใช้ Boostrap React, filter, Router และ Api เพื่อเรียกและแสดงข้อมูลจำลองเว็บไซต์SpaceX รองรับการResponsive หน้าจอ</h5>
            </div>
          </Col>
        </Row>

        <Row className="header-s">
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={k5}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={k6}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={k7}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={k8}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={k9}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={k10}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={k11}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
              <h1>Vue.JS Website Project Succeed / Social Killer (2020)</h1>
              <Container className="stars">
              <Lottie animationData={Star2} className="size-small" /><Lottie animationData={Star2} className="size-small" />
              </Container>
              <h5>	เป็นงานกลุ่ม5คน โดยต้องศึกาาการใช้ Vue.js โปรเจคที่รับมอบหมายให้ทำมี 2ชิ้น คือเจคมิดเทอมในหัวข้อแความก้าวหน้าของเทคโนโลยีและมนุษยชาติ จึงได้จัดทำเว็บรวบรวมครที่ประสบความสำเร็จในชีวิตในแต่ละช่วงอายุมา เพื่อเป็นเว็บสร้างแรงบันดาลใจ โดยผมมีหน้าที่เป็นDesign และFront-endประจำกลุ่มกับเพื่อนอีก2คนโดยเว็บจะแสดงข้อมูลของผู้ประสบความสำเร็จใกล้กับช่วงอายุที่
ผู้ใช้งานกรอกลงในหน้าแรก
	ชิ้นที่สองเป็นกลุ่ม ไฟนอล ทำเว็บไซต์เกี่ยวกับรณรงค์และเล่าในมุมมองของภัย Social ในด้านคุกคามทางเพศบนโลกออนลน์โดยเว็บพวกเราได้สร้างขึ้นมาเพื่อให้ผู้ใช้งานได้จำลองสวมบทบาทเป็นผู้กระทำความผิดหรือตัดสินใจในตอนแรก และในตอนท้ายหากคุณเป็นผู้ถูกกระทำด้วยการกระทำเหล่านั้นแทนคุณจะรู้สึกอย่างไร ทั้งหมดจากที่กล่าวมา
2 เว็บไซต์ถูกสร้างขึ้นด้วย Vue.js</h5>
<a href="https://succeed.netlify.app/"><h5>URL : https://succeed.netlify.app/</h5></a>
<a href="https://social-killer.netlify.app"><h5>URL : https://social-killer.netlify.app/</h5></a>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}
export default Mywork5;