import React from 'react';
import Square from './Sqaure';

const Board = () => {
    return (
        <div>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
};

export default Board;