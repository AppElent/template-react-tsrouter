import { ConvexQueryClient } from "@convex-dev/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize ConvexQueryClient
const convexQueryClient = new ConvexQueryClient(
	import.meta.env.VITE_CONVEX_URL,
);

// Initialize QueryClient
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryKeyHashFn: convexQueryClient.hashFn(),
			queryFn: convexQueryClient.queryFn(),
		},
	},
});

// Connect ConvexQueryClient to QueryClient
convexQueryClient.connect(queryClient);

export function getContext() {
	return {
		queryClient,
	};
}

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
