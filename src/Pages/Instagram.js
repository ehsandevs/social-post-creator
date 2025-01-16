import React, { useRef, useState } from 'react';
import { toJpeg } from 'html-to-image';
import SimpleText from '../PostTypes/SimpleText';
import CodeBlockPost from '../PostTypes/CodeBlockPost';

const postTypes = {
    simpleText: SimpleText,
    codeBlock: CodeBlockPost,
};

function InstagramPost() {
    const [selectedPostType, setSelectedPostType] = useState('codeBlock');
    const [code, setCode] = useState(`const helloWorld = () => {
    console.log('Hello, world!');
};`);
    const [lang, setLang] = useState('javascript');
    const PostComponent = postTypes[selectedPostType];
    const postRef = useRef();

    const exportAsImage = () => {
        if (postRef.current === null) {
            return;
        }

        toJpeg(postRef.current, {
            quality: 0.95,
            width: 1080,
            height: 1080,
        })
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
        <div className="InstagramPost p-6 bg-gray-100 min-h-screen flex">
            {/* Left Panel for Code Input */}
            <div className="w-1/3 bg-white rounded-lg shadow-md p-6 mr-4">
                <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setLang(e.target.value)}
                    value={lang}
                >
                    <option value="javascript">Javascript</option>
                    <option value="php">PHP</option>
                    {/* Add other options here */}
                </select>
                <textarea
                    className="w-full h-full border border-gray-300 p-4 rounded-lg"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Type your code here..."
                />
            </div>
            {/* Right Panel for Post Preview and Export */}
            <div className="w-2/3 bg-white rounded-lg shadow-md p-6">
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
                {/* Display Version */}
                <div
                    className="border border-gray-300 p-4 rounded-lg overflow-hidden"
                    style={{
                        width: '100%',
                        maxWidth: '540px',
                        aspectRatio: '1 / 1',
                        position: 'relative',
                    }}
                >
                    <PostComponent code={code} language={lang} />
                </div>
                {/* Hidden Export Version */}
                <div className="hidden">
                    <PostComponent ref={postRef} code={code} language={lang} isExport />
                </div>
            </div>
        </div>
    );
}

export default InstagramPost;
