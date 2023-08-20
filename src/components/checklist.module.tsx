import React, { useState } from 'react';
import Checkitem, { ICheckitem } from './checkitem.module';

export interface IChecklist {
  key: string,
  name: string,
  completed: Boolean,
  items: Array<ICheckitem>,
}

type Props = {
  checklist: IChecklist,
  onCompleted: Function
}

const Checklist = (props: Props) => {
  const { checklist, onCompleted } = props;
  const [checkitems, setCheckitems] = useState<ICheckitem[]>(checklist?.items);

  const currentPosition = (): number => {
    return checkitems?.findIndex(item => item.focused)
  }

  const checklistComplete = (): Boolean => {
    return checkitems?.map(i => i.checked).every(Boolean)
  }

  const handleCheckIem = () => {
    if (checklistComplete()) {
      return
    }

    const index = currentPosition();
    checkitems[index].focused = false
    checkitems[index].checked = true
    if (checkitems.length - 1 > index) {
      checkitems[index + 1].focused = true
    }
    setCheckitems([...checkitems])
  }

  const handleStartAgain = () => {
    checkitems.forEach(item => {
      item.checked = false
      item.focused = false
    })
    checkitems[0].focused = true
    checklist.completed = false
    setCheckitems([...checkitems])
  }

  return (
    <div className='flex-col min-h-screen' onClick={handleCheckIem}>
      {checkitems?.map((item: ICheckitem, i: number) => (
        <Checkitem checkitem={item} key={`item-${i}`} />
      ))}
      {checklistComplete() &&
        <div className='flex w-full min-h-screen justify-center  px-5 flex-col'>
          <button onClick={() => onCompleted()} type="button" className="w-full text-white bg-blue-900 hover:bg-blue-900/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-10 justify-center items-center inline-flex mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 stroke-1 stroke-white-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Checklist Complete</span>
          </button>
          <button onClick={() => handleStartAgain()} type="button" className="w-full whitespace-nowrap text-white bg-slate-400 hover:bg-blue-900/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            <span>Start again</span>
          </button>
        </div>
      }
    </div>
  )
}

export default Checklist;
