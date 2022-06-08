import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPlanets = async ({ queryKey }) => {
	// console.log(page);
	const { data } = await axios.get(
		`https://randomuser.me/api/?page=${queryKey[1]}&results=10&seed=03de891ee8139363`
	);
	return data;
};

export const usePagination = (page) => {
	// console.log(page);
	return useQuery(['users', page], fetchPlanets, {
		keepPreviousData: true
	});
};
