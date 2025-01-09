import React, { useRef } from 'react';
import { toPng } from 'html-to-image';

function InstagramPost() {
    const postRef = useRef();

    const exportAsImage = () => {
        if (postRef.current === null) {
            return;
        }

        toPng(postRef.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'instagram-post.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Failed to export as image', err);
            });
    };

    return (
        <div className="InstagramPost">
            <div ref={postRef} className="post-design">
                {/* Add your design elements here */}
                <h1>Instagram Post</h1>
                <p>Design your post here...</p>
            </div>
            <button onClick={exportAsImage}>
                Export as Image
            </button>
        </div>
    );
}

export default InstagramPost;
