'use client'
import React, { useContext, useState } from 'react'
import FormSection from '../_component/FormSection'
import OutputSection from '../_component/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { ArrowLeft} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
interface PROPS{
  params:{
    'template-slug':string
  }
}

function CreateNewContent(props:PROPS) {
  const selectedtemplate:TEMPLATE|undefined = Templates?.find((item)=>item.slug == props.params['template-slug'])
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const {user} = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
 
  
  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 20000) {
      alert('Free usage limit reached. Please upgrade to continue.');
      return;
    }else{

    
    setLoading(true);
    const selectedPrompt = selectedtemplate?.aiPrompt;
    const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
  
    const result = await chatSession.sendMessage(finalPrompt);
    console.log(result.response.text());
    setAiOutput(result?.response.text());
    await SaveInDb(JSON.stringify(formData), selectedtemplate?.slug,result?.response.text())
    setLoading(false);
    }
  };

  const SaveInDb = async (formData: string, slug: string | undefined, aiResp: string) => {
    if (!slug) {
      console.error("Template slug is undefined");
      return;
    }
    
    const createdBy = user?.primaryEmailAddress?.emailAddress;
    if (!createdBy) {
      console.error("User email is undefined");
      return;
    }

    const result = await db.insert(AiOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: createdBy,
      createdAt: new Date().toISOString(),
    });
    console.log(result)
  }
  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button ><ArrowLeft />Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-10 py-5'>
        <FormSection selectedTemplate={selectedtemplate} userFormInput={(v: any) => GenerateAIContent(v)} loading = {loading} />
        <div className='col-span-2'>
          <OutputSection aiOutput = {aiOutput} />
        </div>

      </div>
    </div>
    
  )
}

export default CreateNewContent
