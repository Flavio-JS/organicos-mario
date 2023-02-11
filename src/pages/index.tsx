import NavBarDesktop from "@/components/Header/NavBar/Desktop/NavBarDesktop";
import NavBarMobile from "@/components/Header/NavBar/Mobile/NavBarMobile";

import { NextPage } from "next";
import { useState } from "react";
import * as S from "./styles";

const HomePage: NextPage = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

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
          height: "667px",
          border: "1px solid black",
          padding: "10px 5px",
          backgroundColor: "#0f6e3f",
        }}
      >
        <p>Mobile</p>
        <br />
        <NavBarMobile
          isOpen={isMenuMobileOpen}
          setIsOpen={setIsMenuMobileOpen}
        />
      </div>
      <br />
    </S.IndexWrapper>
  );
};

export default HomePage;
