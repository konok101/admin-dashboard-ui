import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../Booking.json'
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';


export default function BasicTable() {
  return (
    <div>
      <Box sx={{marginLeft:"-60%",mt:3}}>
         <Typography variant="h3">  Booking summery</Typography>
         <Typography >Lorem ipsum dolor sit amet Lorem  incidunt facilis!</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, mt: 3 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow >
              <TableCell>No </TableCell>
              <TableCell >CLIENT NAME</TableCell>
              <TableCell > COMPANY ID</TableCell>
              <TableCell >BOOKING TO</TableCell>
              <TableCell >COST</TableCell>
              <TableCell align='center'>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.Id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Id}
                </TableCell>
                <TableCell >{row.clientName}</TableCell>
                <TableCell >{row.companyId}</TableCell>
                <TableCell >{row.bookingTo}</TableCell>
                <TableCell >${row.cost}</TableCell>
                <TableCell align='center'>{row.status == "pending" && <Button variant="contained">pending</Button>} {row.status == "cancel" && <Button variant="contained" sx={{ background: "red", color: "wheat" }}>Cancel</Button>}
                  {row.status == "confirm" && <Button variant="contained" sx={{ background: "green", color: "wheat" }}>confirm</Button>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}