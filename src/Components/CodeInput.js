import React from 'react';

const CodeInput = ({ code, setCode, lang, setLang }) => (
    <>
        <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setLang(e.target.value)}
            value={lang}
        >
            <option value="javascript">Javascript</option>
            <option value="php">PHP</option>
            {/* Add other options here */}
        </select>
        <br />
        <textarea
            className="w-full h-[70%] border border-gray-300 p-4 rounded-lg"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Type your code here..."
        />
    </>
);

export default CodeInput;
