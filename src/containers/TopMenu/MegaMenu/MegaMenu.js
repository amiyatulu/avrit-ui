import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import styles from './MegaMenu.module.css';
const megaMenu = () => {
    return ( <React.Fragment> 
       
        <li className="nav-item dropdown" id={styles.pinitial2}>
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sections
        </a>
        <div className= {"dropdown-menu " + styles['mega-container']} aria-labelledby="navbarDropdown" id = {styles.full2 } >
        
             
        <Container>
        <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
</div>
</li>
    </React.Fragment> );
}
 
export default megaMenu;