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
import api from "./axios/axios";

function App() {
  const [events, setEventos] = useState([]);

  async function getEventos() {
    //chamada da api
    await api.getEventos().then((response) => {
      console.log(response.data.events)
      setEventos(response.data.events)
    },(error)=>{
      console.log("Erro ",error)
    });
  }

  const listEventos = events.map((event)=>{
    return(
      <TableRow key={event.id_evento}>
        <TableCell align="center">{event.nome}</TableCell>
        <TableCell align="center">{event.descricao}</TableCell>
        <TableCell align="center">{event.data_hora}</TableCell>
        <TableCell align="center">{event.local}</TableCell>
      </TableRow>
    )
  })

  useEffect(() => {
    //aq devemos criar ou chamar uma função
    getEventos();
  }, []);

  return (
    <div>
      <h5>Lista de usuários</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "blue", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Descrição</TableCell>
              <TableCell align="center">Data e Hora</TableCell>
              <TableCell align="center">Local</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listEventos}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


export default App;