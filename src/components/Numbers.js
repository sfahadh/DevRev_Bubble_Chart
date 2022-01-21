import React from 'react';
import '../styles/numbers.css';

export default function Numbers({ size, direction }) {
    const numList = [];
    for (let i = size; i >= size - 120; i -= 15) {
        numList.push(i);
    }

    return (
        <section className='numbers'>
            {
                new Array(numList.length).fill(null).map((_, i) => {
                    return (
                        <span className={`nums nums-${direction}`} key={i}>{ numList[i] }</span>
                    )
                })
            }
        </section>
    )
}
