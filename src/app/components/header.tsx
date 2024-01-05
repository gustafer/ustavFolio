"use client"
import React, { useRef } from "react"
import ToggleTheme from "./toggletheme"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"


export default function Header() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <div className="navbar bg-base-100">
            <div className="navbar">
                <a className="btn btn-ghost text-3xl ml-2"> <span className="text-slate-700/[.9]">&lt;</span> ustav <span className="text-slate-700/[.9]">/&gt;</span></a>
            </div>
            {/* mobile dropdown */}
            <details className="dropdown dropdown-bottom dropdown-left mr-10 lg:hidden">
                <summary className="m-1 btn lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></summary>
                <ul

                    className="p-2 shadow dropdown-content z-[1]  border border-solid border-zinc-500 rounded-2xl backdrop-blur bg-base-100 bg-opacity-75">
                    <section ref={ref}>
                        <span style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "1s",
                        }}>
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
                </ul>
            </details>
            {/* desktop navbar*/}
            <div className=" hidden lg:flex fixed right-10 ">
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