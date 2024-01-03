import Lanyard from "./lanyard"
import React from "react"


export default function Greeting() {
   
 
    return (
        <div className="lg:flex flex-row sm:inline">
            <div className="lg:w-1/2 mt-24 lg:mt-5">
                <h1 className="text-3xl text-center">Hello! you can call me ustav 🤙</h1>
                <h2 className="text-xl text-center">I'm a Brazilian front-end developer but also a <a href="" className="underline">chesmitry and design learner</a> </h2>
            </div>
            <div className="lg:w-1/2 p-3 mt-10 lg:mt-5">
                <Lanyard />
            </div>
        </div>
    )
}