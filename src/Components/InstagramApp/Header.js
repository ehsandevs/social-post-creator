import { ReactComponent as IGLogo } from '../../Assets/Icons/ig-logo.svg';
import { ReactComponent as IGColorMode } from '../../Assets/Icons/ig-color-mode.svg';
import { ReactComponent as IGNotification } from '../../Assets/Icons/ig-notification.svg';
import { ReactComponent as IGDM } from '../../Assets/Icons/ig-dm.svg';

const Header = () => {
    return <header className="bg-zinc-950 flex items-center justify-between p-4">
        <a href="./index.html">
            <IGLogo />
        </a>
        <div className="flex space-x-5 items-center justify-center">
            <div>
                <a href="./light.html">
                    <IGColorMode />
                </a>
            </div>
            <div className="relative">
                <div className="w-2 h-2 bg-red-500 rounded-full absolute right-0 top-0.1"></div>
                <IGNotification />
            </div>
            <div className="relative">
                <div
                    className="flex items-center justify-center w-4 h-4 bg-red-500 rounded-full absolute left-3.5 bottom-3.5 text-[10px] text-white">
                    2
                </div>
                <IGDM />
            </div>
        </div>
    </header>
}

export default Header;