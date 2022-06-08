import { useState } from 'react';
import { usePagination } from '../hooks/usePagination';
import Users from './Users';

function Pagination() {
	const [page, setPage] = useState(1);

	const { isLoading, data, error, isFetching, isPreviousData } =
		usePagination(page);

	// data && console.log(data);

	if (isLoading) {
		return <h4>Loading...</h4>;
	}
	if (error) {
		return <h4>Error!</h4>;
	}

	return (
		<>
			<h2>Pagination</h2>

			{data && (
				<div className="card">
					{data?.results?.map((user, idx) => (
						<Users key={idx} user={user} />
					))}
				</div>
			)}
			<div className="nav btn-container">
				<button
					onClick={() => setPage(Math.max(page - 1, 0))}
					disabled={page === 1}
				>
					Prev Page
				</button>

				<button onClick={() => setPage(page + 1)} disabled={isPreviousData}>
					Next Page
				</button>
			</div>
			<div>{isFetching ? 'Fetching...' : null}</div>
		</>
	);
}

export default Pagination;
