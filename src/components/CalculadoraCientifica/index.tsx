import { Card, Button, Row, Col } from "react-bootstrap";
import Screen from "../Screen";
import "../../App.css";
import { useState } from "react";
import { evaluate, log, round, e, factorial } from "mathjs";
import { useRef } from "react";

function CalculadoraCientifica() {
  const [value, setValue] = useState<string>("0");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const flag = useRef(false);

  const printNumber = (number: string) => {
    if (
      value === "0" ||
      value === "Entrada no válida" ||
      value === "ln(0)=-Infinity" ||
      flag.current
    ) {
      setValue(number);
      if (flag.current) flag.current = false;
      setIsDisabled(false);
    } else {
      setValue((prev) => prev + number);
    }
    console.log("flag: ", flag.current);
  };

  const deleteLastCharacter = () => {
    setValue((prev) => {
      if (prev.includes("=")) {
        prev = prev.split("=")[1];
      }
      return prev.length > 1 ? prev.slice(0, -1) : "0";
    });
    console.log("Last character deleted");
  };

  const cleanScreen = () => {
    setValue("0");
    setIsDisabled(false);
    console.log("Screen cleaned");
  };

  const insertOperator = (operator: string) => {
    if (value.startsWith("0") && (operator === "(" || operator === ")")) {
      setValue(operator);
      console.log("Operador insertado ( )");
      return;
    }

    const lastChar = value.slice(-1);
    const isLastCharOperator = /[+\-*/^()]/.test(lastChar); // Verifica si el último carácter es un operador
    const isLastCharNumber = /\d/.test(lastChar); // \d verifica si es número

    if (isLastCharOperator) {
      setValue((prev) => prev + operator);
    } else {
      setValue((prev) => (isLastCharNumber ? prev + operator : prev));
    }
    flag.current = false;
    /* setValue((prev) => {
      const lastChar = prev.slice(-1);
      const isLastCharNumber = /\d/.test(lastChar); // \d verifica si es número

      return isLastCharNumber ? prev + operator : prev;
    });
    flag.current = false;
    console.log("flag: ", flag.current);
    if (value.includes("=")) {
      value.split("=")[1];
      console.log("Valor: ", value.split("=")[1]);
    } */
  };

  const cleanedValue = value.split("=")[1];

  const calculateResult = () => {
    setValue(String(evaluate(cleanedValue || value)));
    console.log("Result calculated", String(evaluate(cleanedValue || value)));
    flag.current = true;
    console.log("flag: ", flag.current);
  };

  const squareRoot = () => {
    setValue((prev) => {
      const result = Math.sqrt(Number(prev));
      return isNaN(result)
        ? "Entrada no válida"
        : "√" + prev + "=" + "" + String(result);
    });
    console.log("Square root calculated");
  };

  const commonLogarithm = () => {
    const result = log(Number(value), 10);
    if (
      result === -Infinity ||
      result === Infinity ||
      value === "ln(NaN)=NaN"
    ) {
      setValue("Entrada no válida");
      setIsDisabled(true);
      console.log("Invalid input for logarithm");
    } else if (value.includes("=")) {
      const subresult = log(Number(value.split("=")[1]), 10);
      setValue(
        (prev) => "log(" + prev.split("=")[1] + ")=" + String(subresult)
      );
      if (subresult === -Infinity || subresult === Infinity || isNaN(subresult))
        setIsDisabled(true);
      console.log("Valor: ", value.split("=")[1]);
    } else {
      setValue((prev) => "log(" + prev + ")=" + String(result));
      console.log("Common logarithm calculated");
    }
    flag.current = true;
  };

  const naturalLogarithm = () => {
    const result = log(Number(value));
    if (
      result === -Infinity ||
      result === Infinity ||
      value === "ln(NaN)=NaN"
    ) {
      setValue("Entrada no válida");
      setIsDisabled(true);
    }
    if (value.includes("=")) {
      const subresult = log(Number(value.split("=")[1]));
      setValue((prev) => "ln(" + prev.split("=")[1] + ")=" + String(subresult));
      if (subresult === -Infinity || subresult === Infinity || isNaN(subresult))
        setIsDisabled(true);
      console.log("Valor: ", value.split("=")[1]);
    } else {
      setValue((prev) => "ln(" + prev + ")=" + String(result));
      console.log("Natural logarithm calculated");
    }
    flag.current = true;
  };

  const factorialButton = () => {
    const result = factorial(Number(value));
    if (result === -Infinity || value === "ln(NaN)=NaN") {
      setValue("Entrada no válida");
      setIsDisabled(true);
    }
    if (value.includes("=")) {
      const subresult = factorial(Number(value.split("=")[1]));
      setValue(
        (prev) => "fact(" + prev.split("=")[1] + ")=" + String(subresult)
      );
      if (subresult === -Infinity || subresult === Infinity || isNaN(subresult))
        setIsDisabled(true);
      console.log("Valor: ", value.split("=")[1]);
    } else {
      setValue((prev) => "fact(" + prev + ")=" + String(result));
      console.log("Factorial calculated");
    }
    flag.current = true;
  };

  return (
    <div>
      <Card
        className="mx-auto h-100"
        style={{
          width: "55rem",
          //minWidth: "35rem",
          backgroundColor: "#5cbd24ff",
        }}
      >
        <h5 className="m-3">Calculadora Científica</h5>
        <Screen value={value}></Screen>
        <Card>
          <Row>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => naturalLogarithm()}
                disabled={isDisabled}
              >
                ln
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                disabled={isDisabled}
                onClick={() => commonLogarithm()}
              >
                log
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                disabled={isDisabled}
                onClick={() => factorialButton()}
              >
                n!
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                disabled={isDisabled}
                onClick={() => insertOperator("(")}
              >
                {"("}
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                disabled={isDisabled}
                onClick={() => insertOperator(")")}
              >
                {")"}
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => setValue(round(e, 15).toString())}
                disabled={isDisabled}
              >
                e
              </Button>
            </Col>
          </Row>

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
                disabled={isDisabled}
              >
                -
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => insertOperator("/")}
                disabled={isDisabled}
              >
                /
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => squareRoot()}
                disabled={isDisabled}
              >
                √
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
                disabled={isDisabled}
              >
                +
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => insertOperator("*")}
                disabled={isDisabled}
              >
                *
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                disabled={isDisabled}
                onClick={() => insertOperator("^")}
              >
                ^
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
                disabled={isDisabled}
              >
                =
              </Button>
            </Col>
            <Col sm={2} md={2}>
              <Button
                className="numberButton m-2"
                variant="light"
                onClick={() => deleteLastCharacter()}
                disabled={isDisabled}
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
                disabled={isDisabled}
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

export default CalculadoraCientifica;
