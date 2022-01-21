import React from 'react';
import '../styles/ticks.css';

export default function Ticks({ numOfTicks, axis }) {
    return (
        <section className={`ticks-${axis}`}>
            {
                new Array(numOfTicks).fill(null).map((_, i) => {
                    return (
                        <span className='tick-line' key={i}></span>
                    )
                })
            }
        </section>
    )
}
