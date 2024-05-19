import { useEffect, useState } from "react"
import { FoodCard } from "./FoodCard"
import axios from "axios"
import BaseUrl from "@/BaseUrl"

const FoodPage = () => {
    const [allFood, setAllFood] = useState([]);
    useEffect(() =>{
        (async() => {
            const res = await axios.get(`${BaseUrl}/allFood`);
            setAllFood(res.data);
        })()
    }, [])
    
  return (
    <>
        {allFood?.map((item:any) => {
            return <FoodCard foodName={item.food} price={item.price}/>
        })}
    </>
  )
}

export default FoodPage
