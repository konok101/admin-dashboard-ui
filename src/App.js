import logo from './logo.svg';
import './App.css';
import './Custom.css'
import Navbar from './Pages/Navbar/Navbar'
import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router';
import Logout from './Pages/pageslist/Logout'
import Pariman from './Pages/pageslist/Pariman'
import Golden from './Pages/pageslist/Golden'
import Silver from './Pages/pageslist/silver'
import Bronz from './Pages/pageslist/Bronz'
import CustomerList from './Pages/pageslist/CustomerList'
import BookingList from './Pages/pageslist/Bookinglist'
import Inbox from './Pages/pageslist/Inbox'
import CustomerInbox from './Pages/pageslist/InboxCustomer'
import ActiveAccount from './Pages/pageslist/ActiveAcount'
import OwnerList from './Pages/pageslist/CustomerOwner'
import Property from './Pages/pageslist/Propertys'
import CustomerReview from './Pages/pageslist/CustomerOwner'
import { Box } from '@mui/system';
function App() {
  return (
    <div>
       <Navbar/>
       <Box className='sideNav'>
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pariman" element={<Pariman />} />
        <Route path="/golden" element={<Golden />} />
        <Route path="/silver" element={<Silver />} />
        <Route path="/bronz" element={<Bronz />} />
        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/bookinglist" element={<BookingList />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/customerInbox" element={<CustomerInbox/>} />
        <Route path="/activeAccount" element={<ActiveAccount />} />
        <Route path="/ownerList" element={<OwnerList/>} />
        <Route path="/propertys" element={<Property />} />
        <Route path="/customerReview" element={<CustomerReview />} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
       </Box>
    

    </div>
  );
}

export default App;
