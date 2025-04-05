'use client';
import styled from 'styled-components';
import Link from 'next/link';

const SidebarWrapper = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #1e1e2f;
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  return (
    <SidebarWrapper>
      <h2>BiasAwareAI</h2>
      <nav>
        <NavList>
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Intro</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Race</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Gender</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Job Opportunities</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Solutions</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">References</Link></li>
        </NavList>
      </nav>
    </SidebarWrapper>
  );
};

export default Sidebar;