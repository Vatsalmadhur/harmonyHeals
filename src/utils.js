export const DayOrNight=()=>{
    const hours = new Date().getHours();
    if (hours < 12) return "Morning";
    else if (hours < 18) return "Afternoon";
    else return "Evening";
}