import React from 'react';
import { useState } from 'react';

export default function CounterBtn({ count, onClick }) {
	return (
		<button
			className='px-3 py-2 bg-indigo-600 rounded-md'
			onClick={onClick}
		>
			Counter: {count}
		</button>
	);
}
