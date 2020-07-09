import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { listarComercio } from "../../services/comercio";

import PesquisaHome from "../../components/PesquisaHome";
import Card from "../../components/Card";

import "./styles.css";

const Pagination = ({ page, totalPages, setPage }) => {
  let linkPages = [];

  for (let i = 0; i < totalPages; i++) {
    linkPages.push(
      <li className={`${page === i ? "active" : "waves-effect"}`} key={i}>
        <span className="link" onClick={() => setPage(i)}>
          {i + 1}
        </span>
      </li>
    );
  }
  return (
    <ul className="pagination">
      <li
        className={` ${page === 0 ? "disabled" : "waves-effect"}`}
        onClick={() => {
          if (page === 0) return;
          setPage(page - 1);
        }}
      >
        <span>
          <MdChevronLeft size={32} />
        </span>
      </li>

      {linkPages}
      <li
        className={` ${page + 1 === totalPages ? "disabled" : "waves-effect"}`}
        onClick={() => {
          if (page + 1 === totalPages) return;
          setPage(page + 1);
        }}
      >
        <span>
          <MdChevronRight size={32} />
        </span>
      </li>
    </ul>
  );
};

function Main() {
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(0);
  const [comercios, setComercios] = useState([]);
  const [nomeFiltro, setNomeFiltro] = useState("");
  const { idCategoria } = useParams();

  const getComercio = useCallback(async () => {
    const data = await listarComercio(idCategoria, nomeFiltro, page);
    setTotalPages(data.totalPages);
    setPage(data.pageable.pageNumber);
    setComercios(data.content);
  }, [idCategoria, nomeFiltro, page]);

  useEffect(() => {
    getComercio();
  }, [getComercio]);

  return (
    <>
      <div className="container-main">
        <h1 className="titulo-main">
          Encontre um comercio proximo de você e ajude os comerciantes locais
        </h1>
        <cite className="referencia-foto">Photos on Unsplash</cite>
      </div>
      <PesquisaHome
        txtFiltro={nomeFiltro}
        handleChangeFilter={(e) => {
          setNomeFiltro(e.target.value);
          setPage(0);
        }}
      />
      <div className="container-comercios">
        {comercios.map((comercio) => {
          return (
            <Card
              key={comercio.id}
              titulo={comercio.nome}
              url={comercio.urlFoto}
              idComercio={comercio.id}
            />
          );
        })}
      </div>
      <div className="div-paginacao">
        <Pagination setPage={setPage} page={page} totalPages={totalPages} />
      </div>
    </>
  );
}

export default Main;
