import Link from "next/link";
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
          <li>
            <Link href={"/categoria-1"}>CATEGORIA 1</Link>
          </li>
          <li>
            <Link href={"/categoria-2"}>CATEGORIA 2</Link>
          </li>
          <li>
            <Link href={"/categoria-3"}>CATEGORIA 3</Link>
          </li>
          <li>
            <Link href={"/categoria-4"}>CATEGORIA 4</Link>
          </li>
          <li>
            <Link href={"/categoria-5"}>CATEGORIA 5</Link>
          </li>
        </S.NavBarMobileOpenMenuUl>
      </S.NavBarMobileOpenMenu>
    </S.NavBarMobileWrapper>
  );
}

export default NavBarMobile;
