import * as S from "./HeaderMobile.styles";

function HeaderMobile() {
  return (
    <S.HeaderMobileWrapper>
      <S.HeaderMobileTop>
        <S.HeaderMobileHomeIcon />
        <S.HeaderMobileIconsWrapper>
          <S.HeaderMobileUserIcon />
          <S.HeaderMobileCartIcon />
        </S.HeaderMobileIconsWrapper>
      </S.HeaderMobileTop>
    </S.HeaderMobileWrapper>
  );
}

export default HeaderMobile;
