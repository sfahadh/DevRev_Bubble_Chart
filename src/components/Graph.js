import React from 'react';
import Ticks from './Ticks';
import Numbers from './Numbers';
import '../styles/graph.css';

export default function Graph() {
    /*
        Numbers component will generate the numbers displayed in graph
        Ticks component will generate the small lines right next to the numbers

        size and numOfTicks are hardcoded so graph may not scale well
        A possible solution to fix this issue is finding the minimum and maximum in the dataset
        and then using those values to set the boundaries for the graph
    */

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
