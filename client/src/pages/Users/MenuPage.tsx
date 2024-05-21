import  { useEffect, useState } from 'react'
import BaseUrl from '@/BaseUrl';
import axios from 'axios';
import MenuCard from './MenuCard';

const MenuPage = () => {
    const [allFood, setAllFood] = useState([]);
    useEffect(() =>{
        (async() => {
            const res = await axios.get(`${BaseUrl}/allFood`);
            setAllFood(res.data);
        })()
    }, []);
    
  return (
    <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {allFood?.map((item:any) => {
            return <MenuCard foodName={item.food} price={item.price}/>
        })}
    </div>
  )
}

export default MenuPage
