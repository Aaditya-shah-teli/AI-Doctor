"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { DialogClose } from "@radix-ui/react-dialog"
const AddNewSessionDialog = () => {
    const [notes, setNotes] = useState<string>("")
  return (
    <div>
        <Dialog>
  <DialogTrigger>
    <Button className='mt-3'>+ Start a Consultation</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add basics details</DialogTitle>
      <DialogDescription asChild>
        <div>
            <h2>
                Add Symptoms or any other details
            </h2>
            <Textarea placeholder="Add Detail here..." className="h-[200px] mt-1" onChange={ (e) => setNotes(e.target.value)}/>
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
        <Button variant={'outline'}>Cancle</Button> 
        </DialogClose>
        <Button disabled={!notes}>Start</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddNewSessionDialog