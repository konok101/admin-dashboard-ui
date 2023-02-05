import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../Booking.json'
import { Button, Container, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';


export default function BasicTable() {
  return (
    <Container maxWidth="lg" sx={{ mt: 9 }}>
      <Paper elevation={3}>
        <Box sx={{ p: 2.5 }}>
          <Typography variant="h5" fontWeight={'bold'}>  Booking summery</Typography>
          <Typography fontSize={12}>Lorem ipsum dolor sit amet Lorem  incidunt facilis!</Typography>
        </Box>
        <Divider></Divider>
        <TableContainer >
          <Table sx={{ minWidth: 650, mt: 3 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow >
                <TableCell sx={{ fontWeight: 'bolder', fontSize: '16px' }}>No </TableCell>
                <TableCell sx={{ fontWeight: 'bolder', fontSize: '16px' }}>CLIENT NAME</TableCell>
                <TableCell sx={{ fontWeight: 'bolder', fontSize: '16px' }}> COMPANY ID</TableCell>
                <TableCell sx={{ fontWeight: 'bolder', fontSize: '16px' }}>BOOKING TO</TableCell>
                <TableCell sx={{ fontWeight: 'bolder', fontSize: '16px' }}>COST</TableCell>
                <TableCell sx={{ fontWeight: 'bolder', fontSize: '16px' }} align='center'>STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell >{row.clientName}</TableCell>
                  <TableCell >{row.companyId}</TableCell>
                  <TableCell >{row.bookingTo}</TableCell>
                  <TableCell >${row.cost}</TableCell>
                  <TableCell align='center'>{row.status == "pending" && <Button variant="contained">pending</Button>} {row.status == "cancel" && <Button variant="contained" color='error'>Cancel</Button>}
                    {row.status == "confirm" && <Button variant="contained" color='success'>confirm</Button>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}