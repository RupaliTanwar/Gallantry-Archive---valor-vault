"use client";
//import Link from "next/link";
import{useState} from "react";
import {motion} from "framer-motion";
import  SoldierGrid from './SoldierGrid';
const soldiers = [
    {
        id: "vikram-batra", name: "Captain Vikram Batra", image: "/vikram-batra.jpg", honor: "Param Vir Chakra", regiment: "13 JAK Rifles"
    },
    {
        id: "sandeep-unnikrishnan", name:"Major Sandeep Unnikrishnan", image:"/sandeep-unnikrishnan.jpg", honor: "Ashoka Chakra(posthomously)", regiment: "51 SAG"
    },
    {
        id: "mohit-sharma", name:"Major Mohit Sharma", image:"/mohit-sharma.jpg", honor: "Ashoka Chakra(posthomously)", regiment: "1 PARA SF"
    },
    {
        id: "saurabh-kalia", name:"Captain Saurabh Kalia", image:"/saurabh-kalia.jpg", regiment: "4 JAT"
    },
    {
        id: "bana-singh", name:"Naib Subedar Bana Singh", image:"/bana-singh.jpg", honor:"Param Vir Chakra", regiment: "8 JAK LI"
    },
    {
        id: "sudhir-valia", name: "Major Sudhir Valia", image: "/sudhir-valia.jpg", bio: "Exceptional combating militancy in Jammu and Kashmir, respectfully called 'Colonel' during his course in U.S.!", regiment: "9 PARA SF"
    }
];
export default function GallantryArchivePage() {
    const[query,setQuery] = useState("");
    const filteredSoldiers = soldiers.filter((soldier)=> soldier.name.toLowerCase().includes(query.toLowerCase())
);
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 animate-gradient bg-size-200 p-4 sm:p-8 transition-all duration-500 hover:brightness-80">
        <section className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-blue-800">
                🏅Gallantry Archive
            </h1>
            <motion.h4 initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.3}} className="mt-2 text-lg sm:text-xl font-semibold text-orange-800">
                <span>
                    INDIA&apos;S BRAVEST SOULS!
                </span>
            </motion.h4>            
            <div className="relative w-full sm:w-1/2 mb-6">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    🔍
                </span>
                <input type = "text" placeholder="Search soldiers by name..." value = {query} onChange={(e) => setQuery(e.target.value)} className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <SoldierGrid soldiers={filteredSoldiers}/>
        </section>
    </main>
  );
}