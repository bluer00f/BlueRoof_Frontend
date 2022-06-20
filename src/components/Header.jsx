import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Blue Roof</Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">블루루프란?</Nav.Link>
      <Nav.Link href="#pricing">자격진단</Nav.Link>
      <NavDropdown title="기타청약서비스" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">미니게임</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">챗봇</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">커뮤니티</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="마이페이지" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">청약 정보 수정</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">개인 정보 수정</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        로그인
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header