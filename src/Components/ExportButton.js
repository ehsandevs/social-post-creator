import React from 'react';

const ExportButton = ({ onClick }) => (
    <button
        className=" w-full ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onClick}
    >
        Export
    </button>
);

export default ExportButton;
