import { EditBtn } from "./EditBtn"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useEffect, useState } from "react"

export function FoodCard({trigger,reload,foodName, price}:{reload:any,foodName: String, price: any, trigger:any}) {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    (async() => {
        const res:any = await axios.get(`https://pixabay.com/api/?key=25058500-660038d575a6cd187ab65ae0c&q=${foodName}&image_type=photo&pretty=true`);
        const random = parseInt((Math.random() * 30) as any);
        console.log(random);
        try{
          setImgUrl(res.data.hits[random].largeImageURL);
          console.log(imgUrl);
        }catch {
          const random = parseInt((Math.random() * 10) as any);
          setImgUrl(res.data.hits[random].largeImageURL)
        }
        
        
    })()

  }, [trigger])
  return (
    
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>BreakFast</CardTitle>
        <img className="object-cover h-48 w-96" src={imgUrl}/>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Food: {foodName}</Label>
            </div> 
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Price: {price}</Label>
            </div> 
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <EditBtn reload={reload} trigger={trigger} name={foodName}/>
        <Button>Delete</Button>
      </CardFooter>
    </Card>
  )
}
