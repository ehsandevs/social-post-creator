import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlockPost = React.forwardRef((props, ref) => {
    const { code, language = 'javascript' } = props;

    return (
        <div
            ref={ref}
            className="w-[1080px] h-[1080px] bg-gray-900 text-white p-8 flex flex-col justify-center items-center font-sans"
        >
            <div className="w-[95%] border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
                {/* Header Bar */}
                <div className="flex justify-between items-center px-5 py-3 bg-gray-900 border-b border-gray-700">
                    <div className="flex gap-2">
                        <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                        <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
                        <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                    </div>
                    <span className="text-gray-400 text-lg font-bold">Code Snippet</span>
                    <div></div>
                </div>
                {/* Code Block */}
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        fontFamily: "monospace, 'Fira Code', 'Courier New'",
                        lineHeight: "1.4",
                        fontSize: "1.5rem",
                        padding: '30px',
                        borderRadius: '0 0 12px 12px',
                        backgroundColor: '#2d2d2d'
                    }}
                    codeTagProps={{
                        lineHeight: "inherit",
                        fontSize: "inherit"
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
});

export default CodeBlockPost;
