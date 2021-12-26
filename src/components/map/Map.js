import React, { useEffect, useState } from 'react';
import '../../App.css';

const BOARD_LENGTH = 920;

// Map is a static variable at dimensions 1080W x 920H
// Each char value in the array has a different design and ability
// U, D, L, R -> Goon tiles. These decide directions of the goons on the next clock tick
// O -> Open tiles. This is where you can place towers.
const Map = ({ layout }) => {

    const sideLength = BOARD_LENGTH / layout.length;

    const [map, setMap] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setMap(<div className="tile" style={{ width: sideLength, height: sideLength }}>.</div>);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div><p>Is Loading...</p></div>
    }

    return (
        <div>
            <p>This is the map</p>
            {map}
        </div>
    )
}

export default Map;