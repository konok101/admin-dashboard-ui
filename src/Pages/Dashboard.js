import { Box } from '@mui/material';
import React from 'react';
import Booking from './Booking/Booking';
import BookingSummery from './BookingSummery';
import TopComapnyInfo from './TopComapnyInfo';
const Home = () => {
    return (
        <Box >
            <Booking />
            <BookingSummery />
            <TopComapnyInfo />
        </Box>
    );
};

export default Home;