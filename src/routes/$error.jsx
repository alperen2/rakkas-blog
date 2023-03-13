import { ErrorBoundary } from "rakkasjs";

export default function ErrorPage(props) {
	console.log(props)
	return (
		<ErrorBoundary
			fallbackRender={({ error, resetErrorBoundary }) => (
				<div>
					<h1>An error has occurred</h1>
					<pre>{error.message}</pre>
					<button
						onClick={() => {
							resetErrorBoundary();
						}}
					>
						Try again
					</button>
				</div>
			)}
		>
			<h1>hata</h1>
		</ErrorBoundary>
	);
}