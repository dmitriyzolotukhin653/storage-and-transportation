import React from "react";

import Input from "../Input";

import "./form.css";

const Form = () => {
  const [title, setTile] = React.useState("");

  return (
    <form className="form">
      <Input
        data-testid="input"
        placeholder="Write something..."
        value={title}
        onChange={({ target }) => setTile(target.value)}
      />
    </form>
  );
};

export default Form;
