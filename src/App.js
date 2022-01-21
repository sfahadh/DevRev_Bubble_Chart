import React from 'react';
import Ticks from './components/Ticks';
import Numbers from './components/Numbers';
import './App.css';

function App() {
	return (
		<section className='graph'>
			<div className='top-left'>
				<Numbers size={570}/>
				<Ticks numOfTicks={9} />
			</div>
			<div className='top-right'></div>
			<div className='bottom-left'></div>
			<div className='bottom-right'></div>
		</section>
	);
}

export default App;
