import { useState } from 'react';
import Board from './Components/Board';
import Square from './Components/Square';
import ResetBtn from './Components/ResetBtn';
import confetti from 'canvas-confetti';
import { TURNS } from './constants';
import { checkEndGame, checkWinner, saveLocalStorage } from './Logic/functions';

export default function App() {
	const [board, setBoard] = useState(() => {
		const boardFromStorage = localStorage.getItem('board');

		return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
	});

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = localStorage.getItem('turn');

		return turnFromStorage ?? TURNS.FirstPlayer;
	});

	const [winner, setWinner] = useState(null);

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setTurn(TURNS.FirstPlayer);
		setWinner(null);

		localStorage.removeItem('board');
		localStorage.removeItem('turn');
	};

	const updateBoard = async (index) => {
		if (board[index] || winner) return;
		// actualizar el array con el movimiento
		const newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);

		// Cambiando el turno cuando se hace click
		const newTurn =
			turn == TURNS.FirstPlayer ? TURNS.SecondPlayer : TURNS.FirstPlayer;
		setTurn(newTurn);

		// Guardar local storage

		saveLocalStorage(newBoard, newTurn);

		const newWinner = checkWinner(newBoard);

		if (newWinner != null) {
			setWinner(() => {
				return newWinner;
			});
			confetti();
		} else if (checkEndGame(newBoard)) {
			setWinner(false);
		}
	};

	return (
		<main className='board'>
			<ResetBtn resetGame={resetGame} />
			<Board
				board={board}
				winner={winner}
				resetGame={resetGame}
				updateBoard={updateBoard}
			/>
			{winner == null ? (
				<section className='turn'>
					<Square isTurnedSelected={turn == TURNS.FirstPlayer}>
						{TURNS.FirstPlayer}
					</Square>
					<Square isTurnedSelected={turn == TURNS.SecondPlayer}>
						{TURNS.SecondPlayer}
					</Square>
				</section>
			) : null}
		</main>
	);
}
