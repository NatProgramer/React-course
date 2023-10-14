import { RAMDON_FACTS_API } from './Constants';

export const fetchRamdomFactsAPI = async () => {
	const fetchFactsAPI = await fetch(RAMDON_FACTS_API);

	const factsResponse = await fetchFactsAPI.json();

	const { fact } = factsResponse;

	return fact;
};
