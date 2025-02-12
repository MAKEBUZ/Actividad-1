import Image from "next/image";

export default function Home() {
  return (
    <main className = 'bg-white flex items-center justify-center w-screen h-screen' >
      <section className='bg-white rounded-lg shadow-lg shadow-gray-500 border-red-400 border-2 overflow-hidden w-96 h-96'>
        <img src='https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg' 
        alt='Landscape' className='flex-nowrap'/>
        <div >
          <h1 className='text-black font-bold m-5'>Red Heaven</h1>
          <p className="text-gray-500 text-justify text-sm m-5 text-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores velit doloribus eaque est rerum illo officia fuga temporibus, magnam vel, odio tenetur quibusdam nemo id possimus fugit voluptas sit inventore?</p>
          <span className='bg-red-400 rounded-lg text-sm m-5'>#tailwind</span>
          <span className='bg-red-400 rounded-lg text-sm'>#frontendeverything</span>
        </div>
      </section>
    </main>
  );
} 