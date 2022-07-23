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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiTableHead from "@material-ui/core/TableHead";
import { blue } from "@mui/material/colors";
const columns = [
  { id: "id", label: "Id", minWidth: 100 },
  {
    id: "paciente",
    label: "Paciente",
    minWidth: 100,
    align: "right",
  },
  {
    id: "serviço",
    label: "Serviço",
    minWidth: 100,
    align: "right",
  },
  { id: "tipoAtendimento", label: "Atendimento", minWidth: 100 },
  {
    id: "prestador",
    label: "Prestador",
    minWidth: 100,
    align: "right",
  },
  {
    id: "dtAtendimento",
    label: "Data",
    minWidth: 100,
    align: "right",
  },
];

function createData(
  id,
  paciente,
  serviço,
  tipoAtendimento,
  prestador,
  dtAtendimento
) {
  return { id, paciente, serviço, tipoAtendimento, prestador, dtAtendimento };
}

const rows = [
  createData(
    "11231",
    "Katarina Silva",
    "Clinica Geral",
    "Urgência",
    "Ântonio Borger - Clinico Geral",
    "02/07/2022"
  ),
  createData(
    "11228",
    "João de Melo",
    "Neurologia",
    "Ambulatório",
    "Marta Gerdes - Neurocirurgiã",
    "04/07/2022"
  ),
  createData(
    "11227",
    "Hugo Baptista",
    "Clinica Geral",
    "Ambulatório",
    "Ântonio Borger - Clinico Geral",
    "12/07/2022"
  ),
  createData(
    "11226",
    "Julio Hend",
    "Angiologia",
    "Ambulatório",
    "Ântonio Borger - Clinico Geral",
    "12/07/2022"
  ),
  createData(
    "11220",
    "Carlos Alberto",
    "Clinia Geral",
    "Ambulatório",
    "Ântonio Borger - Clinico Geral",
    "12/07/2022"
  ),
  createData(
    "11219",
    "Fernando Montebello",
    "Cirurgia Geral",
    "Internação",
    "Ântonio Borger - Clinico Geral",
    "15/07/2022"
  ),
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
  const TableHeader = withStyles((theme) => ({
    root: {
      backgroundColor: "orange",
    },
  }))(MuiTableHead);

  return (
    <ResponsiveContainer>
      <Paper sx={{ overflow: "hidden", boxShadow: "none" }}>
        <TableContainer
          sx={{
            height: 485,
            color: "white",
            backgroundColor: "#F9F8F8",
            boxShadow: "none",
          }}
        >
          <Table stickyHeader aria-label="customized table" sx={{}}>
            <TableHeader style={{ backgroundColor: "#6452E8" }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      align="center"
                      sx={{
                        backgroundColor: "white",
                      }}
                      tabIndex={-1}
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
          sx={{
            boxShadow: "none",
          }}
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
  );
}
