import clsx from "clsx";
import "./lucide-sun.scss";

export default function LucideSun(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideSun_15_369", className)}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_354"
      >
        <path
          d="M7.00001 0.333313V1.66665M7.00001 12.3333V13.6666M2.28668 2.28665L3.22668 3.22665M10.7733 10.7733L11.7133 11.7133M0.333344 6.99998H1.66668M12.3333 6.99998H13.6667M3.22668 10.7733L2.28668 11.7133M11.7133 2.28665L10.7733 3.22665M9.66668 6.99998C9.66668 8.47274 8.47277 9.66665 7.00001 9.66665C5.52725 9.66665 4.33334 8.47274 4.33334 6.99998C4.33334 5.52722 5.52725 4.33331 7.00001 4.33331C8.47277 4.33331 9.66668 5.52722 9.66668 6.99998Z"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
