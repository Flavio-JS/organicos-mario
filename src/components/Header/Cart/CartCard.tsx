import * as S from "./CartCard.styles";

interface ICartCardProps {
  currentCartItems?: number;
}

function CartCard({ currentCartItems }: ICartCardProps) {
  return (
    <S.CartCardWrapper>
      <S.CartCardIcon />
      <S.CartCardAmountWrapper>{currentCartItems}</S.CartCardAmountWrapper>
      <S.CartCardTextWrapper>
        <h2>MEU CARRINHO</h2>
        <p>Produtos adicionados</p>
      </S.CartCardTextWrapper>
    </S.CartCardWrapper>
  );
}

export default CartCard;
