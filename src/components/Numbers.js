import React from 'react';
import '../styles/numbers.css';

export default function Numbers({ size, direction, axis }) {
    const numList = [];

    if (axis === "y") {
        for (let i = size; i >= size - 120; i -= 15) {
            numList.push(i);
        }
    } else {
        for (let i = size; i < size + 180; i += 20) {
            numList.push(i);
        }
    }

    return (
        <section className={`numbers-${axis}`}>
            {
                new Array(numList.length).fill(null).map((_, i) => {
                    return (
                        <span className={`nums nums-${axis}-${direction}`} key={i}>{ numList[i] }</span>
                    )
                })
            }
        </section>
    )
}
