import Lanyard from "./lanyard"

export default function Greeting() {
    return (
        <div className="flex h-96">
            <h1 className="text-4xl text-center w-1/2">Olá, eu sou o ustav 🤙</h1>
            <div className="avatar placeholder w-1/2">
            <Lanyard />
            </div>
        </div>
    )
}