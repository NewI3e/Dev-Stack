import { Star } from "lucide-react";


type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type BodyProps = {
  technologies: Technology[];
  stack: Technology[];
  addToStack: (technology: Technology) => void;
  removeFromStack: (id: string) => void;
  removeAll: () => void;
};



function Body({
  technologies,
  stack,
  addToStack,
  removeFromStack,
  removeAll
}:BodyProps) {
  return (
    <main className="max-w-356.25 mx-auto px-4 py-10">

      
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h1>

        <p className="text-gray-500 mt-2">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        
        <div className="lg:col-span-3">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {technologies.map((technology) => {

              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div key={technology.id} className="border border-gray-200 rounded-xl p-4 bg-white">

                
                  <div className="flex justify-between items-start">

                    <img src={technology.icon} alt={technology.name} className="w-10 h-10 object-contain"/>

                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                      {technology.badge}
                    </span>

                  </div>


                
                  <h2 className="text-lg font-bold mt-4">
                    {technology.name}
                  </h2>


                  
                  <p className="text-sm text-gray-500 mt-2 min-h-15">
                    {technology.description}
                  </p>


                
                  <div className="flex justify-between items-center mt-4">

                    <span className="text-xs border px-2 py-1 rounded-full">
                      {technology.category}
                    </span>

                    <span className="text-xs text-gray-500">
                      {technology.difficulty}
                    </span>

                  </div>


                  <span></span>
                  <div className="flex items-center gap-1 mt-4 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{technology.rating}</span>
                  </div>


                  
                  <button
                    onClick={() => addToStack(technology)}
                    
                    className={`w-full mt-4 py-2 rounded-lg text-sm font-medium ${isAdded ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-gray-700"}`} >
                    {isAdded? "✓ Added to Stack": "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>

        </div>


        
        <div className="lg:col-span-1">

          <div className="border border-gray-200 rounded-xl p-5 bg-white sticky top-5">

            
            <div className="flex justify-between items-start">

              <div>
                <h2 className="font-bold text-lg">Your Stack</h2>

                <p className="text-xs text-gray-500 mt-1">{stack.length} Technology Selected</p>
              </div>

            </div>


            
            {stack.length === 0 && (
              <div className="border border-dashed border-gray-300 rounded-lg p-5 mt-5 text-center">

                <p className="text-sm text-gray-400">
                  Your stack is empty.
                </p>

                <p className="text-xs text-gray-400 mt-1">Add technologies from the list.</p>

              </div>
            )}


            
            {stack.length > 0 && (
              <div className="mt-5 space-y-3">

                {stack.map((technology) => (
                  <div key={technology.id}className="flex items-center gap-3 border rounded-lg p-3">

                    <img src={technology.icon} alt={technology.name}className="w-8 h-8 object-contain"/>

                    <div className="flex-1">
                      <h3 className="text-sm font-semibold">
                        {technology.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {technology.category}
                      </p>
                    </div>

                    <button onClick={() => removeFromStack(technology.id)}className="text-gray-400 hover:text-red-500">x</button>

                  </div>
                ))}


                
                <button onClick={removeAll}className="w-full border border-red-300 text-red-500 py-2 rounded-lg text-sm hover:bg-red-50">Remove All
                </button>

              </div>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}

export default Body;