import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
const Header = () => {
  return (
  
    <Navbar collapseOnSelect expand="lg" variant="light" style={{borderBottom:"1px solid #D3D3D3"}}>
  <Container style={{fontWeight:"600"}}>
  <Navbar.Brand href="#home" style={{fontSize:"25px", color:"#0028FF"}}>BlueRoof</Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav" style={{marginLeft:"40px"}}>
    <Nav className="me-auto">
      <Nav.Link href="#features" style={{marginRight:"20px"}} >블루루프란?</Nav.Link>
      <Nav.Link href="#pricing" style={{marginRight:"20px"}}>자격진단</Nav.Link>
      <NavDropdown title="기타청약서비스" id="collasible-nav-dropdown" style={{marginRight:"20px"}}>
        <NavDropdown.Item href="#action/3.1">미니게임</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">챗봇</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">커뮤니티</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="마이페이지" id="collasible-nav-dropdown" style={{marginRight:"20px"}}>
        <NavDropdown.Item href="/editsubscript">청약 정보 수정</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">개인 정보 수정</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="/login">
        로그인
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header