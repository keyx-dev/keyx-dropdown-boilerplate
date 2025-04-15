import clsx from "clsx";
import "./lucide-heading-2.scss";

export default function LucideHeading2(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideHeading2_15_464", className)}>
      <svg
        viewBox="0 0 13 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_463"
      >
        <path
          d="M0.666687 5H6.00002M0.666687 9V1M6.00002 9V1M12 9H9.33335C9.33335 6.33333 12 7 12 5C12 4 10.6667 3.33333 9.33335 4.33333"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
