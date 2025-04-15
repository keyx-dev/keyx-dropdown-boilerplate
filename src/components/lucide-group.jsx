import clsx from "clsx";
import "./lucide-group.scss";

export default function LucideGroup(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideGroup_1_120", className)}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_1_109"
      >
        <path
          d="M1 3.66667V2.33333C1 1.6 1.6 1 2.33333 1H3.66667M10.3333 1H11.6667C12.4 1 13 1.6 13 2.33333V3.66667M13 10.3333V11.6667C13 12.4 12.4 13 11.6667 13H10.3333M3.66667 13H2.33333C1.6 13 1 12.4 1 11.6667V10.3333M4.33333 3.66667H7.66667C8.03486 3.66667 8.33333 3.96514 8.33333 4.33333V6.33333C8.33333 6.70152 8.03486 7 7.66667 7H4.33333C3.96514 7 3.66667 6.70152 3.66667 6.33333V4.33333C3.66667 3.96514 3.96514 3.66667 4.33333 3.66667ZM6.33333 7H9.66667C10.0349 7 10.3333 7.29848 10.3333 7.66667V9.66667C10.3333 10.0349 10.0349 10.3333 9.66667 10.3333H6.33333C5.96514 10.3333 5.66667 10.0349 5.66667 9.66667V7.66667C5.66667 7.29848 5.96514 7 6.33333 7Z"
          stroke="black"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
