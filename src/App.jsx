// import Random from "./components/Random";
// import Tag from "./components/Tag";
// import Spinner from "./components/Spinner";

// export default function App() {
//   return (
//     <div className="w-full h-screen flex flex-col relative background">
//       <h1 className="text-black rounded-lg text-center border-8 px-3 py-3 font-bold text-[40px] mt-5 ml-4 mr-5 bg-white ">RANDOM GIFS</h1>
//       <div className="flex flex-col w-full items-center gap-y-10 mt-10">
//         <Random/>
//         <Tag/>
        
//       </div>      
//     </div>
//   );
// }

import Random from "./components/Random";
import Tag from "./components/Tag";
import Spinner from "./components/Spinner";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col relative background">
      <h1 className="text-black rounded-lg text-center border-8 px-3 py-3 font-bold text-[40px] mt-5 ml-4 mr-5 bg-white ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-10">
        <Random/>
        <Tag/>
      </div>      
    </div>
  );
}
