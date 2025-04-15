import clsx from "clsx";
import "./lucide-text-quote.scss";

export default function LucideTextQuote(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideTextQuote_15_466", className)}>
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_442"
      >
        <path
          d="M10.3333 1H1M13 5H4.33333M13 9H4.33333M1 5V9"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
