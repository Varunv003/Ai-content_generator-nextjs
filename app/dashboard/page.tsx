"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

export default function Dashboard() {
  const[userSearchInput,setUserSearchinput] = useState<string>()
  return (
    <div>
      <SearchSection
      onSearchInput = {(value:string)=>setUserSearchinput(value)}
      />
      <TemplateListSection userSearchInput = {userSearchInput}/>
    </div>
  )
}
