import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Card, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import data from '../CompanyDeatils.json'
import { Icon } from '@iconify/react';

export default function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4} >
                    <Box >
                        <Divider />
                        <Typography variant="h6">
                            Top Company Conversion rate</Typography>
                        <Typography sx={{ ml: -5 }}>
                            Based an their performance
                        </Typography>
                        <Divider />
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="a dense table">
                                <TableBody
                                >
                                    {data?.map((row) => (
                                        <TableRow
                                            key={row.thumbnailUrl}
                                            sx={{ border: 0 }}
                                        >
                                            <TableCell sx={{ border: 0 }}>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={row?.thumbnailUrl}
                                                    sx={{ width: 56, height: 56 }}
                                                />
                                            </TableCell>
                                            <TableCell sx={{ border: 0 }}>

                                                ID: {row.id} <br />
                                                {row?.name}
                                            </TableCell>


                                            <TableCell sx={{ border: 0 }}>
                                                <Typography sx={{ color: 'green' }}><small>{row?.average}</small>%</Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>


                <Grid item xs={2} sm={4} md={4} >
                    <Box >
                        <Divider />
                        <Typography variant="h6">
                            Activity Account </Typography>
                        <Typography >
                            Activate the account                        </Typography>
                        <Divider />
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="a dense table">
                                <TableBody
                                >
                                    {data?.map((row) => (
                                        <TableRow
                                            key={row.thumbnailUrl}
                                            sx={{ border: 0 }}
                                        >
                                            <TableCell sx={{ border: 0 }}>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={row?.thumbnailUrl}
                                                    sx={{ width: 56, height: 56 }}
                                                />
                                            </TableCell>
                                            <TableCell sx={{ border: 0 }}>

                                                ID: {row.id} <br />
                                                {row?.name}
                                            </TableCell>

                                            <TableCell sx={{ border: 0 }}>
                                                {
                                                    row?.staus == "green" ? <Button   >  <Icon icon="ic:outline-keyboard-arrow-right" style={{ background: "green", width: '10px', height: '15px', borderRadius: '50%' }} /> </Button> : <Button>     <Icon icon="ic:outline-keyboard-arrow-right" style={{ background: "black", width: '10px', height: '15px', borderRadius: '50%' }} /></Button>
                                                }


                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                     <Box>
                     <Divider />
                        <Typography variant="h6">
                            Activity Account </Typography>
                        <Typography >
                            Activate the account                        </Typography>
                        <Divider />

                     </Box>
                </Grid>

            </Grid>
        </Box>
    );
}