import clsx from "clsx";
import "./lucide-copy-plus.scss";

export default function LucideCopyPlus(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideCopyPlus_1_119", className)}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_1_117"
      >
        <path
          d="M9.00001 6.99998V11M7.00001 8.99998H11M1.66668 9.66665C0.933344 9.66665 0.333344 9.06665 0.333344 8.33331V1.66665C0.333344 0.933313 0.933344 0.333313 1.66668 0.333313H8.33334C9.06668 0.333313 9.66668 0.933313 9.66668 1.66665M5.66668 4.33331H12.3333C13.0697 4.33331 13.6667 4.93027 13.6667 5.66665V12.3333C13.6667 13.0697 13.0697 13.6666 12.3333 13.6666H5.66668C4.9303 13.6666 4.33334 13.0697 4.33334 12.3333V5.66665C4.33334 4.93027 4.9303 4.33331 5.66668 4.33331Z"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
