const BottomNav = () => {
    return <footer className="px-3 py-5">
        <div className="flex justify-around items-center">
            <a href="./index.html">
                <svg aria-label="Home" className="_ab6- cursor-pointer hover:text-gray-400" color="rgb(245, 245, 245)"
                    fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <title>Home</title>
                    <path
                        d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                        fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
            </a>
            <svg aria-label="Explore" className="_ab6- cursor-pointer hover:text-gray-400" color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>Search</title>
                <path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    x1="16.511" x2="22" y1="16.511" y2="22"></line>
            </svg>
            <svg aria-label="Home" className="x1lliihq x1n2onr6 cursor-pointer hover:text-gray-400" color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>Post</title>
                <path
                    d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
            </svg>
            <svg aria-label="Reels" className="_ab6- cursor-pointer hover:text-gray-400" color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049" x2="21.95"
                    y1="7.002" y2="7.002"></line>
                <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
                <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
                <title>Reels</title>
                <path
                    d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <path
                    d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                    fill-rule="evenodd"></path>
            </svg>
            <a href="https://github.com/danielace1/Instagram-UI-Tailwind" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" color="rgb(245, 245, 245)"
                    className="cursor-pointer hover:text-gray-400" fill="rgb(245, 245, 245)">
                    <title>Github</title>
                    <path fill="currentColor"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </a>
        </div>
    </footer>
}

export default BottomNav;