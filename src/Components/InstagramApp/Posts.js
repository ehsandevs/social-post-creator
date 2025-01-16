import React, { useState } from 'react';
import { ReactComponent as IGPostThreeDots } from '../../Assets/Icons/ig-post-three-dots.svg';
import { ReactComponent as IGLike } from '../../Assets/Icons/ig-like.svg';
import { ReactComponent as IGComment } from '../../Assets/Icons/ig-comment.svg';
import { ReactComponent as IGShare } from '../../Assets/Icons/ig-share.svg';
import { ReactComponent as IGSave } from '../../Assets/Icons/ig-save.svg';

const Posts = ({ children }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    const images = [
        '/images/meme-1.jpg',
        '/images/leo.jpg', // dummy
    ];

    return (
        <section className="my-3 px-3 text-white">
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-2">
                    <img src="/images/millionaires-formula.jpg" alt="millionaires-formula"
                        className="w-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5" />
                    <h6 className="font-medium text-sm">millionairesformula</h6>
                    <span className="text-gray-500 text-2xl">&middot;</span>
                    <span className="text-gray-500 text-xs">3 m</span>
                </div>
                <div>
                    <IGPostThreeDots />
                </div>
            </div>
            <div className="py-3 relative">
                {currentImageIndex === 1 ? children : <img src={images[currentImageIndex]} alt={`slide-${currentImageIndex}`} className="rounded w-full" />}

                {images.length > 1 && (
                    <>
                        <button onClick={handlePrevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">‹</button>
                        <button onClick={handleNextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">›</button>
                    </>
                )}
                <div className="flex justify-center space-x-2 mt-2">
                    {images.map((_, index) => (
                        <span key={index} className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}></span>
                    ))}
                </div>
            </div>


            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <IGLike />
                    <IGComment />
                    <IGShare />
                </div>
                <div>
                    <IGSave />
                </div>
            </div>
            <div className="my-2 font-medium text-sm">4,047 likes</div>
            <div className="flex space-x-2 text-sm">
                <a href="https://www.instagram.com/millionairesformula/" className="font-medium">millionairesformula</a>
                <p>Just Don’t give up👊🔥...</p>
            </div>
            <div className="text-sm text-gray-400 py-2 cursor-pointer">View all 13 comments</div>
        </section>
    );
};

export default Posts;