import styled from "styled-components";
export const Button = styled.button`
  color: ${(props) => props.color};
  display: inline-block;
  border-radius: 5px;
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  padding: 8px;
  font-size: medium;
`;
export const Paragragh = styled.p`
  display: inline-block;
  font-size: medium;
`;
export const Div = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  display: ${(props) => props.display};
`;
