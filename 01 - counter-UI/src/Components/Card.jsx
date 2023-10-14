import CounterBtn from './CounterBtn';
import { useState } from 'react';
export default function Card() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div className='w-2/5 h-1/3 bg-slate-700 flex flex-col gap-3 items-center justify-center'>
			<CounterBtn
				count={count}
				onClick={handleClick}
			/>

			<CounterBtn
				count={count}
				onClick={handleClick}
			/>
		</div>
	);
}
