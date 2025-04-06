// // 'use client';
// // import styled from 'styled-components';
// // import Link from 'next/link';
// // import { useState, useEffect } from 'react';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// // const SidebarWrapper = styled.div`
// //   width: 150px;
// //   height: 100vh;
// //   background-color: #1e1e2f;
// //   color: white;
// //   padding: 20px;
// //   position: ${(props) => (props.isMobile ? 'absolute' : 'fixed')};
// //   top: 0;
// //   left: ${(props) => (props.isMobile && !props.isOpen ? '-260px' : '0')};
// //   transition: left 0.3s ease-in-out;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: flex-start;
// //   z-index: 1000;
// // `;

// // const NavList = styled.ul`
// //   list-style: none;
// //   padding: 0;
// //   margin: 0;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 15px;
// // `;

// // const Sidebar = () => {
// //   const [isMobile, setIsMobile] = useState(false);
// //   const [isOpen, setIsOpen] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth <= 768);
// //     };
// //     handleResize();
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   const toggleButtonStyle = {
// //     position: 'fixed',
// //     top: 15,
// //     left: 15,
// //     background: 'transparent',
// //     color: isOpen ? 'white' : 'black',
// //     border: 'none',
// //     padding: '2px',
// //     zIndex: 1100,
// //     display: isMobile ? 'block' : 'none',
// //     cursor: 'pointer',
// //   };
// //   return (
    
// //     <SidebarWrapper isMobile={isMobile} isOpen={isOpen}>
// //       {isMobile && (
// //         <button style={toggleButtonStyle} onClick={() => setIsOpen(!isOpen)}>
// //           {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
// //         </button>
// //       )}
// //         <h2>BiasAwareAI</h2>
// //         <NavList>
// //           <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
// //           <li><Link href="/intro" className="hover:text-gray-300">Intro</Link></li>
// //           <li><Link href="/race" className="hover:text-gray-300">Race</Link></li>
// //           <li><Link href="/gender" className="hover:text-gray-300">Gender</Link></li>
// //           <li><Link href="/job" className="hover:text-gray-300">Job Opportunities</Link></li>
// //           <li><Link href="/solution" className="hover:text-gray-300">Solutions</Link></li>
// //           <li><Link href="/reference" className="hover:text-gray-300">References</Link></li>
// //         </NavList>
// //       </SidebarWrapper>
// //   );
// // };

// // export default Sidebar;


// 'use client';
// import styled, { keyframes } from 'styled-components';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// const glow = keyframes`
//   0% {
//     box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
//   }
//   50% {
//     box-shadow: 0 0 15px rgba(156, 39, 176, 0.6), 0 0 25px rgba(156, 39, 176, 0.3);
//   }
//   100% {
//     box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
//   }
// `;

// const SidebarWrapper = styled.div`
//   width: 200px;
//   height: 100vh;
//   background-color: #1e1e2f;
//   color: white;
//   padding: 20px;
//   position: ${(props) => (props.isMobile ? 'absolute' : 'fixed')};
//   top: 0;
//   left: ${(props) => (props.isMobile && !props.isOpen ? '-260px' : '0')};
//   transition: left 0.3s ease-in-out;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   z-index: 1000;
//   border-right: 2px solid #9C27B0;
// `;

// const NavList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 20px 0 0 0;
//   display: flex;
//   flex-direction: column;
//   gap: 25px;
//   width: 100%;
// `;

// const NavItem = styled(Link)`
//   color: white;
//   text-decoration: none;
//   padding: 10px 15px;
//   border-radius: 10px;
//   font-weight: 500;
//   transition: all 0.3s ease-in-out;
//   animation: ${glow} 2s infinite alternate;

//   &:hover {
//     background-color: rgba(156, 39, 176, 0.15);
//     color: #e6e6fa;
//     transform: scale(1.03);
//   }
// `;

// const Sidebar = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleButtonStyle = {
//     position: 'fixed',
//     top: 15,
//     left: 15,
//     background: 'transparent',
//     color: isOpen ? '#E6E6FA' : '#9C27B0',
//     border: 'none',
//     padding: '4px',
//     zIndex: 5100,
//     display: isMobile ? 'block' : 'none',
//     cursor: 'pointer',
//   };

//   return (
//     <>
//       {/* {isMobile && (
//         <button style={toggleButtonStyle} onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <MenuOpenIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
//         </button>
//       )} */}
      
//       <button
//         style={{
//           ...toggleButtonStyle,
//           display: isMobile ? 'block' : 'none',
//         }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <MenuOpenIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
//       </button>


//       <SidebarWrapper isMobile={isMobile} isOpen={isOpen}>
//         <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#E6E6FA', marginBottom: '30px', marginTop: '60px' }}>
//           BiasAwareAI
//         </h2>
//         <NavList>
//           <li><NavItem href="/">Home</NavItem></li>
//           <li><NavItem href="/intro">Intro</NavItem></li>
//           <li><NavItem href="/race">Race</NavItem></li>
//           <li><NavItem href="/gender">Gender</NavItem></li>
//           <li><NavItem href="/job">Job Opportunities</NavItem></li>
//           <li><NavItem href="/solution">Solutions</NavItem></li>
//           <li><NavItem href="/reference">References</NavItem></li>
//         </NavList>
//       </SidebarWrapper>
//     </>
//   );
// };

// export default Sidebar;

'use client';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
  }
  50% {
    box-shadow: 0 0 15px rgba(156, 39, 176, 0.6), 0 0 25px rgba(156, 39, 176, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
  }
`;

// Wrapper that changes based on screen size
const SidebarWrapper = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #1e1e2f;
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 2px solid #9C27B0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

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
  padding: 4px;
  z-index: 2000;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 60px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  animation: ${glow} 2s infinite alternate;

  &:hover {
    background-color: rgba(156, 39, 176, 0.15);
    color: #e6e6fa;
    transform: scale(1.03);
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Close the menu if switching to desktop
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button only shows on small screens */}
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MenuOpenIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </ToggleButton>

      <SidebarWrapper isOpen={isOpen}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#E6E6FA', marginBottom: '30px', marginTop: '60px', gap: '50px' }}>
          BiasAwareAI
        </h2>
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

