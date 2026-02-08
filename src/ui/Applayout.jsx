import { Outlet } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const StyledApplayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 0rem 1fr;
  transition: grid-template-columns 0.4s;
  background-color: var(--color-grey-0);
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;

  @media (max-width: 768px) {
    padding: 2rem 1.6rem 3.2rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const NavButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  left: ${(props) => (!props.$isOpen ? '1rem' : '22rem')};
  top: 2rem;
  transition: left 0.4s ease;
  z-index: 2;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-600);
  }
`;

function Applayout() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <NavButton onClick={handleToggle} $isOpen={isOpen}>
        <RxHamburgerMenu />
      </NavButton>
      <StyledApplayout>
        <Header />
        <Sidebar isOpen={isOpen} />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledApplayout>
    </>
  );
}

export default Applayout;
