import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Avatar, Button, Card, CardActions, CardContent, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import data from '../../CompanyDeatils.json'
import chart from '../../Chart.json'
import './Booking.css'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const Booking = (props) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={4} md={4} lg={4} >
                    <Paper elevation={3} >
                        <CardContent >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Number of Booking
                            </Typography>
                            <Typography sx={{ mb: 1 }} fontWeight={'bold'} >
                                3500+
                            </Typography>
                            <Typography variant="body2">
                                <BorderLinearProgress variant="determinate" value={65} />
                            </Typography>
                            <Typography fontSize={12} sx={{ mt: 1 }}>
                                Last Month
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                    <Paper elevation={3} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                New Reviewer
                            </Typography>
                            <Typography sx={{ mb: 1 }} fontWeight={'bold'}  >
                                $35000+
                            </Typography>
                            <Typography variant="body2">
                                <BorderLinearProgress variant="determinate" value={40} />
                            </Typography>
                            <Typography fontSize={12} sx={{ mt: 1 }}>
                                Last Month
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                    <Paper elevation={3} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Total of Company
                            </Typography>
                            <Typography sx={{ mb: 1 }} fontWeight={'bold'} >
                                155+
                            </Typography>
                            <Typography variant="body2">
                                <BorderLinearProgress variant="determinate" value={90} />
                            </Typography>
                            <Typography fontSize={12} sx={{ mt: 1 }}>
                                Last Month
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} sx={{ mt: 5 }}>
                    <Paper elevation={3} >
                        <CardContent sx={{ display: 'flex', gap: '10px', borderBottom: '1px solid #eeeeee' }}>
                            <Icon icon="uim:calender" color="#d50000" width={28} />
                            <Typography sx={{ fontSize: 20 }} gutterBottom>
                                Latest booking
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <TableContainer sx={{ mt: 2 }}>
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
                                                    <Typography color="text.secondary"><Icon icon="ooui:arrow-next-ltr" width="20" /></Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>

                        <CardContent sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button color='error' size="small">see More</Button>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} sx={{ mt: 5 }}>
                    <Paper elevation={3} >
                        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', }}>
                            <Typography sx={{ fontSize: 17 }} fontWeight={'bold'} gutterBottom>
                                Overview the booking with our site
                            </Typography>
                            <CardActions  >
                                <Button variant='contained' color='error' size="small">see More</Button>
                                <Button variant='contained' color='common' size="small">Learn More</Button>
                            </CardActions>
                        </CardContent>
                        <CardContent sx={{ margin: "auto" }}>
                            <LineChart width={550} height={342} data={chart}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis />
                            </LineChart>
                        </CardContent>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Booking;