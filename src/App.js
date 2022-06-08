import { useState } from 'react';
import './App.css';
import InfiniteScroll from './components/InfiniteScroll';
import Pagination from './components/Pagination';

function App() {
	const [view, setView] = useState('pagination');

	return (
		<div className="App">
			<h1>React Query Pagination</h1>
			<br />

			<nav className="nav">
				<button onClick={() => setView('pagination')}>Pagination</button>
				<button onClick={() => setView('infiniteScroll')}>
					Infinite Scroll
				</button>
			</nav>
			{view === 'pagination' ? <Pagination /> : <InfiniteScroll />}
		</div>
	);
}

export default App;
