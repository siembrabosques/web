import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
	uri: 'https://siembrabosques.com/graphql/',
	cache: new InMemoryCache()
});

export const query = client.query
