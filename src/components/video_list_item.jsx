import React from 'react';

const VideoListItem = ({ video, onSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li 
          onClick={()=> { 
            console.log('click function working')
            onSelect(video)
          }} 
          className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div cassName="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        
        </li>
    )
}

export default VideoListItem