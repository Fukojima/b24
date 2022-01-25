import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {ResponsiveContainer}  from "recharts";
const columns = [
  { id: 'date', label: 'Data', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(date, code, population, size) {
  const density = population / size;
  return { date, code, population, size, density };
}

const rows = [
  createData('01/01/2022', 'IN', 1324171354, 3287263),
  createData('02/01/2022', 'CN', 1403500365, 9596961),
  createData('03/01/2022', 'IT', 60483973, 301340),
  createData('04/01/2022', 'US', 327167434, 9833520),
  createData('05/01/2022', 'CA', 37602103, 9984670),
  createData('06/01/2022', 'AU', 25475400, 7692024),
  createData('07/01/2022', 'DE', 83019200, 357578),
  createData('08/01/2022', 'IE', 4857000, 70273),
  createData('09/01/2022', 'MX', 126577691, 1972550),
  createData('10/01/2022', 'JP', 126317000, 377973),
  createData('11/01/2022', 'FR', 67022000, 640679),
  createData('12/01/2022', 'GB', 67545757, 242495),
  createData('13/01/2022', 'RU', 146793744, 17098246),
  createData('14/01/2022', 'NG', 200962417, 923768),
  createData('15/01/2022', 'BR', 210147125, 8515767),
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
    <ResponsiveContainer width="100%" height="100%">
    <Paper sx={{ overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
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
  );
}