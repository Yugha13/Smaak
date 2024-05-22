
import { ContentBox } from "./ContentBox";
import { Boxes } from "@/components/ui/background-boxes";
import Open from "@/Foodies Soup Kitchen.png"

export function Home() {
  return (
    <div className="w-[100%] ">
    
        <div className="h-96 relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg h-screen ">
            <div className="overflow-hidden">
                <Boxes />
            </div>
    <div className="h-[40rem] w-fit  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 flex">
        <img src={Open} alt=''/>
      </h1>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 flex">
        SMAAK
      </h1>
      <div className="w-[40rem] h-fit relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        

        {/* Radial Gradient to prevent sharp edges */}
      </div>
    </div>
    </div>
      <ContentBox/>
      
    </div>
  );
}
