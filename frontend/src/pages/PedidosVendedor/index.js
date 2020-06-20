import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/Api";
import "./styles.css";
import TablePedido from "../../components/TablePedido";
import { MdReply } from "react-icons/md";

import Button from "../../components/Button";

export default function ProdutosVendedor() {
  const [produtos, setProdutos] = useState([]);
  const { idComercio } = useParams();

  useEffect(() => {
    (async function () {
      let filtro = "";

      if (idComercio) filtro = `?idComercio=${idComercio}`;

      const { data } = await api.get(`/produtos${filtro}`);
      setProdutos(data);
    })();
  }, [idComercio]);

  return (
    <>
      <div className="containerBtnTable">
        <div className="btnVendedorTable">
          <Button text={"VOLTAR"} typeButton={"secundaria"} Icon={MdReply} />
        </div>
      </div>

      <div className="containerTable">
        <table>
          <thead>
            <tr>
              <th>Nome do comprador</th>
              <th>Preço</th>
              <th>Status</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <TablePedido
                key={produto.id}
                idVendedor={produto.idComercio}
                titulo={produto.nome}
                url={produto.url}
                descricao={produto.descricao}
                produto={{ preco: produto.preco }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
