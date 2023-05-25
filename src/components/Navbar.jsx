import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, Providers } from '../config/firebase'


function Navbar() {
    const [ isVisible, setIsVisible ] = useState(false);

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ){
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(!isVisible)
    }

  return (
    <nav 
        className="flex items-center justify-between flex-wrap bg-gradient-to-b 
        from-indigo-900 via-blue-500 to-orange-500 p-6">
        <div className="flex items-center flex-shrink-o text-white hover:text-slate-300 mr-6">
            <Link to='/' className="font-semibold text-2xl tracking-light">Astro Dastro</Link>
        </div>
        <div className="block">
            <button
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-white hover:text-slate-300 text-2xl"
                >
                    { isVisible ? (
                        <p> Menu <i className="fa-solid fa-shuttle-space duration-300 rotate-90"></i></p>
                        ) : (
                        <p> Menu <i className="fa-solid fa-shuttle-space duration-300 -rotate-90"></i></p>
                    )}
            </button>
        </div>
        { isVisible ? (
            <div className="w-full block flex-grow items-center">
                <button 
                    onClick={clicked}
                    className="p-3 m-5 border-2 border-white hover:border-slate-300 bg-gradient-to-t 
                    from-indigo-900 via-blue-500 to-orange-500 bg-opacity-75 rounded justify-center 
                    text-white hover:text-slate-300 hover:bg-orange-500">
                        <div>
                            <Link to='/' className="flex place-items-center lg:inline-block text-l">
                                Home
                            </Link>
                        </div>
                </button>
                <button 
                    onClick={clicked}
                    className="p-3 m-5 border-2 border-white hover:border-slate-300 bg-gradient-to-t 
                    from-indigo-900 via-blue-500 to-orange-500 bg-opacity-75 rounded justify-center 
                    text-white hover:text-slate-300 hover:bg-orange-500">
                        <div>
                            <Link to='/about' className="flex place-items-center lg:inline-block text-l">
                                About
                            </Link>
                        </div>
                </button>
                {
                    !auth.currentUser ? 
                
                        <button 
                            onClick={ () => { signInOnClick() }}
                            className="p-3 m-5 border-2 border-white hover:border-slate-300 bg-gradient-to-t 
                            from-indigo-900 via-blue-500 to-orange-500 bg-opacity-75 rounded justify-center 
                            text-white hover:text-slate-300 hover:bg-orange-500">
                                <div>
                                    <Link to='/' className="flex place-items-center lg:inline-block text-l">
                                        Login
                                    </Link>
                                </div>
                        </button>
                        :
                        <>
                            <button 
                                onClick={clicked}
                                className="p-3 m-5 border-2 border-white hover:border-slate-300 bg-gradient-to-t 
                                from-indigo-900 via-blue-500 to-orange-500 bg-opacity-75 rounded justify-center 
                                text-white hover:text-slate-300 hover:bg-orange-500">
                                    <div>
                                        <Link to='/eonet' className="flex place-items-center lg:inline-block text-l">
                                            EONET
                                        </Link>
                                    </div>
                            </button>
                            <button 
                                onClick={ () => { signOutOnClick() }}
                                className="p-3 m-5 border-2 border-white hover:border-slate-300 bg-gradient-to-t 
                                from-indigo-900 via-blue-500 to-orange-500 bg-opacity-75 rounded justify-center 
                                text-white hover:text-slate-300 hover:bg-orange-500">
                                    <div>
                                        <Link to='/about' className="flex place-items-center lg:inline-block text-l">
                                            Logout
                                        </Link>
                                    </div>
                            </button>
                        </>
                }
            </div>
        ) : (
            <></>
        )}
    </nav>
  )
}

export default Navbar