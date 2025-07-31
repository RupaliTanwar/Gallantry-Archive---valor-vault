"use client";
import{useParams, useRouter} from "next/navigation";
const soldiers = [
    {
        id: "vikram-batra", name: "Captain Vikram Batra", image: "/vikram-batra.jpg", bio: "Showed exceptional heroism in the Kargil War, 1999!", honor:"Param Vir Chakra🏅"
    }, 
    {
        id: "sandeep-unnikrishnan", name: "Major Sandeep Unnikrishnan", image: "/sandeep-unnikrishnan.jpg", bio: "Exceptional leadership and bravery in 2008 Mumbai attacks!", honor:"Ashoka Chakra(posthomously)🏅"
    },
    {
        id: "mohit-sharma", name: "Major Mohit Sharma", image: "/mohit-sharma.jpg", bio: "Exemplary counter-terrorism duties in Kupwara operation, Kashmir!", honor:"Ashoka Chakra(posthomously)🏅"
    },
    {
        id: "saurabh-kalia", name: "Captain Saurabh Kalia", image: "/saurabh-kalia.jpg", bio: "Displayed exemplary courage as a prisoner of war in Pakistan, enduring torture to the most inhumane extent!"
    },
    {
        id: "bana-singh", name: "Naib Subedar Bana Singh", image: "/bana-singh.jpg", bio: "Operation Rajiv - Exhibited extraordinary leadership in recapturing Quaid Post,the highest peak of the Siachen Glacier (later renamed as Bana Top)!", honor:"Param Vir Chakra🏅"
    },
    {
        id: "sudhir-valia", name: "Major Sudhir Valia", image: "/sudhir-valia.jpg", bio: "Exceptional combating militancy in Jammu and Kashmir, respectfully called 'Colonel' during his course in U.S.!", honor:"Ashoka Chakra🏅"
    }
];
export default function Soldierprofile({ id }:{id:string}){
    const router = useRouter();
    const soldier = soldiers.find((s) => s.id === id);
    if(!soldier){
        return(
            <div className="p-4 text-red-600 text-center text-lg">
                Soldier not found!
            </div>
        );
    }
    return(
        <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
            <button onClick={() => router.back()} className="text-blue-600 hover:underline text-sm sm:text-base md:text-lg mb-4 inline-block">
                ← Back
            </button>
            <img src={soldier.image} alt={soldier.name} className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg shadow-md mb-6"
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    {soldier.name}
                </h1>
                {soldier.honor && (
                <span className="text-sm sm:text-base md:text-lg text-yellow-600 font-medium">
                    {soldier.honor}
                </span>
                )}
            </div>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                {soldier.bio}
            </p>
        </div>
    );
}