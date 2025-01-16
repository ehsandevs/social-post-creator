import React from 'react';

const Header = ({ label = 'Code Snippet' }) => {
    return (
        <div className="flex justify-between items-center px-5 py-3 bg-gray-900 border-b border-gray-700">
            <div className="flex gap-2">
                <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-gray-400 text-lg font-bold">{label}</span>
            <div></div>
        </div>
    );
};

export default Header;