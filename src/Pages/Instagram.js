import React, { useRef } from 'react';
import { toJpeg } from 'html-to-image';

function InstagramPost() {
    const postRef = useRef();

    const exportAsImage = () => {
        if (postRef.current === null) {
            return;
        }

        toJpeg(postRef.current, { quality: 0.95 })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'instagram-post.jpeg';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Failed to export as image', err);
            });
    };

    return (
        <div className="InstagramPost">
            <button onClick={exportAsImage}>
                Export as Image
            </button>
            <div ref={postRef} className="post-design" style={{ width: '1080px', height: '1080px' }}>
                {/* Add your design elements here */}
                <h1 style={{ color: 'white' }}>Instagram Post</h1>
                <h2>Design your Instagram post here</h2>
            </div>
        </div>
    );
}

export default InstagramPost;
