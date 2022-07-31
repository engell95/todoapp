import React  from "react";
import ContentLoader from 'react-content-loader'

function TodoLoading(props){
    return(
        <ContentLoader 
            rtl
            speed={2}
            width={props.windowSize.innerWidth - 45}
            height={250}
            viewBox="0 0 1400 250"
            backgroundColor="#6c8989"
            foregroundColor="#ecebeb"
        >
            <rect x="25" y="15" rx="5" ry="5" width="1400" height="60" /> 
            <rect x="25" y="95" rx="5" ry="5" width="1400" height="60" /> 
            <rect x="25" y="175" rx="5" ry="5" width="1400" height="60" />
        </ContentLoader>
    );
};

export {TodoLoading};