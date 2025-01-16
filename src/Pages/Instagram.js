import React, { useRef, useState } from 'react';
import { toJpeg } from 'html-to-image';
import SimpleText from '../PostTypes/SimpleText';

const postTypes = {
    simpleText: SimpleText,
    // Add other post types here
};

function InstagramPost() {
    const [selectedPostType, setSelectedPostType] = useState('simpleText');
    const PostComponent = postTypes[selectedPostType];
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
            <select onChange={(e) => setSelectedPostType(e.target.value)} value={selectedPostType}>
                <option value="simpleText">Simple Text</option>
                {/* Add other options here */}
            </select>
            <PostComponent ref={postRef} />
        </div>
    );
}

export default InstagramPost;
