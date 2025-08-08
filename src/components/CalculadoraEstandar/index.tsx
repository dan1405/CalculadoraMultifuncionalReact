import { Card, Button, Row, Col } from "react-bootstrap";
import Screen from "../Screen";
import "../../App.css";
import { useState } from "react";
import { evaluate } from "mathjs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function CalculadoraEstandar() {
  const [value, setValue] = useState<string>("0");

  const printNumber = (number: string) => {
    setValue((prev) => (prev === "0" ? number : prev + number));
    console.log(number);
  };
  const deleteLastCharacter = () => {
    setValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    console.log("Last character deleted");
  };
  const cleanScreen = () => {
    setValue("0");
    console.log("Screen cleaned");
  };
  const insertOperator = (operator: string) => {
    setValue((prev) => {
      const lastChar = prev.slice(-1);
      const isLastCharNumber = /\d/.test(lastChar); // \d verifica si es número

      return isLastCharNumber ? prev + operator : prev;
    });
    console.log(operator);
  };

  const calculateResult = () => {
    setValue(String(evaluate(value)));
    console.log("Result calculated", String(evaluate(value)));
  };

  //const [mode, setMode] = useState("Estándar");

  return (
    <div>
      {/* <h1 className="mt-5"></h1> */}
      <Card
        className="mx-auto h-100"
        style={{
          width: "35rem",
          minWidth: "35rem",
          backgroundColor: "#cbf5f0",
        }}
      >
        <h5 className="m-3">Calculadora Estándar</h5>
        <Screen value={value}></Screen>
        <Card>
          <Row>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("7")}
              >
                7
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("8")}
              >
                8
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("9")}
              >
                9
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => insertOperator("-")}
              >
                -
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => insertOperator("/")}
              >
                /
              </Button>
            </Col>
          </Row>

          <Row>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("4")}
              >
                4
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("5")}
              >
                5
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("6")}
              >
                6
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => insertOperator("+")}
              >
                +
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => insertOperator("*")}
              >
                *
              </Button>
            </Col>
          </Row>

          <Row>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("1")}
              >
                1
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("2")}
              >
                2
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("3")}
              >
                3
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => calculateResult()}
              >
                =
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => deleteLastCharacter()}
              >
                {"<-"}
              </Button>
            </Col>
          </Row>

          <Row>
            <Col sm={2} md={2}></Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => printNumber("0")}
              >
                0
              </Button>
            </Col>
            <Col sm={2} md={2}></Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => insertOperator(".")}
              >
                .
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => cleanScreen()}
              >
                C
              </Button>
            </Col>
          </Row>
        </Card>
      </Card>
    </div>
  );
}

export default CalculadoraEstandar;
