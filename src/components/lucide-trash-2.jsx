import clsx from "clsx";
import "./lucide-trash-2.scss";

export default function LucideTrash2(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideTrash2_14_187", className)}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_14_186"
      >
        <path
          d="M1 2.99998H13M11.6667 2.99998V12.3333C11.6667 13 11 13.6666 10.3333 13.6666H3.66667C3 13.6666 2.33333 13 2.33333 12.3333V2.99998M4.33333 2.99998V1.66665C4.33333 0.99998 5 0.333313 5.66667 0.333313H8.33333C9 0.333313 9.66667 0.99998 9.66667 1.66665V2.99998M5.66667 6.33331V10.3333M8.33333 6.33331V10.3333"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
