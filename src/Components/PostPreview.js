import React from 'react';

const PostPreview = ({ PostComponent, postRef, code, lang }) => (
    <div
        className="border border-gray-300 rounded-lg overflow-hidden"
        style={{
            width: '100%',
            maxWidth: '540px',
            aspectRatio: '1 / 1',
            position: 'relative',
            backgroundColor: '#fff',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
        }}
    >
        <PostComponent ref={postRef} code={code} language={lang} />
    </div>
);

export default PostPreview;
