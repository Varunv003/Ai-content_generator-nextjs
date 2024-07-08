import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div>
      <div className='flex items-center justify-center mt-10'>
        <UserProfile routing = 'hash'/>
      </div>
      
    </div>
  )
}

export default Settings
