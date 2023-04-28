import React from 'react';
import CountUp from "react-countup";

const Cards = (data) => {
console.log(data);
    if (!data) {
        return "Loading..."
    } else {
        return (
            <div>
                <h1>
                    Positive Cases : <CountUp start={0} end={data.data.positive} duration={4.0} separator="," />
                </h1>
                <h1>
                    Negative Cases: <CountUp start={0} end={data.data.negative} duration={2.5} separator="," />
                </h1>
            </div>
        );
    }
}

export default Cards;