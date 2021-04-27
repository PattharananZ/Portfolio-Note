import React from 'react';
import Lottie from 'lottie-react';
import "../css/work.css";
import { Col, Row, Container, Image, Carousel } from 'react-bootstrap';
import zbrush from './imgs/zbrush.png';
import e1 from './imgs/e1.png';
import e2 from './imgs/e2.png';
import e3 from './imgs/e3.png';
import e4 from './imgs/e4.png';
import GameS from './lotties/8620-game-difficult-loading.json';
import Star2 from './lotties/lf30_editor_eqqn3vdl.json';
const Mywork3 = () => {
  return (
    <div className="All">
      <div className="section1-w">
        <Container>
          <Row className="header-w">
            <Col xs={6} md={4}>
              <Image variant="top" src={zbrush} className="icon-img2" alt="" />
            </Col>
            <Col xs={12} md={8}>
              <div className="work-header">
                <h1>Zbrush</h1>
                <h5>เป็นชิ้นงานแรกที่ใช้zbrushในการปั้นหน้าบุคคลโดยเริ่มจากการขึ้นmockupโครงหน้า ดวงตา หู จมูก ปาก คิ้ว การทำผมและการลงสีผิว</h5>
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
              <h1> All Project Zbrush (2020)</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={e1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={e2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={e3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={e4}
                  alt="First slide"
                />
              </Carousel.Item>S
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
            <h1>BLOCKING AND PAINTING HUMAN MODEL (2020)</h1>
            <Container className="stars">
              <Lottie animationData={Star2} className="size-small" /><Lottie animationData={Star2} className="size-small" />
              </Container>
              <h5>จัดทำปั้นโมเดลจากศิลปินหรือดาราที่ชอบ 1คน เป็นโปรเจคไฟนอลของวิชา 3D Computer Animation
โดยศิลปินที่ผมหยิบยกมาคือ เวนดี้  Red velvet  ไอดอลสัญชาติเกาหลี โดยเริ่มต้นปั้นโครงหน้า โดยขั้นแรกคือ Blocking โครงหน้าให้ใกล้เคียงกับ Reference   จากนั้นเป็นขั้นของการทำดวงตาและริมฝีปาก   ร่องและแก้มต่างๆเพื่อเตรียมพร้อมสู่ขั้น Painting ที่เป็นขั้นตอนของการทำTextures ต่างๆให้ใบหน้าของโมเดลมีมิติและดูสมจริงมายิ่งขึ้ร โดยโมเดลนี้ใช้เวลา
สร้างตั้งแต่ต้นจนจบ เป็นเวลาทั้งหมดประมาณ5ชั่วโมง</h5>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}
export default Mywork3;