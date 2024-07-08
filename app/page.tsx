'use server'
 
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function Home() {
  revalidatePath('/dashboard') // 
  redirect(`/dashboard/`)
  return (
    <div>
      <h2>
        hello
      </h2>
    </div>
  );
}
