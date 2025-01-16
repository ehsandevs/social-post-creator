import { ReactComponent as IGPlusStory } from '../../Assets/Icons/ig-plus-story.svg';

const Stories = () => {
    return (
        <section className="my-3 px-3 flex space-x-2 items-center overscroll-auto overflow-x-auto">
            <div className="flex flex-col justify-center items-center">
                <div className="relative">
                    <img src="/images/sudharsan.jpg" alt="sudharsan" className="w-16 rounded-full" />
                    <div className="absolute top-11 left-12 rounded-full bg-white cursor-pointer">
                        <IGPlusStory />
                    </div>
                </div>
                <span className="text-xs text-gray-300 mt-1 font-semibold">Your Story</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/images/anbu.jpg" alt="anbu"
                    className="w-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5" />
                <span className="text-xs text-gray-300 mt-1 font-semibold">anbuselvan</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/images/./sri-shankar.jpg" alt="sri-shankar"
                    className="w-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5 " />
                <span className="text-xs text-gray-300 mt-1 font-semibold">srishankar</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/images/madan-gowri.jpg" alt="madan-gowri"
                    className="w-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5 " />
                <span className="text-xs text-gray-300 mt-1 font-semibold">madangowri</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/images/code_ace_.jpg" alt="code_ace_"
                    className="w-16 rounded-full border-2 border-green-500 p-0.5" />
                <span className="text-xs text-gray-300 mt-1 font-semibold">code_ace_</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/images/ronaldo.jpg" alt="ronaldo" className="w-16 rounded-full border-2 border-gray-400 p-0.5" />
                <span className="text-xs text-gray-300 mt-1 font-semibold">cristiano</span>
            </div>
        </section>
    );
}

export default Stories;