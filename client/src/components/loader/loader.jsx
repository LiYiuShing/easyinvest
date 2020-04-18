import ContentLoader from 'react-content-loader';
import React from 'react';


const Loader = () => {
    return( 
        <ContentLoader>
            <rect x="0" y="17" rx="3" ry="4" width="85%" height="8" />
            <rect x="0" y="40" rx="3" ry="4" width="100%" height="7" />
            <rect x="0" y="63" rx="3" ry="4" width="45%" height="7" />
            <rect x="0" y="85" rx="3" ry="4" width="50%" height="7" />
        </ContentLoader>
    )
}

export default Loader;