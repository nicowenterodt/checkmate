import { useRouter } from 'next/router';
import React from 'react';

const Topnavigation = () => {

  const router = useRouter()


  const checklistName: String = router.query?.checklist?.toString() || ""
  const title: String = checklistName.replace(/-/g, ' ') || "Checkmate"

  return <div className='flex w-full p-4 bg-gray-900 fixed z-50 h-20 items-center  justify-between'>
    <div className='w-10'>
      {router.route !== '/' &&
        <button onClick={() => router.back()} type="button" className="inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      }
    </div>
    <span className='text-white capitalize'>{title}</span>
    <div className='w-10'></div>
  </div>

}

export default Topnavigation;
