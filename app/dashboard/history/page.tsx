'use client'
import { useEffect, useState } from 'react';
import { AiOutput } from '@/utils/schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { eq, desc } from 'drizzle-orm';

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const fetchHistoryByEmail = async (email: any) => {
  const data = await db.select().from(AiOutput).where(eq(AiOutput.createdBy, email)).orderBy(desc(AiOutput.createdAt)).execute();
  return data.map((item: any) => ({
    ...item,
    aiResponse: item.aiResponse ?? '', // Convert null to empty string 
  }));
};

const HistoryPage = () => {
  const { user } = useUser();
  const [history, setHistory] = useState<HISTORY[]>([]);
  const fetchData = async (user: any) => {
    const data = await fetchHistoryByEmail(user.primaryEmailAddress.emailAddress);
    setHistory(data);
  };

  useEffect(() => {
    user && fetchData(user);
  }, [user]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center font-semibold bg-gray-200 p-2">
        <div>Template</div>
        <div className="col-span-2">AI Response</div>
        <div>Date</div>
        <div>Copy</div>
      </div>
      {history.map((item) => (
        <div key={item.id} className="grid grid-cols-1 md:grid-cols-5 gap-6 p-3 border-b">
          <div>{item.templateSlug}</div>
          <div className="col-span-2 truncate">{item.aiResponse}</div>
          <div className='md:mx-14'>{new Date(item.createdAt).toLocaleDateString()}</div>
          <div className='md:mx-14'>
            <Button className='flex gap-2' onClick={() => handleCopy(item.aiResponse)}><Copy className='w-4 h-4' /> Copy</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;




