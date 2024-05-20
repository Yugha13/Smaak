import { CardContent, CardTitle } from "@/components/ui/card";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import { Label } from "@radix-ui/react-label";

import axios from "axios"
import { useEffect, useState } from "react"
import { EditBtn } from "../Owner/EditBtn";
import { Alert } from "../Owner/Alert";



export default function MenuCard({foodName, price}:{foodName: String, price: any}) {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    (async() => {
        let custom = foodName.split(' ').join('+');
        const res:any = await axios.get(`https://pixabay.com/api/?key=25058500-660038d575a6cd187ab65ae0c&q=${custom}+food&image_type=photo&pretty=true`);
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

  }, []);

  return (
    
    <Card className="bg-slate-900 rounded-xl p-0 m-0 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300 w-[350px] h-[250px]">
    <CardHeader className="p-0 m-0">
      <img className="object-cover h-[195px] w-[100%] rounded-md" src={imgUrl}/>
    </CardHeader>
    <CardFooter className="flex justify-between ">
      <div>{foodName}</div>
      <div>Price: ${price}</div>
    </CardFooter>
  </Card>
  );

}