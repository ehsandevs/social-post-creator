import React, { forwardRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PostWrapper from '../../Components/HOC/PostWrapper';
import Header from './Header';

const CodeBlockPost = forwardRef((props, ref) => {
    const { code, language = 'javascript', isExport = false } = props;

    return (
        <div className="w-[95%] border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
            <Header />
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    fontFamily: "monospace, 'Fira Code', 'Courier New'",
                    lineHeight: '1.4',
                    fontSize: isExport ? '1.5rem' : '0.75rem',
                    padding: '30px',
                    borderRadius: '0 0 12px 12px',
                }}
                codeTagProps={{
                    lineHeight: 'inherit',
                    fontSize: 'inherit',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
});

export default PostWrapper(CodeBlockPost, { forwardRef: true });
