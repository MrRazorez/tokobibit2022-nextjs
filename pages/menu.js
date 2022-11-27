import React from "react";

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ['Aku','Anak','Sehat','Tubuhku','Cacat','Bentar','Bentar','Ehhh','Wkwkwkwkwkwk']
        };
    }

    render() {
        return (
            <>
                <div className="container bg-[#037E00] h-50 mx-auto">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row">
                            <h1 className="text-3xl text-white font-['Merienda'] ml-2">Bibit HerliAnto</h1>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="text-white hover:text-black p-4 ">Home</a>
                            <a href="#" className="text-white hover:text-black p-4 ">User</a>
                            <a href="#" className="text-white hover:text-black p-4 ">Cart</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <h2 className="text-3xl">Daftar Bibit</h2>
                </div>

                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-4 gap-10">
                    {this.state.data.map((v, i) => {
                        return(
                            <div className="shadow-lg rounded-lg" key={i}>
                                <a href="#">
                                    <img src="asset/tree.jpg" className="rounded-tl-lg rounded-tr-lg"/>
                                </a>
                                <div className="p-5">
                                    <h3><a href="#">Mystical Wise Tree</a></h3>
                                    <div className="text-black font-bold">
                                        <h4><a href="#">Rp. 420.000</a></h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}