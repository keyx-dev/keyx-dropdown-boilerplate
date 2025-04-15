import clsx from "clsx";
import "./lucide-plus.scss";

export default function LucidePlus(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucidePlus_15_378", className)}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_377"
      >
        <path
          d="M0.333344 4.99998H9.66668M5.00001 0.333313V9.66665"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
