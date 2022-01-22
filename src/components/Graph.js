import React from 'react';
import Ticks from './Ticks';
import Numbers from './Numbers';
import '../styles/graph.css';

export default function Graph() {
    return (
        <section className='graph'>
            <div className='top-left'>
                <Numbers size={285} direction={'left'} axis={"y"} />
                <Ticks numOfTicks={9} axis={"y"} />
            </div>
            <div className='top-right'>
                <Numbers size={220} direction={'top'} axis={"x"} />
                <Ticks numOfTicks={9} axis={"x"} />
            </div>
            <div className='bottom-left'>
                <Ticks numOfTicks={9} axis={"x"} />
                <Numbers size={20} direction={'bottom'} axis={"x"} />
            </div>
            <div className='bottom-right'>
                <Ticks numOfTicks={9} axis={"y"} />
                <Numbers size={135} direction={'right'} axis={"y"} />
            </div>
		</section>
    )
}
