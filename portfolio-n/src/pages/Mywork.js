import React from 'react'
import Lottie from 'lottie-react';
import { Container, Button } from 'react-bootstrap';
import works from './lotties/39702-work-space.json';
import "../css/allwork.css";
const Mywork = () => {
  return (
    <div className="Allworkss">
      <Container className="Allworks">
      <div className="all-work">
                <h1>My Work and Project </h1>
                <Lottie animationData={works} className="size-medium" />
                <Button variant="outline-dark">Unreal Engine</Button>
                <Button variant="outline-dark">Maya</Button>
                <Button variant="outline-dark">Zbrush</Button>
                <Button variant="outline-dark">Substance Painter</Button>
                <Button variant="outline-dark">Visual studio code</Button>
                </div>
      </Container>
    </div>
  )
}
export default Mywork;