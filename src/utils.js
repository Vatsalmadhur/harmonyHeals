import { useEffect, useState } from "react";

export const DayOrNight=()=>{
    const hours = new Date().getHours();
    if (hours < 12) return "Morning";
    else if (hours < 18) return "Afternoon";
    else return "Evening";
}

export const useIsMobile=()=>{
    const [mobile,setMobile] = useState(false);

    useEffect(()=>{
        const check=()=>{
            setMobile(window.matchMedia('(max-width:850px)').matches);
        }
        check();
        window.addEventListener('resize', check);

        return () => window.removeEventListener('resize', check);
    })
    return mobile;
}