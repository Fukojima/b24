import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import format from "date-fns/format";
import { ResponsiveContainer } from "recharts";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiTableHead from "@material-ui/core/TableHead";
import { blue } from "@mui/material/colors";
const columns = [

  {
    id: "nmPatient",
    label: "Paciente",
    minWidth: 100,
    align: "right",
  },
  {
    id: "service",
    label: "Serviço",
    minWidth: 100,
    align: "right",
  },
  { id: "tpAttendance", label: "Atendimento", minWidth: 100 },
  // {
  //   id: `nmEmployee`,
  //   label: "Prestador",
  //   minWidth: 100,
  //   align: "right",
  // },
  {
    id: "dtAttendance",
    label: "Data Atendimento",
    minWidth: 100,
    align: "right",
  },
];





export default function InfoTable({rows}) {
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
              {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                       console.log("value", value[-1])
                        return (
                          <TableCell key={column.id} align="center">
                                   {value.includes("2022")
                              ?  format(new Date(value), "dd/MM/yyyy")
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
