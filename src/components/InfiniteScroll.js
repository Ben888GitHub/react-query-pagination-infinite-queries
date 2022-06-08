import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import Users from './Users';

function InfiniteScroll() {
	const {
		isLoading,
		error,
		data,
		fetchNextPage,
		isFetchingNextPage,
		fetchPreviousPage,
		isFetchingPreviousPage
	} = useInfiniteScroll();

	if (isLoading) {
		return <h4>Loading...</h4>;
	}
	if (error) {
		return <h4>Error!</h4>;
	}
	console.log(data);

	return (
		<>
			<h2>Infinite Scroll View</h2>
			<div className="btn-container">
				<button onClick={fetchPreviousPage} disabled={isFetchingPreviousPage}>
					Load Previous Guys
				</button>
			</div>
			<div className="card">
				{data &&
					data?.pages?.map((page) =>
						page.results.map((user, idx) => <Users key={idx} user={user} />)
					)}
			</div>
			<div className="btn-container">
				<button onClick={fetchNextPage} disabled={isFetchingNextPage}>
					Load More
				</button>
			</div>
			<div> {isFetchingNextPage && 'Fetching...'}</div>
		</>
	);
}

export default InfiniteScroll;
