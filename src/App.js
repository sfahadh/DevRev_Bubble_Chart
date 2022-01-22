import React, { useEffect, useState } from 'react';
import Circles from './components/Circles';
import Graph from './components/Graph';
import './App.css';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const resp = await fetch("https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77");
		const json = await resp.json();
		setData(json);
	}

	return (  /* Last minute changes to add description for x and y axis */
		<div className='container'>
			<p>Salary</p>
			<div className='flex'>
				<main>
					<Circles data={data} />
					<Graph />
				</main>
				<p className='headcount'>Headcount</p>
			</div>
		</div>
	);
}

export default App;
