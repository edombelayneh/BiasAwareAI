'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// const SidebarWrapper = styled.div`
//   width: 220px;
//   height: 100vh;
//   background-color: #1e1e2f;
//   color: white;
//   padding: 20px;
//   position: isMobile ? 'absolute' : 'fixed',
//   top: 0;
//   left: isMobile && !isOpen ? '-220px' : '0',
//   transition: 'left 0.3s ease-in-out',
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;
const SidebarWrapper = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #1e1e2f;
  color: white;
  padding: 20px;
  position: ${(props) => (props.isMobile ? 'absolute' : 'fixed')};
  top: 0;
  left: ${(props) => (props.isMobile && !props.isOpen ? '-260px' : '0')};
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;
`;


const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleButtonStyle = {
    position: 'fixed',
    top: 15,
    left: 15,
    background: 'transparent',
    color: isOpen ? 'white' : 'black',
    border: 'none',
    padding: '2px',
    zIndex: 1100,
    display: isMobile ? 'block' : 'none',
    cursor: 'pointer',
  };
  return (
    
    <SidebarWrapper isMobile={isMobile} isOpen={isOpen}>
      {isMobile && (
        <button style={toggleButtonStyle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </button>
      )}

        <h2>BiasAwareAI</h2>
        <NavList>
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Intro</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Race</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Gender</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Job Opportunities</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Solutions</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">References</Link></li>
        </NavList>
      </SidebarWrapper>
    
  );
};

export default Sidebar;