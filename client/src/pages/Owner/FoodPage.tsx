import { useEffect, useState } from "react"
import { FoodCard } from "./FoodCard"
import axios from "axios"
import BaseUrl from "@/BaseUrl"
import { cn } from "@/lib/utils"

const FoodPage = () => {
        const [trigger, reload] = useState(false); 
        const [allFood, setAllFood] = useState([]);
        useEffect(() =>{
            (async() => {
                const res = await axios.get(`${BaseUrl}/allFood`);
                setAllFood(res.data);
            })()
        }, [trigger])
        
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {allFood?.map((item:any) => {
            return <FoodCard trigger={trigger} reload={reload} foodName={item.food} price={item.price}/>
        })}
    </div>
    </div>
  )
}

export default FoodPage
