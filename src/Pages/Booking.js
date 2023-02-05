import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Button, Card, CardActions, CardContent, Container, Paper, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

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
        <div>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
                <Paper elevation={3} sx={{ width: '33%', }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Number of Booking
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} fontWeight={'bold'} >
                            3500+
                        </Typography>
                        <Typography variant="body2">
                            <BorderLinearProgress variant="determinate" value={65} />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Paper>
                <Paper elevation={3} sx={{ width: '33%', }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            New Reviewer
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} fontWeight={'bold'}  >
                            $35000+
                        </Typography>
                        <Typography variant="body2">
                            <BorderLinearProgress variant="determinate" value={40} />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Paper>
                <Paper elevation={3} sx={{ width: '33%', }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Total of Company
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} fontWeight={'bold'} >
                            155+
                        </Typography>
                        <Typography variant="body2">
                            <BorderLinearProgress variant="determinate" value={90} />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Paper>

            </Container>

            <Container maxWidth="lg" sx={{ mt: 9, display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
                <Paper elevation={3} sx={{ width: '33%', }}>
                    <CardContent sx={{ display: 'flex', gap: '10px', borderBottom: '1px solid #eeeeee' }}>
                        <Icon icon="uim:calender" color="#d50000" width={28} />
                        <Typography sx={{ fontSize: 20 }} gutterBottom>
                            Latest booking
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Paper>
                <Paper elevation={3} sx={{ width: '66%', }}>
                    <CardContent sx={{ display: 'flex', gap: '10px', }}>

                        <Typography sx={{ fontSize: 17 }} fontWeight={'bold'} gutterBottom>
                            Overview the booking with our site
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Paper>
            </Container>



        </div>
    );
};

export default Booking;