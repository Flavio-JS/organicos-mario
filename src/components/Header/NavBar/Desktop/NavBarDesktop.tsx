import Link from "next/link";
import * as S from "./NavBarDesktop.styles";

function NavBarDesktop() {
  return (
    <S.NavBarDesktopWrapper>
      <S.NavBarDesktopList>
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
      </S.NavBarDesktopList>
    </S.NavBarDesktopWrapper>
  );
}

export default NavBarDesktop;
