import React, { useEffect, useState } from 'react';
import '../../App.css';

const BOARD_LENGTH = 600;

// Map is a static variable at dimensions 600W x 600H
// Each char value in the array has a different design and ability
// U, D, L, R -> Goon tiles. These decide directions of the goons on the next clock tick
// O -> Open tiles. This is where you can place towers.
const Map = ({ layout }) => {

    const sideLength = BOARD_LENGTH / layout.length;

    const [map, setMap] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Create a matrix of divs that represent the type of block on the map
    useEffect(() => {
        const matrix = [];
        for (let i = 0; i < layout.length; i++) {
            const row = layout[i];
            const matrixRow = [];
            for (let j = 0; j < row.length; j++) {
                const block = row[j];
                if (block === "D" || block === "R" || block === "L" || block === "U") {
                    matrixRow.push(<div key={"row" + i + "col" + j} style={{ height: sideLength, width: sideLength, backgroundColor: "tan" }}></div>);
                } else {
                    matrixRow.push(<div key={"row" + i + "col" + j} style={{ height: sideLength, width: sideLength, backgroundColor: "green" }}></div>);
                }
            }
            matrix.push(<div className="mapRow">
                {matrixRow}
            </div>
            );
        }
        setMap(matrix);
        setIsLoading(false);
    }, [layout, sideLength]);

    if (isLoading) {
        return <div><p>Is Loading...</p></div>
    }

    return (
        <div className="mapContainer" style={{ width: BOARD_LENGTH, height: BOARD_LENGTH }}>
            {map}
        </div>
    )
}

export default Map;