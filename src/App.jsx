import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background">
      <h1 className="text-white rounded-sm flex justify-center border-8 px-3 py-3 font-bold text-[40px] mt-5 ml-4 mr-5 ">RANDOM GIFS</h1>
      <div className="flex flex-col">
        <Random/>
        <Tag/>
      </div>      
    </div>
  );
}
