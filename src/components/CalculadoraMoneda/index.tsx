import { Card, Button, Row, Col } from "react-bootstrap";
import Screen from "../Screen";
import "../../App.css";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";

function CalculadoraMoneda() {
  const [value, setValue] = useState<string>("0");
  const [value2, setValue2] = useState<string>("0");

  const [mode1, setMode1] = useState("MXN");
  const [mode2, setMode2] = useState("USD");

  useEffect(() => {
    convertCurrency();
  }, [value, mode1, mode2]);

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
    setValue2("0");
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

  const changeCurrency1 = (currency: string) => {
    switch (currency) {
      case "MXN":
        setMode1("MXN");
        break;
      case "USD":
        setMode1("USD");
        break;
      case "EUR":
        setMode1("EUR");
        break;
      default:
        setMode1("MXN");
    }
  };

  const changeCurrency2 = (currency: string) => {
    switch (currency) {
      case "MXN":
        setMode2("MXN");
        break;
      case "USD":
        setMode2("USD");
        break;
      case "EUR":
        setMode2("EUR");
        break;
      default:
        setMode2("MXN");
    }
  };

  const convertCurrency = () => {
    const amount = Number(value);
    if (mode1 === mode2) {
      setValue2(value);
    }
    if (mode1 === "MXN" && mode2 === "USD") {
      setValue2((amount * 0.055).toString());
    }
    if (mode1 === "USD" && mode2 === "MXN") {
      setValue2((amount * 18.2).toString());
    }
    if (mode1 === "MXN" && mode2 === "EUR") {
      setValue2((amount * 0.052).toString());
    }
    if (mode1 === "EUR" && mode2 === "MXN") {
      setValue2((amount * 19.1).toString());
    }
    if (mode1 === "USD" && mode2 === "EUR") {
      setValue2((amount * 0.95).toString());
    }
    if (mode1 === "EUR" && mode2 === "USD") {
      setValue2((amount * 1.05).toString());
    }
  };

  const switchMode = () => {
    setMode1(mode2);
    setMode2(mode1);
    convertCurrency();
  };

  return (
    <div>
      <Card
        className="mx-auto h-100"
        style={{
          width: "40rem",
          minWidth: "35rem",
          backgroundColor: "#eff162ff",
        }}
      >
        <h5 className="m-3">Calculadora Moneda</h5>

        <Card>
          <Row>
            <Col>
              <Card
                style={{
                  width: "23rem",
                }}
              >
                <Row
                  style={{
                    width: "30rem",
                  }}
                >
                  <Col sm={3} md={3}></Col>
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => cleanScreen()}
                    >
                      C
                    </Button>
                  </Col>
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => deleteLastCharacter()}
                    >
                      {"<-"}
                    </Button>
                  </Col>
                </Row>
                <Row
                  style={{
                    width: "30rem",
                  }}
                >
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("7")}
                    >
                      7
                    </Button>
                  </Col>
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("8")}
                    >
                      8
                    </Button>
                  </Col>
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("9")}
                    >
                      9
                    </Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    width: "30rem",
                  }}
                >
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("4")}
                    >
                      4
                    </Button>
                  </Col>
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("5")}
                    >
                      5
                    </Button>
                  </Col>
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("6")}
                    >
                      6
                    </Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    width: "30rem",
                  }}
                >
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("1")}
                    >
                      1
                    </Button>
                  </Col>
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("2")}
                    >
                      2
                    </Button>
                  </Col>
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("3")}
                    >
                      3
                    </Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    width: "30rem",
                  }}
                >
                  <Col sm={3} md={3}></Col>
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => printNumber("0")}
                    >
                      0
                    </Button>
                  </Col>
                  {/* <Col sm={3} md={3}></Col> */}
                  <Col sm={3} md={3}>
                    <Button
                      className="numberButton m-2"
                      variant="light"
                      onClick={() => insertOperator(".")}
                    >
                      .
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <div>
                <DropdownButton
                  as={ButtonGroup}
                  key="right"
                  id="dropdown-button-drop-right"
                  //drop="end"
                  variant="light"
                  title={mode1}
                  className="mt-2"
                >
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => changeCurrency1("USD")}
                  >
                    USD
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    onClick={() => changeCurrency1("EUR")}
                  >
                    EUR
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={() => changeCurrency1("MXN")}
                  >
                    MXN
                  </Dropdown.Item>
                </DropdownButton>
                <Screen value={value}></Screen>
              </div>
              <div className="text-center">
                <Button
                  variant="light"
                  className="m-2"
                  onClick={() => switchMode()}
                >
                  <FontAwesomeIcon icon={faUpDown} />
                </Button>
              </div>
              <div>
                <DropdownButton
                  as={ButtonGroup}
                  key="right"
                  id="dropdown-button-drop-right"
                  //drop="end"
                  variant="light"
                  title={mode2}
                  className="mt-2"
                >
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => changeCurrency2("USD")}
                  >
                    USD
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    onClick={() => changeCurrency2("EUR")}
                  >
                    EUR
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={() => changeCurrency2("MXN")}
                  >
                    MXN
                  </Dropdown.Item>
                </DropdownButton>
                <Screen value={value2}></Screen>
              </div>
            </Col>
          </Row>
          {/* <span className="p-2">Actualizado Agosto 2025</span> */}
        </Card>
      </Card>
    </div>
  );
}

export default CalculadoraMoneda;
