import { ReactComponent as IGPostThreeDots } from '../../Assets/Icons/ig-post-three-dots.svg';
import { ReactComponent as IGLike } from '../../Assets/Icons/ig-like.svg';
import { ReactComponent as IGComment } from '../../Assets/Icons/ig-comment.svg';
import { ReactComponent as IGShare } from '../../Assets/Icons/ig-share.svg';
import { ReactComponent as IGSave } from '../../Assets/Icons/ig-save.svg';

const Posts = ({ children }) => {
    return <>
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
            <div className="py-3">
                {children}
                {/* <img src="/images/meme-1.jpg" alt="meme-1" className="rounded" /> */}
            </div>

            {/* <!-- Like Sections --> */}
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

        {/* <section className="my-3 px-3 text-white">
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-2">
                    <img src="/images/sony-music-south.jpg" alt="sony-music-south"
                        className="w-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5" />
                    <h6 className="font-medium text-sm">sonymusic_south</h6>
                    <div>
                        <svg aria-label="Verified" className="x1lliihq x1n2onr6" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)"
                            height="12" role="img" viewBox="0 0 40 40" width="12">
                            <title>Verified</title>
                            <path
                                d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                fill-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"
                        className="text-gray-200 fill-current cursor-pointer hover:text-white">
                        <path
                            d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16Zm16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z" />
                    </svg>
                </div>
            </div>
            <div className="py-3">
                <img src="/images/leo.jpg" alt="leo" className="rounded" />
            </div>

            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <svg aria-label="Unlike" className="x1lliihq x1n2onr6 cursor-pointer" color="rgb(255, 48, 64)"
                        fill="rgb(255, 48, 64)" height="24" role="img" viewBox="0 0 48 48" width="24">
                        <title>Unlike</title>
                        <path
                            d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                        </path>
                    </svg>
                    <svg aria-label="Comment" className="x1lliihq x1n2onr6 cursor-pointer hover:text-gray-400"
                        color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title>Comment</title>
                        <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                            stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                    <svg aria-label="Share Post" className="x1lliihq x1n2onr6 cursor-pointer hover:text-gray-400"
                        color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title>Share Post</title>
                        <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3"
                            y2="10.083"></line>
                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor"
                            stroke-linejoin="round" stroke-width="2"></polygon>
                    </svg>
                </div>
                <div>
                    <svg aria-label="Save" className="x1lliihq x1n2onr6 cursor-pointer" color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title>Save</title>
                        <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2"></polygon>
                    </svg>
                </div>
            </div>
            <div className="my-2 font-medium text-sm">78,861 likes</div>
            <div className="flex space-x-2 text-sm">
                <a href="https://www.instagram.com/sonymusic_south/" className="font-medium">sonymusic_south</a>
                <p> <span className="text-blue-400">#LeoTrailer</span> IN 3️⃣ DAYS! ❤️‍🔥</p>
            </div>
            <div className="text-sm text-gray-400 py-2 cursor-pointer">View all 93 comments</div>
            <div className="text-xs text-gray-400 cursor-pointer">2 DAYS AGO</div>
        </section> */}

        {/* <section className="my-4 px-3 text-white">
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-2">
                    <img src="/images/anbu.jpg" alt="anbu"
                        className="w-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5" />
                    <h6 className="font-medium text-sm">anbuselvanrocky</h6>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"
                        className="text-gray-200 fill-current cursor-pointer hover:text-white">
                        <path
                            d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16Zm16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z" />
                    </svg>
                </div>
            </div>
            <div className="py-3">
                <video controls autoplay controlsList="nodownload" className="h-96 w-full">
                    <source src="/video/web-dev-vid.mp4" type="video/mp4" />
                    <source src="/video/web-dev-vid.mp4" type="video/ogg" />
                </video>
            </div>

            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <svg aria-label="Unlike" className="x1lliihq x1n2onr6 cursor-pointer" color="rgb(255, 48, 64)"
                        fill="rgb(255, 48, 64)" height="24" role="img" viewBox="0 0 48 48" width="24">
                        <title>Unlike</title>
                        <path
                            d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                        </path>
                    </svg>
                    <svg aria-label="Comment" className="x1lliihq x1n2onr6 cursor-pointer hover:text-gray-400"
                        color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title>Comment</title>
                        <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                            stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                    <svg aria-label="Share Post" className="x1lliihq x1n2onr6 cursor-pointer hover:text-gray-400"
                        color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title>Share Post</title>
                        <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3"
                            y2="10.083"></line>
                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor"
                            stroke-linejoin="round" stroke-width="2"></polygon>
                    </svg>
                </div>
                <div>
                    <svg aria-label="Save" className="x1lliihq x1n2onr6 cursor-pointer" color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title>Save</title>
                        <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2"></polygon>
                    </svg>
                </div>
            </div>
            <div className="my-2 font-medium text-sm">137 likes</div>
            <div className="flex space-x-2 text-sm">
                <a href="https://www.instagram.com/anbuselvanrocky/" className="font-medium">anbuselvanrocky</a>
                <p>Things to learn before coding React Projects...</p>
            </div>
            <div className="text-sm text-gray-400 py-2 cursor-pointer">View all 9 comments</div>
            <div className="text-xs text-gray-400 cursor-pointer">23 JUNE 2022</div>
        </section> */}
    </>
}

export default Posts;