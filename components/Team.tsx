export default function Team() {
    return (
        <main className="w-full max-w-[1280px] mx-auto px-4 lg:px-0 h-auto">
           
            <div>
                <h1 className="text-3xl lg:text-5xl font-bold text-center pt-16 lg:pt-32">
                    Our Team
                </h1>
            </div>

            
            <div className="flex justify-center pt-4 lg:pt-6">
                <p className="text-sm lg:text-base text-center max-w-[900px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 pt-10 lg:pt-20">
                <img src="james.png" alt="James" className="w-full object-cover" />
                <img src="joseph.png" alt="Joseph" className="w-full object-cover" />
                <img src="josephN.png" alt="Joseph N" className="w-full object-cover" />
                <img src="erick.png" alt="Erick" className="w-full object-cover" />
                <img src="stephen.png" alt="Stephen" className="w-full object-cover" />
                <img src="john.png" alt="John" className="w-full object-cover" />
            </div>
        </main>
    );
}
