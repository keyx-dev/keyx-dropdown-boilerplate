import clsx from "clsx";
import "./lucide-flask-conical.scss";

export default function LucideFlaskConical(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideFlaskConical_15_280", className)}>
      <svg
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_15_267"
      >
        <path
          d="M7.33333 0.333313V4.33331C7.33323 4.55697 7.3894 4.77706 7.49666 4.97331L11.17 11.6933C11.2811 11.8964 11.3374 12.1249 11.3334 12.3563C11.3294 12.5878 11.2653 12.8142 11.1472 13.0133C11.0291 13.2124 10.8613 13.3774 10.6601 13.4919C10.459 13.6065 10.2315 13.6667 9.99999 13.6666H1.99999C1.76851 13.6667 1.541 13.6065 1.33985 13.4919C1.1387 13.3774 0.970843 13.2124 0.852787 13.0133C0.734731 12.8142 0.670547 12.5878 0.66655 12.3563C0.662554 12.1249 0.718882 11.8964 0.829993 11.6933L4.50333 4.97331C4.61059 4.77706 4.66675 4.55697 4.66666 4.33331V0.333313M2.30199 8.99998H9.69799M3.66666 0.333313H8.33333"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
