import styled from 'tailwind';

const StyledLib1 = styled.div`
  color: pink;
`;

export function Lib1() {
  return (
    <StyledLib1>
      <h1>Welcome to Lib1!</h1>
    </StyledLib1>
  );
}

export default Lib1;
