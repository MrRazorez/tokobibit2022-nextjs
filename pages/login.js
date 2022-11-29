export default function Login() {
    return (
        <>
            <div className="w-full h-screen absolute z-[0]">
                <img className="w-full h-full" src="asset/plant1.png" alt=""/>
            </div>

            <div className="w-full h-screen absolute z-[1] flex items-center">
            
                <section className="w-1/4 m-auto">
                    <h2 className="text-center text-white font-['Merienda'] text-3xl font-bold mb-10">bibit HerliAnto</h2>
                    <form action="api/login" method="post" encType="application/json">
                        <div className= "relative text-white">
                        { /* / Username / Nomor Handphone    */}
                        <input className="bg-transparent border-b-2 border-white text-white  mb-6 w-full outline-none" type="text" name="email" id="" placeholder="Email"/>
                            <span className="absolute right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </span>
                        </div>
                        <div className="relative text-white">
                            <input className="bg-transparent border-b-2 border-white text-white mb-6 w-full outline-none" type="password" name="pass" id="" placeholder="Password"/>
                            <span className="absolute right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </span>
                        </div>
                        <div>
                        <a href= "" type="submit" className="bg-[#037E00] text-white text-center font-bold w-full py-2 rounded-md">Masuk</a> 
                                
                        </div>
                    </form>
                    <div className= "text-center text-white mt-6">
                        <p className= "font-thin">Belum punya akun ? 
                            <span className= "font-bold">
                                <a href="register">Daftar</a>
                                
                            </span>
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}