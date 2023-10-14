import React from 'react';
import { useCatFact } from '../Hooks/useCatFact';
import { useCatImage } from '../Hooks/useCatImage';

export function OtherCatImage() {
	const { fact } = useCatFact();

	const { imageURL } = useCatImage({ fact });

	return (
		<>
			{imageURL ? (
				<img
					src={imageURL}
					alt={'Image rendered with three words of de fact'}
				/>
			) : null}
		</>
	);
}
