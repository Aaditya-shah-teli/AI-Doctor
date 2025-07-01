import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'


type doctorAgent = {
    id: number,
    specialist: string,
    description: string,
    image: string,
    agentPrompt: string,

}
type props = {
  doctorAgent : doctorAgent
}
const DoctorAgentCard = ({doctorAgent} : props) => {
  return (
    <div className=''>
      <Image src={doctorAgent.image} alt='Doctor Image' width={200} height={300} className='rounded-lg w-full h-[250px] object-cover rounded-xl' />
      <h2 className='text-lg font-bold mt-1'>{doctorAgent.specialist}</h2>
      <p className='text-gray-500 line-clamp-2 text-sm'>{doctorAgent.description}</p>
      <Button className='w-full mt-2'>Start Consultation <IconArrowRight/></Button>
    </div>
  )
}

export default DoctorAgentCard