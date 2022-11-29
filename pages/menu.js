import axios from "axios";

export default function Menu(props) {
    var data = ['Aku','Anak','Sehat','Tubuhku','Cacat','Bentar','Bentar','Ehhh','Wkwkwkwkwkwk'];
    var { tanaman, dataTanaman } = props;

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
                {tanaman.map((v, i) => {
                    return(
                        <div className="shadow-lg rounded-lg" key={i}>
                            <a href="#">
                                <img src="asset/tree.jpg" className="rounded-tl-lg rounded-tr-lg"/>
                            </a>
                            <div className="p-5">
                                <h3><a href="#">{dataTanaman[v].nama}</a></h3>
                                <div className="text-black font-bold">
                                    <h4><a href="#">{dataTanaman[v].harga}</a></h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export async function getStaticProps() {
    var tanaman = [];
    var dataTanaman = {};
    try {
        await axios.get("http://localhost:3000/api/tanaman").then((res) => {
            tanaman = Object.keys(res.data.tanaman);
            dataTanaman = res.data.tanaman;
        });
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            tanaman,
            dataTanaman
        }
    }
}