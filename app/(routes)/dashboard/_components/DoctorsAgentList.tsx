import React from 'react'
import DoctorAgentCard from './DoctorAgentCard'
const AIDoctorAgents =  [{
    id: 1,
    specialist: "Cardiologist",
    description: "Heart and blood vessel expert helping patients with cardiovascular issues.",
    image: "/me2.jpg",
    agentPrompt: "You are a compassionate cardiologist helping patients understand heart health and treatments."
  },{
    id: 1,
    specialist: "Cardiologist",
    description: "Heart and blood vessel expert helping patients with cardiovascular issues.",
    image: "/me2.jpg",
    agentPrompt: "You are a compassionate cardiologist helping patients understand heart health and treatments."
  },{
    id: 1,
    specialist: "Cardiologist",
    description: "Heart and blood vessel expert helping patients with cardiovascular issues.",
    image: "/me2.jpg",
    agentPrompt: "You are a compassionate cardiologist helping patients understand heart health and treatments."
  }]
const DoctorsAgentList = () => {
  return (
    <div className='mt-10'>
        <h2 className='text-xl font-bold'>AI Specialist Doctor </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5'>
            {
                AIDoctorAgents.map((doctor: any, index) => (
                    <div key={index}>
                        <DoctorAgentCard doctorAgent={doctor}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default DoctorsAgentList