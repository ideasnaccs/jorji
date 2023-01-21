import React from "react";
import { Toggle } from "@ui-kitten/components";

export default function Home() {
  const [checked, setChecked] = React.useState(false);

  function onCheckedChange(isChecked) {
    setChecked(isChecked);
  }

  return (
    <Toggle checked={checked} onChange={onCheckedChange}>
      {`lol`}
    </Toggle>
  );
}