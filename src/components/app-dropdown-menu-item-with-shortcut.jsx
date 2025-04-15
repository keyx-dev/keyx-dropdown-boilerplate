import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import "./app-dropdown-menu-item-with-shortcut.scss";

export default function AppDropdownMenuItemWithShortcut(props) {
  const {
    shortcutText = "⌘E",
    text = "Menu Item",
    icon,
    hover,
    className,
    ...rest
  } = props;

  const Element = props.as || RadixDropdownMenu.Item;

  return (
    <Element
      {...rest}
      className={clsx("appDropdown_14_197", `hover-${hover}`, className)}
    >
      {icon && <Slot className="lucideCopy_14_198">{icon}</Slot>}
      {text && <div className="menuItem_14_199">{text}</div>}

      <div className="shortcut_14_207">
        {shortcutText && <div className="⌘e_14_208">{shortcutText}</div>}
      </div>
    </Element>
  );
}
