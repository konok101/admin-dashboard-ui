import { Box } from '@mui/material';
import React from 'react';
import Booking from './Booking';
import BookingSummery from './BookingSummery';
import TopComapnyInfo from './TopComapnyInfo';
const Home = () => {
    return (
        <Box sx={{marginLeft:"250px"}}>
            <Booking/>
            <BookingSummery/>
            <TopComapnyInfo/>
     </Box>
    );
};

export default Home;