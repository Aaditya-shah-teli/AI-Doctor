"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'
import AddNewSessionDialog from './AddNewSessionDialog';

const HistoryList = () => {
    const [historyList, setHistoryList] = useState([]);

  return (
    <div className='mt-10'>
        {
            historyList.length == 0 ? 
            <div className='flex justify-center p-7 flex-col border-dashed rounded-2xl border-2'>
                <Image src={'/me2.jpg'} alt='No History' width={150} height={150} className='w-full h-[400px] object-cover rounded-lg' />
                <h2 className='font-bold text-xl'>No recent Consultation</h2>
                <p>It looks like you haven't consulted with any doctors yet.</p>
                <AddNewSessionDialog/>
            </div> :
            <div></div>
        }
    </div>
  )
}

export default HistoryList