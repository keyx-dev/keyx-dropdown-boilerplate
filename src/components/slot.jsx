import clsx from "clsx";
import "./slot.scss";

export default function Slot(props) {
  const { slotIdentifier = "children", className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("slot_1_40", className)}>
      <div className="frame58_1_41">
        {slotIdentifier && (
          <div className="children_1_42">{slotIdentifier}</div>
        )}
      </div>
    </Element>
  );
}
