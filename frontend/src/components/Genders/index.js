import styled from "styled-components";
import Gender from "./Gender";
import fantasy from "../../assets/images/fantasy.jpg";
import fiction from "../../assets/images/fiction.jpg";
import history from "../../assets/images/history.jpg";
import horror from "../../assets/images/horror.jpg";
import humor from "../../assets/images/humor.jpg";
import romance from "../../assets/images/romance.png";
import science from "../../assets/images/science.jpg";

export default function Genders() {
  const GENDER_TYPE = Object.freeze({
    ROMANCE: "Romance",
    FANTASY: "Fantasia",
    FICTION: "Ficção",
    HORROR: "Horror",
    SCIENCE: "Ciência",
    HUMOR: "Humor",
    HISTORY: "História",
  });

  const COLOR_PALLETE = Object.freeze({
    AMARANTH: "#b20056",
    CHERRY_BLOSSOM: "#fcabb7",
    TEAM_ROSE: "#ebc2c8",
    PLATINUM: "#d9d9d9",
    CADET_GRAY: "#a4a8ac",
    STATE_GRAY: "#6e767e",
    RICH_BLACK: "#021323",
  });

  const COLOR_GENDER = Object.freeze({
    [GENDER_TYPE.ROMANCE]: COLOR_PALLETE.AMARANTH,
    [GENDER_TYPE.FANTASY]: COLOR_PALLETE.CHERRY_BLOSSOM,
    [GENDER_TYPE.FICTION]: COLOR_PALLETE.TEAM_ROSE,
    [GENDER_TYPE.HORROR]: COLOR_PALLETE.PLATINUM,
    [GENDER_TYPE.SCIENCE]: COLOR_PALLETE.CADET_GRAY,
    [GENDER_TYPE.HUMOR]: COLOR_PALLETE.STATE_GRAY,
    [GENDER_TYPE.HISTORY]: COLOR_PALLETE.RICH_BLACK,
  });
  const images = [romance, fantasy, fiction, horror, science, humor, history];

  const genderList = Object.entries(COLOR_GENDER);
  genderList.forEach((gender, index) => {
    gender.push(images[index]);
  });
  return (
    <GenderContainer>
      {genderList.map((gender) => (
        <Gender gender={gender} />
      ))}
    </GenderContainer>
  );
}

const GenderContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
