import { Box } from '@mui/material';
import React from 'react';
import Booking from './Booking';
import BookingSummery from './BookingSummery';
const Home = () => {
    return (
        <Box sx={{marginLeft:"250px"}}>
            <Booking>
            </Booking>
            <BookingSummery/>
     </Box>
    );
};

export default Home;