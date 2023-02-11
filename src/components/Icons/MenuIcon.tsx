import { SVGProps } from "react";

const MenuIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "30"}
      height={props.height ?? "30"}
      viewBox={props.viewBox ?? "0,0,256,256"}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="#fafafa"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
        </g>
      </g>
    </svg>
  );
};

export default MenuIcon;
