import Checklist, { IChecklist } from '@/components/checklist.module'
import checkgroup from '@/data/checklists/breezer'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/router'


const ChecklistDetails: NextPage = () => {
  const router = useRouter()
  const checklist: IChecklist = checkgroup.checklists.find(i => i.key === router.query.checklist)!

  const onCompleted = () => {
    checklist.completed = true
    router.push('/checkgroup')
  }

  return <div>
    <Checklist checklist={checklist} onCompleted={onCompleted}/>
  </div>
}

export default ChecklistDetails;
