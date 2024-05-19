import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import BaseUrl from "@/BaseUrl"

export function EditBtn({trigger,reload ,name}:{trigger:any,name:any, reload: any}) {
  const Navi = useNavigate();
  const [price, setPrice] = useState<any>(0);
  const HandleForm = async() => {
    if(price != 0){
      const res = await axios.post(`${BaseUrl}/editFood`, {name, price});
      reload(!trigger);
      Navi("/foods");
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Price</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit price</DialogTitle>
          <DialogDescription>
            Make changes to your price here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Price
            </Label>
            <Input
              placeholder="Enter The New Price"
              value={price as any}
              className="col-span-3"
              onChange={(e) => setPrice(e.target.value) }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={HandleForm}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
