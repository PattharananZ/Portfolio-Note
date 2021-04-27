import React from 'react'
import Lottie from 'lottie-react';
import {Link} from 'react-router-dom';
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
                <Link className="links" to="/mywork-unreal" exact><Button variant="outline-dark" className="buttons">Unreal Engine</Button></Link>
                <Link className="links" to="/mywork-maya" exact><Button variant="outline-dark" className="buttons">Maya</Button></Link>
                <Link className="links" to="/mywork-zbrush" exact><Button variant="outline-dark" className="buttons">Zbrush</Button></Link>
                <Link className="links" to="/mywork-substance-painter" exact><Button variant="outline-dark" className="buttons">Substance Painter</Button></Link>
                <Link className="links" to="/mywork-vscode" exact><Button variant="outline-dark" className="buttons">Visual studio code</Button></Link>
                </div>
      </Container>
    </div>
  )
}
export default Mywork;