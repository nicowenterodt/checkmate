import { IChecklist } from '@/components/checklist.module'
import checklists from '@/data/checklists/breezer'

import Link from 'next/link'

export default function Home() {
  return <div>
    {checklists.checklists.map((checklist: IChecklist) => (
      <Link key={checklist.key} href={`/checkgroup/${encodeURIComponent(checklist.key)}`}>
        <div className={`my-2 w-full px-4 py-2.5 bg-slate-100 rounded-md shadow-sm flex items-start ${checklist.completed ? 'opacity-50' : 'opacity-100'}`}>
          <div className="w-10">
            {checklist.completed &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-2 stroke-blue-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            {!checklist.completed &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            }
          </div>
          <div className="flex-col">
            <div className="font-semibold text-black text-xl">{checklist.name}</div>
          </div>
        </div>
      </Link>
    ))}
  </div>
}
