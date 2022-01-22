import React from 'react';

export default function Circles({ data }) {
    /*
        background color of circles are as randomized as much as possible within
        the 0 - 255 rgb range

        compration represents circle size
    */

    return (
        <div>
            {
                data.map(({ title, salary, compratio, headcount }) => {  
                    const rgbR = (salary % 255 * Math.random() + compratio) % 255;
                    const rgbB = (compratio % 255 * Math.random() + headcount) % 255;
                    const rgbG = (headcount % 255 * Math.random() + salary) % 255;

                    return (
                        <div key={title} style={{
                            width: compratio,
                            height: compratio,
                            borderRadius: '100%',
                            position: 'absolute',
                            left: `${headcount * 2 - 2}px`,
                            bottom: `${salary * 2 - 2}px`,
                            transform: 'translateY(50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '8px',
                            fontWeight: '800',
                            backgroundColor: `rgb(${rgbR}, ${rgbG}, ${rgbB}, 0.7)`
                        }}>{ title }</div>
                    )
                })
            }
        </div>
    )
}
