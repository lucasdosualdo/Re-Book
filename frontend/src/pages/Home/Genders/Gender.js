import styled from "styled-components";

export default function Gender({ gender, fantasy }) {
  const title = gender[0];
  const color = gender[1];
  const image = gender[2];

  return (
    <GenderBox title={title} color={color}>
      <h3>{title}</h3>
      <img src={image} alt="" />
    </GenderBox>
  );
}

const GenderBox = styled.div`
  background-color: ${(props) => props.color};
  width: calc(100% / 7);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  :hover {
    width: 18%;
    font-size: 36px;
    text-shadow: #b20056 1px 0 10px;
  }
  transition: all 0.5s ease;
  h3 {
    position: absolute;

    z-index: 1;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;
