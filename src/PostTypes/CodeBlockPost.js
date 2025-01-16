import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlockPost = React.forwardRef((props, ref) => {
    const { code, language = 'javascript' } = props;

    return (
        <div
            ref={ref}
            className="post-design"
            style={{
                width: '1080px',
                height: '1080px',
                backgroundColor: '#1e1e1e',
                color: 'white',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div
                style={{
                    width: '95%',
                    border: '1px solid #444',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#2d2d2d',
                }}
            >
                {/* Header Bar */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '15px 20px',
                        backgroundColor: '#1e1e1e',
                        borderBottom: '1px solid #444',
                    }}
                >
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ width: '14px', height: '14px', backgroundColor: '#ff5f56', borderRadius: '50%' }}></span>
                        <span style={{ width: '14px', height: '14px', backgroundColor: '#ffbd2e', borderRadius: '50%' }}></span>
                        <span style={{ width: '14px', height: '14px', backgroundColor: '#27c93f', borderRadius: '50%' }}></span>
                    </div>
                    <span style={{ color: '#ccc', fontSize: '16px', fontWeight: 'bold' }}>Code Snippet</span>
                    <div></div>
                </div>
                {/* Code Block */}
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        fontFamily: "monospace, 'Fira Code', 'Courier New'",
                        fontSize: '23px', // Increased for Instagram readability
                        lineHeight: '1.6', // Add spacing for clarity
                        padding: '30px',
                        borderRadius: '0 0 12px 12px',
                        backgroundColor: '#2d2d2d'
                    }}
                    codeTagProps={{
                        fontSize: '30px', // Increased for Instagram readability
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
});

export default CodeBlockPost;
