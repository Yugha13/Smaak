import { useEffect, useState } from "react"
import { FoodCard } from "./FoodCard"
import axios from "axios"
import BaseUrl from "@/BaseUrl"

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
    <div className="grid grid-cols-3 gap-4">
        {allFood?.map((item:any) => {
            return <FoodCard trigger={trigger} reload={reload} foodName={item.food} price={item.price}/>
        })}
    </div>
  )
}

export default FoodPage
