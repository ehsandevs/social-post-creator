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
        <div className="InstagramPost p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setSelectedPostType(e.target.value)}
                        value={selectedPostType}
                    >
                        <option value="simpleText">Simple Text</option>
                        <option value="codeBlock">Code Block</option>
                        {/* Add other options here */}
                    </select>
                    <button
                        className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={exportAsImage}
                    >
                        Export as Image
                    </button>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <PostComponent ref={postRef} code={exampleCode} language="javascript" />
                </div>
            </div>
        </div>
    );
}

export default InstagramPost;
