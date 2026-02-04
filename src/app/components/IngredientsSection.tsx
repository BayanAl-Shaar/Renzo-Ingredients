import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play } from "lucide-react";

interface Ingredient {
  id: string;
  name: string;
  amount: string;
  image: string;
}

const ingredients: Ingredient[] = [
  {
    id: "1",
    name: "Beef fillet, cubed",
    amount: "600g",
    image: "https://images.unsplash.com/photo-1705557101766-0d550be69071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBiZWVmJTIwZmlsbGV0JTIwY3ViZWR8ZW58MXx8fHwxNzcwMTkyODM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "2",
    name: "Onions, peeled",
    amount: "2",
    image: "https://images.unsplash.com/photo-1612679300857-0b7600449e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWVsZWQlMjBvbmlvbnMlMjB3aGl0ZXxlbnwxfHx8fDE3NzAxOTI4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "3",
    name: "Garlic",
    amount: "2 cloves",
    image: "https://images.unsplash.com/photo-1758988480872-1f22e7910a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGdhcmxpYyUyMGNsb3Zlc3xlbnwxfHx8fDE3NzAxOTI4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "4",
    name: "Ground pepper",
    amount: "1 tsp",
    image: "https://images.unsplash.com/photo-1741518165765-af1c27e6795e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91bmQlMjBibGFjayUyMHBlcHBlcnxlbnwxfHx8fDE3NzAxOTI4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "5",
    name: "Corn or vegetable oil",
    amount: "4 tbsp",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMG9pbCUyMGJvdHRsZXxlbnwxfHx8fDE3NzAxMjYxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "6",
    name: "Water",
    amount: "3 × litre",
    image: "https://images.unsplash.com/photo-1639256150782-ecdb00b01e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGdsYXNzJTIwcHVyZXxlbnwxfHx8fDE3NzAxOTI4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

interface Props {
  layout?: 'structured' | 'creative';
}

export default function IngredientsSection({ layout = 'structured' }: Props) {
  return (
    <section className="w-full max-w-6xl mx-auto bg-white p-10 md:p-14 font-['Plus_Jakarta_Sans']">

      {/* Header */}
      <div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/*<p className="text-sm uppercase tracking-[0.32em] text-[#8B6B3E] font-el-messiri">
              Kitchen essentials for coocking ingrediants
            </p>*/}
            <h1 className="mt-3 text-5xl text-[#2F2315] font-el-messiri">
              Premium Ingredients
            </h1>
            <p className="mt-3 max-w-lg text-base text-[#5C5347]">
              Curated for flavor and balance. Smaller visuals keep the list dense
              when your recipe has lots of components.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="border border-[#E6DED3] bg-white px-5 py-3">
              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[#8B6B3E] font-el-messiri">
                Servings
              </div>
              <div className="text-2xl text-[#2F2315] font-el-messiri">4</div>
            </div>
            <div className="bg-[#2F2315] px-5 py-3 text-white">
              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[#EADCC8] font-el-messiri">
                Items
              </div>
              <div className="text-2xl font-semibold font-el-messiri">{ingredients.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients Table */}
      <table className="w-full mt-10 border-collapse">
        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.id} className="border-b border-gray-200">
              <td className="p-4 align-middle">
                <div className="h-16 w-16 overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <ImageWithFallback
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </td>
              <td className="p-4 align-middle">
                <h3 className="text-lg font-semibold text-[#2F2315] font-el-messiri">
                  {ingredient.name}
                </h3>
              </td>
              <td className="p-4 align-middle text-right">
                <div className="bg-[#011F4B] px-4 py-2 text-sm font-semibold text-white inline-block font-el-messiri">
                  {ingredient.amount}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
        <button className="flex items-center gap-2 bg-[#011F4B] px-6 py-3 text-white text-base font-el-messiri">
          <Play className="w-4 h-4 fill-current" />
          <span>Watch recipe</span>
        </button>

        <button className="bg-[#011F4B] px-10 py-3.5 text-white text-base font-el-messiri">
          <span>Start Cooking</span>
        </button>
      </div>
    </section>
  );
}
