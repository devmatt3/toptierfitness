import React, { useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import NotFound from './NotFound';

import { queryHomeContent } from '../utils/prismicQueries';

const Home = () => {
    const [homeDoc, setHomeDoc] = useState(null);
    const [notFound, toggleNotFound] = useState(false);

    useEffect(() => {
        const fetchHomeContent = async () => {
            const queryResponse = await queryHomeContent();
            const homeDocContent = queryResponse.data.home;
            if (homeDocContent) {
                setHomeDoc(homeDocContent);
            } else {
                toggleNotFound(true);
            }
        };
        fetchHomeContent();
    }, []);

    if (homeDoc) {
        return (
            <div>
                {RichText.render(homeDoc.home_title)}
            </div>
        );
    } else if (notFound) {
        return <NotFound />
    }
    return null;
};

export default Home; 