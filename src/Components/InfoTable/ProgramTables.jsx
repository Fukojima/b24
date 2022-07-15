import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Card } from '@mui/material';
import {ResponsiveContainer}  from "recharts";
const columns = [
  { id: 'id', label: 'Id', minWidth: 100 },
  {
    id: 'paciente',
    label: 'Paciente',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'cns',
    label: 'N° Carteira',
    minWidth: 100,
    align: 'right',
  },
  { id: 'programa', label: 'Programa', minWidth: 100 },
  {
    id: 'dtEntrada',
    label: 'Data de Entrada',
    minWidth: 100,
    align: 'right',
 
  }
];

function createData(id, paciente,cns, programa, dtEntrada) {

  return { id, paciente, cns, programa, dtEntrada};
}

const rows = [
  createData('11231', 'Katarina Silva',795267494960006 ,'Gestante', '12/05/2022'),
  createData('11228', 'João de Melo', 132073415730004, 'Hipertensão','12/05/2022'),
  createData('11227', 'Hugo Baptista', 176617830370002, 'Hipertensão','12/05/2022'),
  createData('11226', 'Julio Hend',228618567410018,"Diabetes" ,'12/05/2022'),
  createData('11220', 'Carlos Alberto', 269784215810004,'Melhor Idade' ,'12/05/2022'),
  createData('11219', 'Fernando Montebello', 180437099860004,'Obesidade' ,'12/05/2022'),
  createData('11220', 'Carlos Alberto', 269784215810004,'Melhor Idade' ,'12/05/2022'),
  createData('11219', 'Fernando Montebello', 180437099860004,'Obesidade' ,'12/05/2022'),
];

export default function InfoTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  return (
    <Card
    sx={{
      width: 700,
  
      marginLeft: "1rem",
      marginTop: "1rem",
      backgroundColor: "#F9F8F8",
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
    <Paper sx={{ overflow: 'hidden' }}>
      <TableContainer sx={{ height: 485,  color: 'white', backgroundColor:"#F9F8F8"}}>
        <Table  aria-label="sticky table">
          <TableHead stickyHeader style={{ backgroundColor: '#f2fcff',  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 7, }} >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align='center'
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" align='center' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align='center'>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </ResponsiveContainer>
    </Card>
  );
}