import React from 'react';
import Lottie from 'lottie-react';
import "../css/work.css";
import { Col, Row, Container, Image, Carousel } from 'react-bootstrap';
import subp from './imgs/subp.png';
import g1 from './imgs/g1.png';
import g2 from './imgs/g2.png';
import Car1 from './imgs/car1.jpg';
import Car2 from './imgs/car2.jpg';
import Car3 from './imgs/car3.jpg';
import Car4 from './imgs/car4.jpg';
import Car5 from './imgs/car5.jpg';
import Car6 from './imgs/car6.jpg';
import GameS from './lotties/8620-game-difficult-loading.json';
import Star2 from './lotties/lf30_editor_eqqn3vdl.json';
import Star1 from './lotties/lf30_editor_cgif6zs9.json';
const Mywork4 = () => {
  return (
    <div className="All">
      <div className="section1-w">
        <Container>
          <Row className="header-w">
            <Col xs={6} md={4}>
              <Image variant="top" src={subp} className="icon-img2" alt="" />
            </Col>
            <Col xs={12} md={8}>
              <div className="work-header">
                <h1>Substance Painter </h1>
                <h5>จัดทำพวกMaterials Texturesต่างๆด้วยโปรแกรมsubstance painter อาทิเช่น เทกเตอร์ชุดเกราะ และยานพาหนะ เพื่อนำไปใส่ในโปรแกรมมายา</h5>
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
              <h1> All Substance Painter (2020)</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={g1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={g2}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
            <h1>MAKING  TEXTURES / MATERIALS FOR CHARACTER (2020)</h1>
            <Container className="stars">
              <Lottie animationData={Star2} className="size-small" /><Lottie animationData={Star2} className="size-small" />
              </Container>
              <h5>ใช้ Sustance Painter ออกแบบTextures เพื่อนำไปทำMaterial ไปใส่ให้กับโมเดลที่ปั้นในโปรแกรม MAYA โดยTextxture ที่เคยใช้ทำคือ โลหะมันวาว ชุดเกราะ รอยกระสุนยิง ชุดหนังให้กับโมเดลตัวละครและยานพหนะ และอื่นๆที่เคย
ทดลองเล่น เบื้องต้น</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Carousel>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={Car1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Car2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Car3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>

                <img
                  className="d-block w-100"
                  src={Car4}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Car5}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Car6}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col xs={12} md={8}>
            <div className="wks-header">
            <h1>MAKING  TEXTURES / MATERIALS FOR VEHICLE (2020)</h1>
            <Container className="stars">
              <Lottie animationData={Star1} className="size-small" />
              </Container>
              <h5>       ใช้ Sustance Painter ออกแบบTextures เพื่อนำไปทำMaterial ไปใส่ให้กับโมเดล ยาพาหนะที่ปั้นในโปรแกรม MAYA โดยTextxture  คราบเลือดบนรถ โลหะปุ่มเปียโน คาบฝุ่นยานพหนะ เบื้องต้น</h5>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Mywork4;