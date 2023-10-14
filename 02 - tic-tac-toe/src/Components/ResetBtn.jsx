import React from 'react';

export default function ResetBtn({ resetGame }) {
	const handleClick = () => {
		resetGame();
	};
	return (
		<button onClick={handleClick}>Reset the game</button>
	);
}
