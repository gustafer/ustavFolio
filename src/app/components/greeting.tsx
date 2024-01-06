"use client"
import { motion } from "framer-motion"
import Lanyard from "./lanyard"
import React from "react"

export default function Greeting() {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:flex flex-row sm:inline">
            <div className="lg:w-1/2 lg:mt-5 lg:mb-0">
                <div className="p-10 md:p-24 lg:p-32 " >
                    <h1 className="text-3xl lg:text-4xl">Hello! you can call me ustav 🤙</h1>
                    <h2 className="text-2xl lg:text-3xl mt-3">I'm a Brazilian 16 y/o front-end developer but also a <a href="" className="underline">chemistry and design learner</a> </h2>
                    <div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 p-3 mt-10 lg:mt-5 ">
                <Lanyard />
            </div>
        </motion.div>
    )
}