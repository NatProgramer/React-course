import React from 'react';

export default function Square({
	children,
	isTurnedSelected,
	index,
	updateBoard,
}) {
	let handleClick = () => {
		updateBoard(index);
	};

	return (
		<div
			onClick={handleClick}
			className={
				isTurnedSelected == true
					? 'square is-selected'
					: 'square'
			}
		>
			<span>{children}</span>
		</div>
	);
}
