import { BrowserRouter, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pages from './pages/Pages';
import styles from './style';

const App = () => (
	<div className="bg-primary w-full overflow-hidden">
		<Pages></Pages>
		<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Footer />
			</div>
		</div>
	</div>
);
export default App;
