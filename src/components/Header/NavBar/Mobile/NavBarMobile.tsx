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
      <S.NavBarMobileOpenMenu isOpen={isOpen}>
        <ul>
          <li>Categoria 1</li>
          <li>Categoria 2</li>
          <li>Categoria 3</li>
          <li>Categoria 4</li>
          <li>Categoria 5</li>
        </ul>
      </S.NavBarMobileOpenMenu>
    </S.NavBarMobileWrapper>
  );
}

export default NavBarMobile;
