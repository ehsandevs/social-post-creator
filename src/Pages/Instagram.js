import React, { useRef, useState } from 'react';
import { toJpeg } from 'html-to-image';
import SimpleText from '../PostTypes/SimpleText';
import CodeBlockPost from '../PostTypes/CodeBlockPost';

const postTypes = {
    simpleText: SimpleText,
    codeBlock: CodeBlockPost,
    // Add other post types here
};

const exampleCode = `const helloWorld = () => {
    console.log('Hello, world!');
};`;

function InstagramPost() {
    const [selectedPostType, setSelectedPostType] = useState('codeBlock');
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
                <option value="codeBlock">Code Block</option>
                {/* Add other options here */}
            </select>
            <PostComponent ref={postRef} code={exampleCode}
                language="javascript" />
        </div>
    );
}

export default InstagramPost;
