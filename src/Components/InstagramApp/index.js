import Stories from './Stories';
import Posts from './Posts';
import BottomNav from './BottomNav';
import Header from './Header';


const IG = (props) => {
    return <div className="bg-zinc-950 max-w-lg mx-auto">

        <Header />
        <hr className="border-gray-700" />

        <Stories />

        <Posts {...props} />
        <hr className="border-gray-700" />

        <BottomNav />

    </div>
}



export default IG;