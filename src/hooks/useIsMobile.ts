import{useState, useEffect} from "react";
export default function useIsMobile(){
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
        const checkWidth = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    },[]);
    return isMobile;
}