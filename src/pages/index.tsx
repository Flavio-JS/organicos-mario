import NavBarDesktop from "@/components/Header/NavBar/Desktop/NavBarDesktop";
import NavBarMobile from "@/components/Header/NavBar/Mobile/NavBarMobile";

import { NextPage } from "next";
import * as S from "./styles";

const HomePage: NextPage = () => {
  return (
    <S.IndexWrapper>
      <div
        style={{
          width: "100%",
          border: "1px solid black",
          padding: "10px 5px",
        }}
      >
        <p>Desktop</p>
        <br />
        <NavBarDesktop />
      </div>
      <br />
      <div
        style={{
          width: "375px",
          border: "1px solid black",
          padding: "10px 5px",
        }}
      >
        <p>Mobile</p>
        <br />
        <NavBarMobile />
      </div>
      <br />
    </S.IndexWrapper>
  );
};

export default HomePage;
