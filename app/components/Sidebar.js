'use client';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(156, 39, 176, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3);
  }
`;

const SidebarWrapper = styled.div`
  width: 240px;
  height: 100vh;
  background: linear-gradient(180deg, #1e1e2f 0%, #2b2b44 100%);
  color: white;
  padding: 30px 20px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 2px solid #9C27B0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 0 10px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  background: transparent;
  color: #9C27B0;
  border: none;
  z-index: 2000;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: #E6E6FA;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 28px; // increased spacing between items
`;

const NavItem = styled(Link)`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  padding: 14px 20px; // more padding for breathing room
  border-radius: 12px;
  transition: all 0.25s ease-in-out;
  animation: ${glow} 3s ease-in-out infinite alternate;

  &:hover {
    background-color: rgba(156, 39, 176, 0.2);
    color: #fff8ff;
    transform: translateX(5px);
  }
`;


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MenuOpenIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </ToggleButton>

      <SidebarWrapper isOpen={isOpen}>
        <Title>BiasAwareAI</Title>
        <NavList>
          <li><NavItem href="/">Home</NavItem></li>
          <li><NavItem href="/intro">Intro</NavItem></li>
          <li><NavItem href="/race">Race</NavItem></li>
          <li><NavItem href="/gender">Gender</NavItem></li>
          <li><NavItem href="/job">Job Opportunities</NavItem></li>
          <li><NavItem href="/solution">Solutions</NavItem></li>
          <li><NavItem href="/reference">References</NavItem></li>
        </NavList>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;

