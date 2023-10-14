import Square from './Square';
import ResetBtn from './ResetBtn';

export default function WinnerOverlay({
	winner,
	resetGame,
}) {
	return (
		<section className='winner'>
			<div className='text'>
				<h2>
					{winner == false
						? 'there has been a tie'
						: 'Has won: '}
				</h2>

				<header className='win'>
					<Square>{winner}</Square>
				</header>
				<footer>
					<ResetBtn resetGame={resetGame} />
				</footer>
			</div>
		</section>
	);
}
