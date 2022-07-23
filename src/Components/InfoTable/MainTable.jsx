import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ResponsiveContainer } from "recharts";

import { Typography, Card, Grid, Box } from "@mui/material";
const columns = [
  ,
  {
    id: "paciente",
    label: "Paciente",
    minWidth: 100,
    align: "right",
  },
  {
    id: "carteira",
    label: "Carteira",
    minWidth: 100,
    align: "right",
  },
  {
    id: "programa",
    label: "Elegibilidade",
    minWidth: 100,
    align: "right",
  },
];

function createData(paciente, carteira, programa) {
  return { paciente, carteira, programa };
}

const rows = [
  createData("Katarina Silva", 217361366170002, "Obesidade"),
  createData("Daryane Barbosa", 217361366170002, "Gestante/Hipertensão"),
  createData("Hugo Baptista", 795267494960006, "Diabetes"),
  createData("Julio Hend", 111750518620005, "Diabetes"),
  createData("Carlos Alberto", 79532389, "Hipertensão"),
  createData("Fernando Montebello", 52674, "Melhor Idade"),
  createData("Hugo Baptista", 94960006, "Melhor Idade"),
  createData("Julio Hend", 79526749, "Obesidade"),
  createData("Carlos Alberto", 110292, "Hipertensão"),
  createData("Fernando Montebello", 600089, "Melhor Idade"),
  // createData('07/01/2022', 'DE', 83019200, 357578),
  // createData('08/01/2022', 'IE', 4857000, 70273),
  // createData('09/01/2022', 'MX', 126577691, 1972550),
  // createData('10/01/2022', 'JP', 126310000, 377973),
  // createData('11/01/2022', 'FR', 67022000, 640679),
  // createData('12/01/2022', 'GB', 67545757, 242495),
  // createData('13/01/2022', 'RU', 146793744, 10098246),
  // createData('14/01/2022', 'NG', 200962417, 923768),
  // createData('15/01/2022', 'BR', 210147125, 8515767),
];

export default function MainTable() {
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
    <Box
      sx={{
        marginTop: "10px",
      }}
    >
      <Paper sx={{ overflow: "hidden", boxShadow: "none" }}>
        <TableContainer
          sx={{ height: 485, color: "white", backgroundColor: "#F9F8F8" }}
        >
          <Table stickyHeader aria-label="customized table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{ backgroundColor: "#6462E8", color: "white" }}
                    key={column.id}
                    align="center"
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
                    <TableRow
                      hover
                      role="checkbox"
                      align="center"
                      tabIndex={-1}
                      sx={{
                        backgroundColor: "white",
                      }}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align="center">
                            {column.format && typeof value === "number"
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
    </Box>
  );
}
