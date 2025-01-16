import React from 'react';

const PostWrapper = (WrappedComponent) => {
    return React.forwardRef(({ isExport = false, ...props }, ref) => (
        <div
            ref={ref}
            className={`bg-gray-900 text-white p-8 flex flex-col justify-center items-center font-sans ${isExport ? 'w-[1080px] h-[1080px]' : 'w-full max-w-[540px] aspect-square'
                }`}
            style={{
                transform: isExport ? 'none' : 'scale(1)', // Scale down display
                transformOrigin: 'top left', // Ensure proper alignment for scaling
                width: isExport ? '1080px' : '100%', // Full size for export
                height: isExport ? '1080px' : 'auto',
            }}
        >
            <WrappedComponent {...props} />
        </div>
    ));
};

export default PostWrapper;
