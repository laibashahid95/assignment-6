export default function Hero() {
    return (
      <main className="min-h-screen">

        <div className="pt-[100px] md:pt-[267px] px-4 md:pl-28">
          <img src="Heading.png" className="w-full max-w-md md:max-w-none" />
        </div>
        <div className="pt-10 px-4 md:pl-28 space-y-4 md:space-y-0 md:space-x-2 flex flex-col md:flex-row items-center">
          <button className="rounded group relative border-2 h-12 w-full md:w-48 border-black text-white bg-black hover:bg-slate-400">
            Start Learning Now
          </button>
          <button className="rounded group relative border-2 h-12 w-full md:w-48 border-black text-black bg-transparent hover:bg-slate-300">
           explore courses
          </button>
        </div>
        <div className="flex justify-center md:justify-end relative -top-[300px] md:-top-[570px] px-4">
          <img
            src="image.jpeg"
            className="w-full max-w-md md:w-[640px] h-auto md:h-[900px]"
           
          />
        </div>
  
        <div className="flex justify-center relative -top-[300px] md:-top-[570px] px-4">
          <img
            src="logo2.png"
            className="w-full max-w-lg md:w-[1280px]"
          
          />
        </div>
      </main>
    );
  }
  