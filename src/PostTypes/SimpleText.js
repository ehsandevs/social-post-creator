import React from 'react';
import PostWrapper from '../Components/HOC/PostWrapper'; // Ensure this path is correct

const SimpleText = (props) => {
    return (
        <div className="w-[95%] overflow-hidden bg-paleturquoise">
            <h1 style={{ color: 'white' }}>Instagram Post</h1>
            <h2>Design your Instagram post here</h2>
        </div>
    );
};

export default PostWrapper(SimpleText);
