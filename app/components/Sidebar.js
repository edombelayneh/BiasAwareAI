'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const SidebarWrapper = styled.div`
  width: 150px;
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
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
          <li><Link href="/intro" className="hover:text-gray-300">Intro</Link></li>
          <li><Link href="/race" className="hover:text-gray-300">Race</Link></li>
          <li><Link href="/gender" className="hover:text-gray-300">Gender</Link></li>
          <li><Link href="/job" className="hover:text-gray-300">Job Opportunities</Link></li>
          <li><Link href="/solution" className="hover:text-gray-300">Solutions</Link></li>
          <li><Link href="/reference" className="hover:text-gray-300">References</Link></li>
        </NavList>
      </SidebarWrapper>
  );
};

export default Sidebar;