import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  overflow: auto;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export default TableOperations;
