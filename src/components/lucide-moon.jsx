import clsx from "clsx";
import "./lucide-moon.scss";

export default function LucideMoon(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideMoon_15_368", className)}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_359"
      >
        <path
          d="M7 1C6.20435 1.79565 5.75736 2.87478 5.75736 4C5.75736 5.12522 6.20435 6.20435 7 7C7.79565 7.79565 8.87478 8.24264 10 8.24264C11.1252 8.24264 12.2044 7.79565 13 7C13 8.18669 12.6481 9.34673 11.9888 10.3334C11.3295 11.3201 10.3925 12.0892 9.2961 12.5433C8.19975 12.9974 6.99335 13.1162 5.82946 12.8847C4.66558 12.6532 3.59648 12.0818 2.75736 11.2426C1.91825 10.4035 1.3468 9.33443 1.11529 8.17054C0.88378 7.00666 1.0026 5.80026 1.45673 4.7039C1.91085 3.60754 2.67989 2.67047 3.66658 2.01118C4.65328 1.35189 5.81331 1 7 1Z"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
