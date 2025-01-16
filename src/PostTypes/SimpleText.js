import React from 'react';

const SimpleText = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="post-design" style={{ width: '1080px', height: '1080px', backgroundColor: 'paleturquoise' }}>
            <h1 style={{ color: 'white' }}>Instagram Post</h1>
            <h2>Design your Instagram post here</h2>
        </div>
    );
});

export default SimpleText;
