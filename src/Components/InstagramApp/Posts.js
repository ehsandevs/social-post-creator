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
    </>
}

export default Posts;