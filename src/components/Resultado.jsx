import styled from "styled-components";

function Resultado({ cotizacion }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;
  return (
    <Contenedor>
      <Imagen
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt="Imagen Cripto"
      />
      <div>
        <Precio>
          El precio es de:
          <div></div>
          <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última Actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Imagen = styled.img`
  display: block;
  width: 150px;
`;
const Texto = styled.p`
  font-size: 17px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 22px;
  span {
    font-weight: 700;
  }
`;

export default Resultado;
