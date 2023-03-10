// import Logo from "../../media/FG-logo.jpg"

export default function Login() {

    // <img src={Logo} alt=""   />


    return <section className="w-full h-screen mt-4">

        <div className="w-1/4 h-3/5 rounded-xl mx-auto relative align-middle bg-violet-500 text-white">
            <div className="text-center pt-2 w-full rounded-md bg-violet-400">
                <h1 className="inline text-4xl font-semibold text-violet-600"> F<span className=" text-rose-600 ">akeG</span><span className=" text-violet-600">ram</span></h1>
            </div>
            <div className="">
                <form className="w-full pb-2  relative  " >
                    <div className="mx-auto w-full block relative text-left pt-2">
                        <label htmlFor="username" className="block ml-12 my-4 text-lg font-semibold text-white"> Name</label>
                        <input type="text" id="username" className="block mx-auto pl-2 h-9 mt-4 w-3/4 rounded-lg bg-violet-900 text-violet-200 outline-2  outline  outline-gray-600 hover:outline-gray-400 font-black text-lg font-serif  " autoComplete="off" />

                    </div>
                    <div className="mx-auto w-full block relative text-left my-2">
                        <label htmlFor="pswrd" className="block ml-12 my-4 text-lg font-semibold">Password</label>
                        <input type="password" id="pswrd" className="block mx-auto pl-2 h-9 mt-4 w-3/4 rounded-lg bg-violet-900 text-violet-200 outline-2  outline  outline-gray-600 hover:outline-gray-400 " />
                    </div>
                    <div className="w-full text-right my-4">
                        <a href="#" className="mr-10 hover:text-blue-900 text-sm font-normal ">Forgot your password?</a>
                    </div>

                    <input type="submit" value="Send" className="block mx-auto h-8 mt-4 w-3/4 rounded-lg cursor-pointer bg-violet-800 hover:bg-violet-600  focus:bg-violet-700 border-2 border-b-0  focus:border-t-0 focus:border-b-2" />

                </form>
                <div className="w-full text-center my-6">
                    <p>Haven't Registred yet? <a href="#" className="border-b-2 hover:border-white border-pink-800 text-white hover:text-pink-700  font-bold ">Register Now </a>
                    </p>
                </div>
            </div>
        </div>
    </section>

};
