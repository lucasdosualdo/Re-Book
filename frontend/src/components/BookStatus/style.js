import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  //margin-top: 70px;
`;

export const Option = styled.div`
  background-color: ${(props) =>
    props.selected ? "var(--pink-color)" : "var(--gray-color)"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  padding: 10px 30px 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => (props.selected ? "var(--gray-color)" : "var(--pink-color)")};
  font-size: 18px;
  font-weight: 700;
`;
