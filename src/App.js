import React from 'react';
import Ticks from './components/Ticks';
import Numbers from './components/Numbers';
import './App.css';

function App() {
	return (
		<section className='graph'>
			<div className='top-left'>
				<Numbers size={285} direction={'left'} axis={"x"} />
				<Ticks numOfTicks={9} axis={"x"} />
			</div>
			<div className='top-right'>
				<Numbers size={285} direction={'top'} axis={"y"} />
				<Ticks numOfTicks={8} axis={"y"} />
			</div>
			<div className='bottom-left'></div>
			<div className='bottom-right'>
				<Ticks numOfTicks={9} axis={"x"} />
				<Numbers size={135} direction={'right'} axis={"x"} />
			</div>
		</section>
	);
}

export default App;
