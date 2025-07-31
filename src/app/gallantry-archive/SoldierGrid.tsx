'use client';
import Link from "next/link";
import{motion} from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
type Soldier = {
    id: string;
    name: string;
    regiment: string;
    honor?: string;
    image: string;
};
// const soldiers = [
//     {
//         id: "vikram-batra", name: "Captain Vikram Batra", regiment: "13 JAK RIF", imageUrl: "/vikram-batra.jpg"
//     },
//     {
//         id: "sandeep-unnikrishnan", name: "Major Sandeep Unnikrishnan", regiment: "51 SAG", imageUrl: "/sandeep-unnikrishnan.jpg"
//     }
// ];
interface SoldierGridProps{
    soldiers: Soldier[];
}
export default function SoldierGrid({soldiers} : SoldierGridProps){
    const isMobile = useIsMobile();
    return(
        <div className="p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                Gallantry Heroes
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    soldiers.map((soldier, index) =>(
                        <motion.div key = {soldier.id} initial={{opacity: 0, x: isMobile? 0: -100, y: isMobile? 100:0}} animate={{opacity: 1, x: 0, y:0}}
                        transition={{duration: 0.5, delay: index*0.1, ease: "easeOut"}}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            <img src = {soldier.image} alt={soldier.name} className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {soldier.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {soldier.regiment}
                                </p>
                                <Link href={`/gallantry-archive/${soldier.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
                                    View Profile
                                </Link>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}