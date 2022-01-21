import React from 'react';
import Ticks from './components/Ticks';
import Numbers from './components/Numbers';
import './App.css';

function App() {
	return (
		<section className='graph'>
			<div className='top-left'>
				<Numbers size={285} direction={'left'} />
				<Ticks numOfTicks={9} />
			</div>
			<div className='top-right'></div>
			<div className='bottom-left'></div>
			<div className='bottom-right'>
				<Ticks numOfTicks={9} />
				<Numbers size={135} direction={'right'} />
			</div>
		</section>
	);
}

export default App;
