import React from 'react';
import '../styles/ticks.css';

export default function Ticks({ numOfTicks }) {
    return (
        <section className='ticks'>
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
