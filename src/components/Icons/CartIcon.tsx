import { SVGProps } from "react";

const CartIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "30"}
      height={props.height ?? "30"}
      viewBox={props.viewBox ?? "0,0,256,256"}
      {...props}
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="#fafafa"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M20,3c-1.64453,0 -3,1.35547 -3,3v3h-14c-1.65234,0 -3,1.34766 -3,3v13c0,1.65234 1.34766,3 3,3h44c1.65234,0 3,-1.34766 3,-3v-13c0,-1.65234 -1.34766,-3 -3,-3h-14v-3c0,-1.64453 -1.35547,-3 -3,-3zM20,5h10c0.5625,0 1,0.4375 1,1v3h-12v-3c0,-0.5625 0.4375,-1 1,-1zM25,22c1.10547,0 2,0.89453 2,2c0,1.10547 -0.89453,2 -2,2c-1.10547,0 -2,-0.89453 -2,-2c0,-1.10547 0.89453,-2 2,-2zM0,27v17c0,1.65234 1.34766,3 3,3h44c1.65234,0 3,-1.34766 3,-3v-17c0,1.65234 -1.34766,3 -3,3h-44c-1.65234,0 -3,-1.34766 -3,-3z"></path>
        </g>
      </g>
    </svg>
  );
};

export default CartIcon;