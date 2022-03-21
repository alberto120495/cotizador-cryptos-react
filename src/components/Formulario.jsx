import { useEffect, useState } from "react";
import styled from "styled-components";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../Hooks/useSelectMonedas";
import Error from "./Error";

function Formulario({ setMonedas }) {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [criptomoneda, SelectCriptomonedas] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const response = await fetch(url);
      const result = await response.json();

      const arrayCriptos = result.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });

      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    setMonedas({
      moneda,
      criptomoneda,
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomonedas />
        <Input type="submit" value="cotizar" />
      </form>
    </>
  );
}

export default Formulario;

const Input = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.3s;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
  }
`;
