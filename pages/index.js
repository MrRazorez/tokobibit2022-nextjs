export default function LandingPages(){
  return (
    <>
      <div className="w-full h-screen absolute z-[0]">
        <img className="w-full h-full" src="asset/plant1.png" alt=""/>
      </div>
      <div className="w-full h-screen absolute z-[1] px-10">
        <header className="font-['Merienda'] text-white text-3xl text-right px-[12px] pt-10">
          bibit Herlianto
        </header>

        <section className="font-['Inter'] text-white text-3xl flex flex-col gap-6 items-start justify-end w-1/3 h-3/6 mb-10">
        <p className="block font-bold text-5xl">Penyedia segala bibit tanaman terbaik</p>
            <p className="block font-bold text-xl">daerah Lampung</p>
            <p className="block text-lg">Bibit HerliAnto adalah perusahaan perorangan yang menjual segala jenis bibit tanaman yang berkualitas baik dan terpercaya</p>
        </section>

        <section className="flex justify-start items-center gap-4">
            <a href="login" className="bg-[#037E00] text-white text-center font-bold w-[180px] py-2 rounded-md">
                Kunjungi Toko
            </a>
            <a href="" className="bg-white text-[#037E00] text-center font-bold w-[180px] py-2 rounded-md">
                Tentang Kami
            </a>
        </section>
      </div>
    </>
  )
}