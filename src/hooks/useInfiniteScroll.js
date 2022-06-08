import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

const fetchUsers = async ({ pageParam = 1 }) => {
	const { data } = await axios.get(
		`https://randomuser.me/api/?page=${pageParam}&results=10`
	);
	return data;
};

export const useInfiniteScroll = () => {
	return useInfiniteQuery(['colors'], fetchUsers, {
		getPreviousPageParam: (firstPage, page) => firstPage.info.page - 1,
		getNextPageParam: (lastPage, pages) => lastPage.info.page + 1,

		refetchOnWindowFocus: false // to prevent refetch when we get out and come back to the browser window / page
	});
};
