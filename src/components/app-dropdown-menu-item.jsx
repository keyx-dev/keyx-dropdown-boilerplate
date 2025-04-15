import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import "./app-dropdown-menu-item.scss";

export default function AppDropdownMenuItem(props) {
  const { icon, text = "Menu Item", hover, className, ...rest } = props;

  const Element = props.as || RadixDropdownMenu.Item;

  return (
    <Element
      {...rest}
      className={clsx("appDropdown_1_71", `hover-${hover}`, className)}
    >
      {icon && <Slot className="lucideCopy_1_67">{icon}</Slot>}
      {text && <div className="menuItem_1_70">{text}</div>}
    </Element>
  );
}
