export default function CourseCategory(){
    return(
        <main className="w-[1280px] h-[1049px]">
            <div className="flex justify-center">
                <h1 className="text-5xl font-bold" >Explore Courses By Category</h1>
             </div>
               <div className="flex justify-center pt-9">
                 <p>Discover wide range of courses covering variety of subjects, taught by expert intructors.</p>
            </div>
            <div className="flex space-x-6 ml-auto pl-8 pt-20">
              <img src="design n devel.png"></img>
              <img src="marketing.png"></img>
              <img src="development.png"></img>
            </div>
            <div className="flex space-x-6 ml-auto pl-8 pt-20">
                <img src="communication.png"></img>
                <img src="digital mark.png"></img>
                <img src="self development.png"></img>
            </div>
            <div className="flex space-x-6 ml-auto pl-8 pt-20">
        <img src="business.png"></img>
        <img src="finance.png"></img>
        <img src="consulting.png"></img>
            </div>
            <div className="flex justify-center pt-32">
                <button className="rounded group relative border-x-2 border-y-2 h-12 w-48 bg-transparent border-black text-lg text-black hover:bg-slate-300">View All Courses</button>
            </div>
        </main>
    )
}