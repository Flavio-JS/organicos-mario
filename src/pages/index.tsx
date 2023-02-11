import NavBarDesktop from "@/components/Header/NavBar/Desktop/NavBarDesktop";
import NavBarMobile from "@/components/Header/NavBar/Mobile/NavBarMobile";

import { NextPage } from "next";
import { useState } from "react";
import * as S from "./styles";

const HomePage: NextPage = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  return (
    <S.IndexWrapper>
      <NavBarDesktop />

      <NavBarMobile isOpen={isMenuMobileOpen} setIsOpen={setIsMenuMobileOpen} />
    </S.IndexWrapper>
  );
};

export default HomePage;
