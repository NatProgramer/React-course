import { WINNER_COMBOS } from '../constants';

export const checkEndGame = (newBoard) => {
	// revisar cada celda y definir si tiene algo
	return newBoard.every((square) => square !== null);
};

export const checkWinner = (boardToCheck) => {
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;

		if (
			boardToCheck[a] &&
			boardToCheck[a] == boardToCheck[b] &&
			boardToCheck[a] == boardToCheck[c]
		) {
			return boardToCheck[a];
		}
	}
	return null;
};

export const saveLocalStorage = (newBoard, turn) => {
	window.localStorage.setItem('board', JSON.stringify(newBoard));

	window.localStorage.setItem('turn', turn);
};
