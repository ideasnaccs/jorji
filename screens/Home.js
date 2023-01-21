import React from "react";

export default function Home() {
  const [checked, setChecked] = React.useState(false);

  function onCheckedChange(isChecked) {
    setChecked(isChecked);
  }

  return (
    <>
      <Toggle checked={checked} onChange={onCheckedChange}>
        lol
      </Toggle>
      <Text style={{ color: "blue" }}>lmao</Text>
    </>
  );
}
