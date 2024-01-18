"use client"
import { useState } from "react";
import ToggleTheme from "./toggletheme"
import { AnimatePresence, motion, useAnimationControls } from "framer-motion"


export default function Navbar() {
    const controls = useAnimationControls();
    const [show, setShow] = useState(false)


    const handleClick = () => {
        if (show === false) {
            controls.start("show");
            // console.log('im openning!')
            setShow(!show)

        } else{
            controls.start("close")
            // console.log('im closing!')
            setShow(!show)

        }
    };

    return (
        <div className="fixed navbar bg-base-200 border-b border-solid border-zinc-500">
            <div className="navbar transition duration-500">
                <a className="btn btn-ghost text-3xl ml-2"> <span className="text-slate-700/[.9]">&lt;</span> ustav <span className="text-slate-700/[.9]">/&gt;</span></a>
            </div>
            {/* mobile dropdown */}
            <details className="dropdown dropdown-bottom dropdown-left mr-10 lg:hidden">
                <motion.summary
                    onClick={handleClick}
                    className="m-1 btn lg:hidden"
                ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></motion.summary>
                <AnimatePresence>
                    <motion.ul
                        animate={controls}
                        transition={{ duration: 0.3 }}
                        variants={{
                            initial: {
                                x: 100,
                                opacity: 0,
                            },
                            show: {
                                x: 0,
                                opacity: 1,
                            },
                            close: {
                                x: 100,
                                opacity: 0,
                            }
                        }}
                        initial="initial"

                        className=" p-2 shadow dropdown-content z-[1] bg-base-200  border border-solid border-zinc-500 rounded-2xl backdrop-blur bg-opacity-75">
                        <section>
                            <span className="" >
                                <a className="btn btn-ghost text-2xl "> Education </a>
                                <a className="btn btn-ghost text-2xl "> Skills </a>
                                <a className="btn btn-ghost text-2xl "> Certificates </a>
                                <a className="btn btn-ghost text-2xl "> Games </a>
                                <a className="btn btn-ghost text-2xl "> Contacts </a>
                                <div className="flex justify-center">
                                    <ToggleTheme />
                                </div>
                            </span>
                        </section>
                    </motion.ul>
                </AnimatePresence>
            </details>
            {/* desktop navbar*/}
            <div className=" hidden lg:flex absolute right-10 transition duration-500">
                <ul className="menu menu-horizontal px-1">
                    <a className="btn btn-ghost text-2xl "> Education </a>
                    <a className="btn btn-ghost text-2xl "> Skills </a>
                    <a className="btn btn-ghost text-2xl "> Certificates </a>
                    <a className="btn btn-ghost text-2xl "> Games </a>
                    <a className="btn btn-ghost text-2xl "> Contacts </a>
                    <label className="swap swap-rotate ml-10 ">
                        <ToggleTheme />
                    </label>
                </ul>
            </div>
        </div>
    )
}