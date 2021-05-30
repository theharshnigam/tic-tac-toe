import React from 'react'

const History = ({ history }) => {
    return (
        <ul>
            {history.map((_ , move) => {
                return (
                    <li key = {move}>
                     <button type="button">
                         {move === 0 ? "Player 1 " : "Player 2"}
                     </button>
                     </li>
                );
            })}
        </ul>
    );
};

export default History;
