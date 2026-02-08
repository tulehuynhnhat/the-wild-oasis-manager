import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
// import Uploader from '../data/Uploader';

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow: hidden;

  min-width: 26rem;
  transform: ${(props) => (!props.$isOpen ? 'translateX(-100%)' : 'translateX(0)')};
  transition: transform 0.4s;
  z-index: 1;
`;

function Sidebar({ isOpen }) {
  return (
    <StyledSidebar $isOpen={isOpen}>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
