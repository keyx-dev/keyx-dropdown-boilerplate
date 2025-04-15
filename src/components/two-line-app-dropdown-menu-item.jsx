import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import "./two-line-app-dropdown-menu-item.scss";

export default function TwoLineAppDropdownMenuItem(props) {
  const {
    icon,
    description = "Big section heading",
    label = "Heading 1",
    hover,
    className,
    ...rest
  } = props;

  const Element = props.as || RadixDropdownMenu.Item;

  return (
    <Element
      {...rest}
      className={clsx("twoLine_15_418", `hover-${hover}`, className)}
    >
      <div className="frame85_15_426">
        {icon && <Slot className="lucideHeading1_15_419">{icon}</Slot>}
      </div>

      <div className="frame86_15_427">
        {label && <div className="heading1_15_420">{label}</div>}
        {description && (
          <div className="bigSectionHeading_15_428">{description}</div>
        )}
      </div>
    </Element>
  );
}
