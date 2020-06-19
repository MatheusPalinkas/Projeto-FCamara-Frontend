import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdReply } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";
import api from "../../services/Api";

import Button from "../../components/Button";

import "./styles.css";

function NovoProduto() {
  const [categoriaSelecionada, setcategoriaSelecionada] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const { idComercio } = useParams();

  useEffect(() => {
    (async function () {
      const dataCategorias = await api.get("/categorias");

      setCategorias(dataCategorias.data);

      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
    })();
  }, [idComercio, categoriaSelecionada]);

  return (
    <>
      <div className="container-cadastro-produto">
        <Button
          text="VOLTAR"
          tipo="Link"
          to={`/produto/vendedor/${idComercio}`}
          typeButton="secundaria"
          Icon={MdReply}
          tooltip="Voltar para pagina de produtos"
        />
      </div>
    </>
  );
}

export default NovoProduto;
