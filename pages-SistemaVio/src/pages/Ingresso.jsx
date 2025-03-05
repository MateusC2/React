import { useState, useEffect } from "react";
// Imports para criação de tabela
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
// TableHead é onde colocamos os titulos
import TableHead from "@mui/material/TableHead";
// TableBody é onde colocamos o conteúdo
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "../axios/axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Ingresso() {
  const [ingresso, setIngresso] = useState([]);

  async function getAllIngressos() {
    //chamada da api
    await api.getAllIngressos().then(
      (response) => {
        console.log(response.data.ingresso);
        setIngresso(response.data.ingresso);
      },
      (error) => {
        console.log("Erro ", error);
      }
    );
  }

  const listIngresso = ingresso.map((ingresso) => {
    return (
      <TableRow key={ingresso.id_ingresso}>
        <TableCell align="center">{ingresso.preco}</TableCell>
        <TableCell align="center">{ingresso.tipo}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    //aq devemos criar ou chamar uma função
    getAllIngressos();
  }, []);

  return (
    <div>
      <h5>Lista de Ingressos</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "blue", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listIngresso}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Ingresso;
