import clsx from "clsx";
import "./lucide-minus.scss";

export default function LucideMinus(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideMinus_15_467", className)}>
      <svg
        width="10"
        height="2"
        viewBox="0 0 10 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_447"
      >
        <path
          d="M0.333344 1H9.66668"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
