import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Card, CardContent, Container, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import data from '../CompanyDeatils.json'
import { Icon } from '@iconify/react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



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

export default function ResponsiveGrid() {
    return (

        <Container maxWidth="lg"  sx={{ mt: 9 ,mb:5}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={4} md={4} >
                    <Paper elevation={3} >
                        <Box sx={{ p: 2, }}>
                            <Typography fontSize={18} fontWeight={'bold'}>
                                Top Company Conversion rate</Typography>
                            <Typography fontSize={14}>
                                Based an their performance
                            </Typography>

                        </Box>
                        <Divider></Divider>

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
                                                <Typography sx={{ color: 'green' }}><small>{row?.average}</small>%</Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>


                <Grid item xs={12} sm={4} md={4} >
                    <Paper elevation={3} >
                        <Box sx={{ p: 2, }}>
                            <Typography fontSize={18} fontWeight={'bold'}>
                                Activity Account</Typography>
                            <Typography fontSize={14}>
                                Activate the account
                            </Typography>

                        </Box>
                        <Divider></Divider>

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
                                                {
                                                    row?.staus == "green" ? 
                                                    <Button   >  <Icon icon="icon-park-solid:correct" color='white' style={{ background: "green", width: '10px', height: '15px', borderRadius: '50%' ,padding:'4px'}} /> </Button> 
                                                    : 
                                                    <Button> <Icon  icon="icon-park-solid:correct" color='white' style={{ background: "black", width: '10px', height: '15px', borderRadius: '50%',padding:'4px' }} /></Button>
                                                }


                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                    <Paper elevation={3}>
                        <Box sx={{ p: 2, }}>
                            <Typography fontSize={18} fontWeight={'bold'}>
                                Monthly Income</Typography>
                            <Typography fontSize={14}>
                                return of last month and date
                            </Typography>

                        </Box>
                        <Divider></Divider>
                        <CardContent sx={{ mt: 1 }}>
                            {data?.map((value, index) =>
                                <Box key={index} sx={{mb:1}}>

                                    <Typography  fontWeight={'bold'} >
                                        ${value?.income}
                                    </Typography>
                                    <Typography variant="body2">
                                        <BorderLinearProgress variant="determinate" value={65} />
                                    </Typography>
                                    <Typography fontSize={12} >
                                        {value?.month}
                                    </Typography>
                                </Box>
                            )}
                        </CardContent>
                       
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    );
}