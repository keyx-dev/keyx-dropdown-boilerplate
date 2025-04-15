import clsx from "clsx";
import "./lucide-monitor.scss";

export default function LucideMonitor(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideMonitor_15_367", className)}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_366"
      >
        <path
          d="M4.33331 13H9.66665M6.99998 10.3333V13M1.66665 1H12.3333C13.0697 1 13.6666 1.59695 13.6666 2.33333V9C13.6666 9.73638 13.0697 10.3333 12.3333 10.3333H1.66665C0.930267 10.3333 0.333313 9.73638 0.333313 9V2.33333C0.333313 1.59695 0.930267 1 1.66665 1Z"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
