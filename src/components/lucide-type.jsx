import clsx from "clsx";
import "./lucide-type.scss";

export default function LucideType(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideType_15_468", className)}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_434"
      >
        <path
          d="M0.666656 2.66669V0.666687H11.3333V2.66669M3.99999 11.3334H7.99999M5.99999 0.666687V11.3334"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
