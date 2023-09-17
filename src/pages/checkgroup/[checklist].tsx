import Checklist, { IChecklist } from '@/components/checklist.module'
import checkgroup from '@/data/checklists/remos'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'


const ChecklistDetails: NextPage = () => {
  const searchParams = useSearchParams()
  const checklistID = searchParams.get('checklist')
  const router = useRouter()
  const checklist: IChecklist = checkgroup.checklists.find(i => i.key === checklistID)!

  const onCompleted = () => {
    checklist.completed = true
    router.push('/checkgroup')
  }

  return <Checklist checklist={checklist} onCompleted={onCompleted} />
}

export default ChecklistDetails;
