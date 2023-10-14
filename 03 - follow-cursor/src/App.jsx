import { useEffect, useState } from 'react';

export default function App() {
	const [isFollowing, setIsFollowing] = useState(false);

	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMove = (e) => {
			const { clientX, clientY } = e;
			setPosition({ x: clientX, y: clientY });
		};
		if (isFollowing) {
			window.addEventListener('pointermove', handleMove);
		}

		return () => {
			window.removeEventListener('pointermove', handleMove);
		};
	}, [isFollowing]);

	return (
		<main>
			<div
				className='circle'
				style={{
					position: 'absolute',
					top: '-100px',
					left: '-100px',
					display: isFollowing ? 'inline-block' : 'none',
					transform: `translate(${position.x + 100}px, ${position.y + 100}px)`,
				}}
			></div>
			<button
				onClick={() => {
					setIsFollowing(!isFollowing);
				}}
			>
				{isFollowing ? 'Unfollowg cursor' : 'Follow cursor'}
			</button>
		</main>
	);
}
