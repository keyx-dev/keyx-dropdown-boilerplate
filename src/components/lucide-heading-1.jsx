import clsx from "clsx";
import "./lucide-heading-1.scss";

export default function LucideHeading1(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideHeading1_15_465", className)}>
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_455"
      >
        <path
          d="M0.666656 5H5.99999M0.666656 9V1M5.99999 9V1M9.33332 5L11.3333 3.66667V9"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
