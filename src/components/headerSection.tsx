import { IoMenu } from "react-icons/io5";




const HeaderSection =()=> {
    return (
        <header className="w-screen flex flex-1 fixed">
            <div className="flex flex-1 mx-auto items-center justify-between max-w-2xl py-4">
                <h2 className="text-2xl font-bold ml-2">PC</h2>
                <div className="text-2xl cursor-pointer mr-2"><IoMenu /></div>
                
            </div>
        </header>
    )
}

export default HeaderSection;