import React from 'react';
import Lottie from 'lottie-react';
import "../css/work.css";
import { Col, Row, Container, Image, Carousel } from 'react-bootstrap';
import ue from './imgs/ue.png';
import i1 from './imgs/i1.png';
import i2 from './imgs/i2.png';
import i3 from './imgs/i3.png';
import i4 from './imgs/i4.png';
import i5 from './imgs/i5.png';
import i6 from './imgs/i6.png';
import i7 from './imgs/i7.png';
import i8 from './imgs/i8.png';
import i9 from './imgs/i9.png';
import i10 from './imgs/i10.png';
import i11 from './imgs/i11.png';
import i12 from './imgs/i12.png';
import i13 from './imgs/i13.png';
import i14 from './imgs/i14.png';
import i15 from './imgs/i15.png';
import Cinematic1 from './imgs/Cinematic1.png';
import Cinematic2 from './imgs/Cinematic2.png';
import Cinematic3 from './imgs/Cinematic3.png';
import Cinematic4 from './imgs/Cinematic4.png';
import Cinematic5 from './imgs/Cinematic5.png';
import Cinematic6 from './imgs/Cinematic6.png';
import Cinematic7 from './imgs/Cinematic7.png';
import Cinematic8 from './imgs/Cinematic8.png';
import Cinematic9 from './imgs/Cinematic9.png';
import Cinematic10 from './imgs/Cinematic10.png';
import Cinematic11 from './imgs/Cinematic11.png';
import GameS from './lotties/8620-game-difficult-loading.json';
import Star1 from './lotties/lf30_editor_cgif6zs9.json';
import Star3 from './lotties/lf30_editor_njvnsc0k.json';
import Star2 from './lotties/lf30_editor_eqqn3vdl.json';
const Mywork1 = () => {
  return (
    <div className="All">
      <div className="section1-w">
        <Container>
          <Row className="header-w">
            <Col xs={6} md={4}>
              <Image variant="top" src={ue} className="icon-img2" alt="" />
            </Col>
            <Col xs={12} md={8}>
              <div className="work-header">
                <h1>Unreal Engine 4 </h1>
                <h5>โปรเจคต่างๆที่ได้ทำจะเป็นส่วนที่เกี่ยวข้องกับการทำเกม โดยเริ่มตั้งแต่ขั้นจัดทำ Lanscape ของแมพ การทำBlueprint ของFunctionหรือ Materials ต่างๆ การจัดแสง การจัดมุมกล้อง รวมไปถึงการทำ particle และ Cinematic</h5>
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
              <h1> All Project Unreal Engine 4 (2020-2021)</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={i1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={i4}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i5}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i6}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i7}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
            <h1>Final game project (2020)</h1>
            <Container className="stars">
              <Lottie animationData={Star3} className="size-small" /><Lottie animationData={Star3} className="size-small" /><Lottie animationData={Star3} className="size-small" />
              </Container>
              <h5>       สร้างโปรเจคเกมร่วมกับเพื่อนอีก3คน โดยใช้โปรแกรม Unreal Engine 4.25 ซึ่งหน้าที่หลักของผมคือ Game Design, Graphic Design และ SupportGame Development Coding ผมเป็นคนรับผิดชอบงานในส่วนร่าง Mockup เพื่อนำเสนอภายในกลุ่ม ออกแบบและสร้างแมพทุกแมพภายในเกมนี้ เป็นจำนวนทั้งสิ้น7 แมพ โดยผมรับผิดทุกขั้นตอนตั้งแต่สร้างพื้นที่ ทำTextures Materials ต่างๆที่ต้องใช้ในเกม ตกแต่งแมพต่างๆทั้งบนบกและในน้ำ การจัดแสงและเอฟเฟคต่างๆ รวมถึงงานออกแบบต่างๆภายในโปรเจค</h5>
            </div>
          </Col>
        </Row>

        <Row className="header-s">
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={i15}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={i8}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i9}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i10}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={i11}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i12}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i13}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i14}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
            <h1>Midterm game design project (2021)</h1>
            <Container className="stars">
              <Lottie animationData={Star2} className="size-small" /><Lottie animationData={Star2} className="size-small" />
              </Container>
              <h5>               สร้างโปรเจคเกมด้วยตัวคนเดียว โดยใช้โปรแกรม Unreal Engine 4.26 ซึ่งเริ่มทำตั้งแต่ขั้นแรกสร้างพื้น Landscape ทำ Material โยงเส้น Textures, Blueprints ต่างๆ วางสิ่งของ วัตถุเองภายใน Level Map จัดแสงและเงา Filter ต่างๆ ตั้งค่าเพื่อให้มีประสิทธิภาพสูงและดียิ่งขึ้น เวลาทั้งหมดของ
โปรเจคนี้คือ 5 week ใช้เวลาทำโดยประมาณ 5-12 ชม./สัปดาห์  </h5>
            </div>
          </Col>
        </Row>

        <Row className="header-s">
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={Cinematic1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Cinematic2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Cinematic3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={Cinematic4}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Cinematic5}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Cinematic6}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Cinematic7}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={Cinematic8}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Cinematic9}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Cinematic10}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={Cinematic11}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
              <h1>Cinematic game project (2021)</h1>
              <Container className="stars">
              <Lottie animationData={Star1} className="size-small" />
              </Container>
              <h5>       สร้างAnimation ใน Unreal engine โหมดcinematic โดยจัดทำตั้งแต่มุมกล้อง ท่าทาง เอคเฟคต่างๆทั้งที่ทำเองและนำassetมาใช้ เป็นโปรเจคไฟนอลเดี่ยว มีความยาวประมาณ4นาที </h5>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}
export default Mywork1;