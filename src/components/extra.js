import React from 'react';

const Extra = ({video}) => {
    if(!video) {
        return <div>loading</div>;
    }
    const published = (video.snippet.publishedAt).toString().substring(0,10);
    
    return (
        <div className='col-md-8'>
            <p>Extra details about video: </p>
            <ul className="list-group">
                <li className="list-group-item">Published: {published}</li>
            </ul>
        </div>
    );
}

export default Extra;