import React from 'react';
import '../styles/numbers.css';

export default function Numbers({ size }) {
    const numList = [];
    for (let i = size; i >= 330; i -= 30) {
        numList.push(i);
    }

    return (
        <section className='numbers'>
            {
                new Array(numList.length).fill(null).map((_, i) => {
                    return (
                        <span className='nums' key={i}>{ numList[i] }</span>
                    )
                })
            }
        </section>
    )
}
