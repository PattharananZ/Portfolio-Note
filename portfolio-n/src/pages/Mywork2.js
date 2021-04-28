import React from 'react';
import Lottie from 'lottie-react';
import "../css/work.css";
import { Col, Row, Container, Image, Carousel } from 'react-bootstrap';
import maya from './imgs/maya.png';
import d1 from './imgs/d1.png';
import d2 from './imgs/d2.png';
import d3 from './imgs/d3.png';
import d4 from './imgs/d4.png';
import d5 from './imgs/d5.png';
import d6 from './imgs/d6.png';
import d7 from './imgs/d7.png';
import d8 from './imgs/d8.png';
import d9 from './imgs/d9.png';
import d10 from './imgs/d10.png';
import d11 from './imgs/d11.png';
import GameS from './lotties/8620-game-difficult-loading.json';
import Star3 from './lotties/lf30_editor_njvnsc0k.json';
import Star2 from './lotties/lf30_editor_eqqn3vdl.json';
const Mywork2 = () => {
  return (
    <div className="All">
      <div className="section1-w">
        <Container>
          <Row className="header-w">
            <Col xs={6} md={4}>
              <Image variant="top" src={maya} className="icon-img2" alt="" />
            </Col>
            <Col xs={12} md={8}>
              <div className="work-header">
                <h1>MAYA </h1>
                <h5>โปรเจคต่างๆที่ได้ทำจะเป็นส่วนที่เกี่ยวข้องกับการทำโมเดล ริกกิ้ง และอนิเมชั่น โดยเริ่มตั้งแต่ขั้นจัดทำ ปั้นตัวละคร เสื้อผ้า การทำtexture การจัดแสงเรนเดอร์Arnold การทำข้อต่อกระดูก และการทำอนิเมชั่น</h5>
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
              <h1> All Project MAYA (2020-2021)</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={d1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={d2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={d3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={d4}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={d5}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
            <h1>MODELING RIGGING LIGHTING AND ANIMATED - MAYA (2020)</h1>
            <Container className="stars">
            <Lottie animationData={Star2} className="size-small" /><Lottie animationData={Star2} className="size-small" />
              </Container>
              <h5>เป็นงานเดี่ยวFinal  จัดทำAnimation รณรงค์ป้องกันโรคCovid-19 โดยมีความยาวไม่น้อยกว่า 30วิ ซึ่งงานนี้ได้มีการทำตั้งแต่ปั้นโมเดลตัวละครหลัก (ขึ้นโครงตัวละครหลัก จัดทำเสื้อ ทำหน้าตาจมูกปาก รวมไปถึงทำผม)  ทำอุปกรณ์ประกอบฉากเช่น เครื่องวัดไข้ เจลล้างมือ หน้ากากอนามัย การ์ดหรือรวมแม่แต่ฉากอาคารต่างๆที่อยู่ในอนิเมชั่นครั้งโดยใช้การ จัดแสงต่างๆและเรนเดอร์ด้วยArnold คุณภาพ720p 
มีระยะเวลาอนิเมชั่นทั้งหมดรวม1นาที10วิ สามารถรับชมได้ในไดร์ฟที่แนบไว้</h5>
<a href="https://youtu.be/a97Kiv28nOY"><h5>Video animation </h5></a>
            </div>
           
          </Col>
        </Row>

        <Row className="header-s">
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={d6}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={d7}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={d8}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={d9}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={d10}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={d11}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
            <h1>ANIMATION PROJECT  GROUP (2021)</h1>
            <Container className="stars">
            <Lottie animationData={Star3} className="size-small" /><Lottie animationData={Star3} className="size-small" /><Lottie animationData={Star3} className="size-small" />
              </Container>
              <h5>เป็นงานกลุ่ม ทำอนิเมชั่น ตั้งแต่สร้างตัวละครและอาวุธต่างๆ ตามสายอาชีพ โดยแบ่งออกเป็น นักดาบ โล่ ธนู และนักเวทย์ เป็นอนิเมชั่นเรื่องสั้น โดยผมได้รับมอบหมายให้เป็นผู้คุมงานทั้หมดภายในโปรเจค เป็นคนสร้างตัวละครและ
ริกกิ้งกระดูกของตัวละครโล่ ทำการสร้างตั้งแต่ขวานกับโล่ในโปรแกรมมายา  และเป็นคนที่คอยกำหนดมุมกล้องทั้งหมดภายในโปรเจค และจัดทำอนิเมชั่นและจัดแสงเป็นส่วนใหญ่ในโปรเจคและร่วมช่วยกันเรนเดอร์ออกมาในคุณภาพ 720p   </h5>
<a href="https://youtu.be/6H8COr0btTw"><h5>Video animation </h5></a>
            </div>
          </Col>
        </Row>


      </div>
    </div>
  )
}
export default Mywork2;