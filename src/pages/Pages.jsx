import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from '../style';
import AirportTaxis from './AirportTaxis';
import Attractions from './Attractions';
import CarRentals from './CarRentals';
import Flights from './Flights';
import Home from './Home';
import NoPage from './NoPage';
import Stays from './Stays';

const Pages = () => {
	return (
		<BrowserRouter>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			<Routes>
				<Route>
					<Route index element={<Home />} />
					<Route path="stays" element={<Stays />} />
					<Route path="flights" element={<Flights />} />
					<Route path="car_rentals" element={<CarRentals />} />
					<Route path="attractions" element={<Attractions />} />
					<Route path="airport_taxis" element={<AirportTaxis />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Pages;
