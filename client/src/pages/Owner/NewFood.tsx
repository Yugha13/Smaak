import BaseUrl from "@/BaseUrl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
            description: `${res.data.message}`,
        })
        if(res.data.isExist){
          toast("Food Not Added ❌", {
            description: "Already food exist in menu"
          })
          return 0;
        }
        Navi("/foods")
    } catch(e) {
        console.log(e);
        toast("not add already food exist")
    }
  }
  return (
    <div className="w-[100%] h-screen grid place-items-center">
        <form onSubmit={HandleForm} className="flex flex-col gap-3 w-96">
            <Input className="w-[100%]" type="text" onChange={(e) => setFood(e.target.value )} />
            <Input type="number" onChange={(e) => setPrice(parseFloat(e.target.value) )} />
            <Button type="submit" variant={"secondary"}>Add Food</Button>
        </form>
    </div>
  )
}

export default NewFood
