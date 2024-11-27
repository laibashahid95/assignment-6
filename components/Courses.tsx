export default function Courses (){
    return(
        <main className="h-[1742px]" >
            <div >
                <h1 className="text-5xl font-bold flex justify-center pt-32">Courses</h1>
            </div>
            <div className="flex justify-center pt-6">
                <p>Your Ultimate Guide To Learning</p>
            </div>
            <div className="flex justify-center pt-16">
                <h1 className="text-sm space-x-5">
                    <span className="underline">Popular</span>
                    <span> Recommended</span>
                    <span>Best Price</span>
                </h1>
            </div>
            <div className="flex space-x-6 ml-auto pl-8 pt-20" >
                <img src="designcard.png"></img>
                <img src="programmingcard.png"></img>
                <img src="businesscard.png"></img>

            </div>
            <div className="flex space-x-6 ml-auto pl-8 pt-20" >
                <img src="Artcard.png"></img>
                <img src="Lawcard.png"></img>
                <img src="Techcard.png"></img>                
            </div>

            <div className="flex justify-center pt-32">
            <button className="rounded group relative border-x-2 border-y-2 h-12 w-48 bg-transparent border-black text-lg text-black hover:bg-slate-300">View All Courses</button> 

            </div>
        </main>
    )
}