import React, { useRef, useState } from 'react';
import { toJpeg } from 'html-to-image';
import SimpleText from '../PostTypes/SimpleText';
import CodeBlockPost from '../PostTypes/CodeBlockPost';
import ExportButton from '../Components/ExportButton';
import PostTypeSelector from '../Components/PostTypeSelector';
import CodeInput from '../Components/CodeInput';
import PostPreview from '../Components/PostPreview';

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

        const { width, height } = postRef.current.getBoundingClientRect();

        toJpeg(postRef.current, {
            quality: 0.95,
            width: width,
            height: height,
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
            <div className="w-1/3 bg-white rounded-lg shadow-md p-6 mr-4">
                <PostTypeSelector selectedPostType={selectedPostType} setSelectedPostType={setSelectedPostType} />
                <br />
                <CodeInput code={code} setCode={setCode} lang={lang} setLang={setLang} />

                <ExportButton onClick={exportAsImage} />
            </div>
            <div className="w-2/3 bg-white rounded-lg shadow-md p-6">
                <PostPreview PostComponent={PostComponent} postRef={postRef} code={code} lang={lang} />
            </div>
        </div>
    );
}

export default InstagramPost;
