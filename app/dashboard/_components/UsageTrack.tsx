'use client'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AiOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect} from 'react'
import { HISTORY } from '../history/page';
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

function UsageTrack() {
  const { user } = useUser();
  const context = useContext(TotalUsageContext);

  if (!context) {
    throw new Error('UsageTrack must be used within a TotalUsageContext.Provider');
  }

  const { totalUsage, setTotalUsage } = context;
  
  useEffect(()=>{
    user&&getData(user);
  }, [user])

  const getData = async(user:any)=>{
    {/*@ts-ignore*/}
    const result:HISTORY[] = await db.select().from(AiOutput).where(eq(AiOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    getTotalUsage(result)

  }

  const getTotalUsage=(result:HISTORY[])=>{
    let total:number=0;
    result.forEach(element => {
      total = total+Number(element.aiResponse?.length);
      setTotalUsage(total)
    });
    console.log(total);
  }
  return (
    <div className='m-5'>
      <div className='bg-primary p-3 text-white rounded-lg'>
        <h2>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
            <div className='h-2 bg-white rounded-full'
            style={{
                width:`${Math.min((totalUsage / 20000) * 100, 100)}%`
            }}></div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/20,000 Credits used</h2>
      </div>
      <Button variant = {'secondary'} className = 'w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack
