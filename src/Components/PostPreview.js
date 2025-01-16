import React from 'react';

const PostPreview = ({ PostComponent, postRef, code, lang }) => (
    <div
        className="border border-gray-300 p-4 rounded-lg overflow-hidden"
        style={{
            width: '100%',
            maxWidth: '540px',
            aspectRatio: '1 / 1',
            position: 'relative',
        }}
    >
        <PostComponent ref={postRef} code={code} language={lang} />
    </div>
);

export default PostPreview;
