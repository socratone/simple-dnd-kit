import styled from 'styled-components';

const Box = ({ invisible, children }) => {
  return (
    <Container
      style={{
        width: invisible ? 0 : undefined,
        borderLeft: invisible ? 0 : undefined,
      }}
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
`;

export default Box;
