import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import format from "date-fns/format";
import TableRow from "@mui/material/TableRow";
import MuiTableHead from "@material-ui/core/TableHead";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ResponsiveContainer } from "recharts";
import { Grid, Card } from "@mui/material";
import { makeStyles, withStyles } from "@material-ui/core/styles";
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        patientId: "11091700",
        value: 3,
        admeasurement: "IMC",
      },
      {
        date: "2020-01-05",
        patientId: "11091700",
        value: 3,
        admeasurement: "IMC",
      },
      {
        date: "2020-01-05",
        patientId: "11091700",
        value: 3,
        admeasurement: "IMC",
      },
    ],
  };
}
const useStyles = makeStyles((theme) => ({
  tableHead: {
    borderBottomStyle: "solid",
    borderBottomColor: "blue",
  },
  stickyHeader: {
    borderCollapse: "collapse",
  },
}));
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row?.patientName}
        </TableCell>
        <TableCell align="center">{row?.cardId}</TableCell>
        <TableCell align="center">{row?.motherName}</TableCell>
        <TableCell align="center">
          {" "}
          {format(new Date(row.birthDate), "dd/MM/yyyy")}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Últimas aferições
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Código Atendimento</TableCell>
                    <TableCell align="center">Aferição</TableCell>
                    <TableCell align="center">Resultado</TableCell>
                    <TableCell align="center">Data Coleta</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row?.admeasurements?.map((item) =>
                    item.length > 0 ? (
                      item.slice(0, 3).map((historyRow) => (
                        <TableRow key={historyRow?.patientId}>
                          <TableCell align="center" component="th" scope="row">
                            {historyRow?.attendanceId}
                          </TableCell>
                          <TableCell align="center">
                            {historyRow?.vitalDescribe}
                          </TableCell>
                          <TableCell align="center">
                            {historyRow?.value}
                          </TableCell>
                          <TableCell align="center">
                            {format(
                              new Date(historyRow.collectionDate),
                              "dd/MM/yyyy' \n'HH:mm"
                            )}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <>
                        <TableRow>
                          <TableCell style={{ color: "red" }} align="center">
                            Não há aferições registradas
                          </TableCell>
                        </TableRow>
                      </>
                    )
                  )}
                </TableBody>

                <TableHead>
                  <Typography variant="h6" gutterBottom component="div">
                    Últimos exames
                  </Typography>
                  <TableRow>
                    <TableCell align="center">Código Atendimento</TableCell>
                    <TableCell align="center">Exame</TableCell>
                    <TableCell align="center">Resultado</TableCell>
                    <TableCell align="center">Data Exame</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row?.exams?.map((item) =>
                    item.length > 0 ? (
                      item.slice(0, 3).map((historyRow) => (
                        <TableRow key={historyRow?.attendanceId}>
                          <TableCell align="center" component="th" scope="row">
                            {historyRow?.attendanceId}
                          </TableCell>
                          <TableCell align="center">
                            {historyRow?.examName}
                          </TableCell>
                          <TableCell align="center">
                            {historyRow?.value}
                          </TableCell>
                          <TableCell align="center">
                            {format(
                              new Date(historyRow.examDate),
                              "dd/MM/yyyy' \n'HH:mm"
                            )}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <>
                        <TableRow>
                          <TableCell style={{ color: "red" }} align="center">
                            Não há aferições registradas
                          </TableCell>
                        </TableRow>
                      </>
                    )
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "Katarina Silva",
    795267494960006,
    "Fernanda Souza Rocha",
    "I",
    "12/06/2020"
  ),
  createData(
    "João de Melo",
    795267494960006,
    "Emily Castro Santos",
    "I",
    "12/06/2020"
  ),
  createData(
    "Hugo Baptista",
    795267494960006,
    "Isabelle Silva Pereira",
    "I",
    "12/06/2020"
  ),
  createData(
    "Julio Hend",
    795267494960006,
    "Bruna Sousa Azevedo",
    "I",
    "12/06/2020"
  ),
  createData(
    "Carlos Alberto",
    795267494960006,
    "Anna Barbosa Barros",
    "I",
    "12/06/2020"
  ),
  createData(
    "Fernando Montebello",
    795267494960006,
    "Eduarda Carvalho Costa",
    "I",
    "12/06/2020"
  ),
  createData(
    "Hugo Baptista",
    795267494960006,
    "Gabrielly Sousa Barros",
    "I",
    "12/06/2020"
  ),
  createData(
    "Julio Hend",
    795267494960006,
    "Nicole Pereira Sousa",
    "I",
    "12/06/2020"
  ),
  createData(
    "Carlos Alberto",
    795267494960006,
    "Laura Rocha Barros",
    "I",
    "12/06/2020"
  ),
  createData(
    "Fernando Montebello",
    795267494960006,
    "Rebeca Pereira Fernandes",
    "I",
    "12/06/2020"
  ),
];

export default function ProgramsTables({ data }) {
  console.log("data", data);
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
    <ResponsiveContainer>
      <Paper sx={{ overflow: "hidden", boxShadow: "none" }}>
        <TableContainer
          sx={{
            height: 485,
            width: "100%",
            color: "white",
          }}
        >
          <Table
            stickyHeader
            aria-label="customized table"
            sx={{
              boxShadow: "none",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ backgroundColor: "#6462E8", color: "white" }}
                />
                <TableCell
                  sx={{ backgroundColor: "#6462E8", color: "white" }}
                  align="center"
                >
                  Paciente{" "}
                </TableCell>
                <TableCell
                  sx={{ backgroundColor: "#6462E8", color: "white" }}
                  align="center"
                >
                  Carteira
                </TableCell>
                <TableCell
                  sx={{ backgroundColor: "#6462E8", color: "white" }}
                  align="center"
                >
                  Nome Mãe
                </TableCell>
                <TableCell
                  sx={{ backgroundColor: "#6462E8", color: "white" }}
                  align="center"
                >
                  Data Nascimento
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <Row key={row.patientName} row={row} />
              ))}
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
  );
}
