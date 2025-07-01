"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const MedicalVoiceAgent = () => {
  const {sesisonId} = useParams();
  useEffect(() => {
    sesisonId&&GetSessionDetails();
  },[sesisonId])

  const GetSessionDetails = async () => {
    const result = await axios("/api/session-chat?sessionId=" + sesisonId);
    console.log(result.data)
  }
  return (
    <div>{sesisonId}adf</div>
  )
}

export default MedicalVoiceAgent