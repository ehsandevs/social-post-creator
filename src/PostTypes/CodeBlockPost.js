import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlockPost = React.forwardRef((props, ref) => {
    const { code, language = 'javascript' } = props;

    return (
        <div
            ref={ref}
            className="post-design"
            style={{
                width: '1080px',
                height: '1080px',
                backgroundColor: '#282c34',
                color: 'white',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h1 style={{ marginBottom: '20px' }}>Code Snippet</h1>
            <div
                style={{
                    width: '90%',
                    border: '1px solid #444',
                    borderRadius: '8px',
                    overflow: 'hidden',
                }}
            >
                <SyntaxHighlighter
                    language={language}
                    style={dark}
                    customStyle={{
                        fontSize: '16px',
                        padding: '20px',
                        borderRadius: '8px',
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
});

export default CodeBlockPost;
