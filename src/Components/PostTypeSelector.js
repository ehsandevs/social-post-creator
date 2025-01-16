import React from 'react';

const PostTypeSelector = ({ selectedPostType, setSelectedPostType }) => (
    <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setSelectedPostType(e.target.value)}
        value={selectedPostType}
    >
        <option value="simpleText">Simple Text</option>
        <option value="codeBlock">Code Block</option>
        {/* Add other options here */}
    </select>
);

export default PostTypeSelector;
