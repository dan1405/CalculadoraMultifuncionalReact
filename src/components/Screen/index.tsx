import React from "react";
import { Form } from "react-bootstrap";

type Props = {
  value: string;
  value2?: string;
};

function Screen({ value, value2 }: Props) {
  return (
    <Form.Control
      as="textarea"
      value={value}
      readOnly
      className="text-end mb-3 mx-auto mt-2"
      style={{
        fontSize: "2rem",
        height: "3rem",
        width: "85%",
        borderColor: "gray",
      }}
    />
  );
}
export default Screen;
