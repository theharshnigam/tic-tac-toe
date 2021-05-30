import React from 'react'

const History = ({ history }) => {
    return (
        <ul>
            {history.map((_ , move) => {
                return (
                    <li key = {move}>
                     <button type="button">
                         {move === 0 ? "Start the Game" : `Go to move #${move}`}
                     </button>
                     </li>
                );
            })}
        </ul>
    );
};

export default History;
