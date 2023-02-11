import { Dispatch, SetStateAction } from "react";
import * as S from "./NavBarMobile.styles";

interface INavBarMobileProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function NavBarMobile({ isOpen, setIsOpen }: INavBarMobileProps) {
  return (
    <S.NavBarMobileWrapper>
      <S.NavBarMobileMenuIcon onClick={() => setIsOpen(!isOpen)} />
      <S.NavBarMobileOpenMenu
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <S.NavBarMobileOpenMenuUl>
          <li>CATEGORIA 1</li>
          <li>CATEGORIA 2</li>
          <li>CATEGORIA 3</li>
          <li>CATEGORIA 4</li>
          <li>CATEGORIA 5</li>
        </S.NavBarMobileOpenMenuUl>
      </S.NavBarMobileOpenMenu>
    </S.NavBarMobileWrapper>
  );
}

export default NavBarMobile;
