import { Form } from "react-bootstrap";

type Props = {
  value: string;
};

function Screen({ value }: Props) {
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
