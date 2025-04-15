import React from "react";

import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import "./app-dropdown.scss";

export default function AppDropdown(props) {
  const { sameWidth = false, children, content, className, ...rest } = props;

  const Element = props.as || RadixDropdownMenu.Root;

  return (
    <Element {...rest}>
      <RadixDropdownMenu.Trigger asChild={true}>
        {React.Children.only(children)}
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          className="appDropdownContent_1_47"
          sideOffset={5}
          style={
            sameWidth
              ? {
                  width: "var(--radix-dropdown-menu-trigger-width)",
                }
              : {}
          }
        >
          {React.Children.only(content)}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </Element>
  );
}
