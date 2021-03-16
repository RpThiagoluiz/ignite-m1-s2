import { useEffect } from "react";
import { Container } from "./styles";

export const TransationTable = () => {
  useEffect(() => {
    fetch("http://localhost:3000/api/transaction")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposite">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.200</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
          <tr>
            <td>Hamburger</td>
            <td className="withdraw">- R$ 120</td>
            <td>Comida</td>
            <td>30/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
