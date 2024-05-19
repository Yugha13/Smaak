import BaseUrl from "@/BaseUrl";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"

const NewFood = () => {
  const [food, setFood] = useState("");
  const [price, setPrice] = useState(0.0);
  const Navi = useNavigate();
  const HandleForm = async (e:any) => {
    e.preventDefault();
    if(!(food && price)) return 0;
    try{
        const res = await axios.post(`${BaseUrl}/addFood`, {name: food, price});
        console.log(res);
        toast("food created", {
            description: `food create with name ${res.data.message}`,
        })
        Navi("/foods")
    } catch(e) {
        console.log(e);
        toast("not add already food exist")
    }
  }
  return (
    <div className="grid">
        <form onSubmit={HandleForm}>
            <input type="text" onChange={(e) => setFood(e.target.value )} />
            <input type="number" onChange={(e) => setPrice(parseFloat(e.target.value) )} />
            <Button type="submit">Add Food</Button>
        </form>
    </div>
  )
}

export default NewFood
