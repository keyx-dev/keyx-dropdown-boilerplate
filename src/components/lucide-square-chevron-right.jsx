import clsx from "clsx";
import "./lucide-square-chevron-right.scss";

export default function LucideSquareChevronRight(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element
      {...rest}
      className={clsx("lucideSquareChevronRight_15_279", className)}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_276"
      >
        <path
          d="M5.66667 4.33333L8.33333 7L5.66667 9.66667M2.33333 1H11.6667C12.403 1 13 1.59695 13 2.33333V11.6667C13 12.403 12.403 13 11.6667 13H2.33333C1.59695 13 1 12.403 1 11.6667V2.33333C1 1.59695 1.59695 1 2.33333 1Z"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
