import styled from "styled-components";

function Error({ children }) {
  return <Texto>{children}</Texto>;
}

const Texto = styled.div`
  background-color: #a11811;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-align: center;
`;

export default Error;
