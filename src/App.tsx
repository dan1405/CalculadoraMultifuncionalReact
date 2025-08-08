//React
import { useState } from "react";

//Calculadoras
import CalculadoraEstandar from "./components/CalculadoraEstandar";
import CalculadoraCientifica from "./components/CalculadoraCientifica";
import CalculadoraMoneda from "./components/CalculadoraMoneda";
import CalculadoraPesoMasa from "./components/CalculadoraPesoMasa";
import CalculadoraLongitud from "./components/CalculadoraLongitud";

//Bootstrap
import { Card, Button, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const [mode, setMode] = useState<
    "estandar" | "cientifica" | "moneda" | "peso-masa" | "longitud"
  >("estandar");

  const changeSelection = (selectedMode: string) => {
    switch (selectedMode) {
      case "estandar":
        setMode("estandar");
        break;
      case "cientifica":
        setMode("cientifica");
        break;
      case "moneda":
        setMode("moneda");
        break;
      /* case "peso-masa":
        setMode("peso-masa");
        break;
      case "longitud":
        setMode("longitud");
        break; */
      default:
        setMode("estandar");
    }
  };

  let calculatorComponent;
  switch (mode) {
    case "estandar":
      calculatorComponent = <CalculadoraEstandar />;
      break;
    case "cientifica":
      calculatorComponent = <CalculadoraCientifica />;
      break;
    case "moneda":
      calculatorComponent = <CalculadoraMoneda />;
      break;
    /* case "peso-masa":
      calculatorComponent = <CalculadoraPesoMasa />;
      break;
    case "longitud":
      calculatorComponent = <CalculadoraLongitud />;
      break; */
    default:
      calculatorComponent = <CalculadoraEstandar />;
  }

  /*  const changeMode = () => {
    setMode((prev) => (prev === "estandar" ? "cientifica" : "estandar"));
  }; */

  return (
    <>
      <Card
        className="mx-auto h-100"
        style={{
          width: "55rem",
          minWidth: "35rem",
        }}
      >
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Cambio de modo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeSelection("estandar")}>
                Estándar
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeSelection("cientifica")}>
                Científica
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeSelection("moneda")}>
                Moneda
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {calculatorComponent}
        </Col>
      </Card>
    </>
  );
}

export default App;
