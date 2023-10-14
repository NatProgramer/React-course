import { useEffect, useState } from 'react';
import { RAMDON_IMAGES_API } from '../Utils/Constants';

export function useCatImage({ fact }) {
	const [imageURL, setImageURL] = useState(null);

	useEffect(() => {
		if (!fact) return;

		const threeFirstWords = fact.split(' ', 3).join(' ');
		fetch(`${RAMDON_IMAGES_API}/${threeFirstWords}`)
			.then((response) => response.arrayBuffer())
			.then((imageWithFact) => {
				const blob = new Blob([imageWithFact]);
				const srcBlob = URL.createObjectURL(blob);

				setImageURL(srcBlob);
			});
	}, [fact]);

	return { imageURL };
}
