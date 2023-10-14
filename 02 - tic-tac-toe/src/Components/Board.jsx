import React from 'react';
import Square from './Square';
import WinnerOverlay from './WinnerOverlay';

export default function Board({
	board,
	winner,
	resetGame,
	updateBoard,
}) {
	return (
		<>
			<h1>Tic-Tac-Toe</h1>
			{winner != null ? (
				<WinnerOverlay
					winner={winner}
					resetGame={resetGame}
				/>
			) : null}
			<section className='game'>
				{board.map((square, index) => {
					return (
						<Square
							key={index}
							index={index}
							updateBoard={updateBoard}
						>
							{square}
						</Square>
					);
				})}
			</section>
		</>
	);
}
