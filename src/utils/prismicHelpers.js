import React from 'react';
import { Link } from 'react-router-dom';
import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { apiEndpoint, linkResolver } from '../prismic-configuration';
import fragmentTypes from './fragmentTypes.json';


const fragmentMatcher = new IntrospectionFragmentMatcher(
    { introspectionQueryResultData: fragmentTypes },
);

export const customLink = (type, element, content, children, index) => (
    <Link to={linkResolver(element.data)} key={index}>
        {content}
    </Link>
);

export const client = new ApolloClient({
    link: PrismicLink({ uri: apiEndpoint }),
    cache: new InMemoryCache({ fragmentMatcher }),
});