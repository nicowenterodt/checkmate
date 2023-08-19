import React, { PropsWithChildren } from 'react';

export interface ICheckitem {
  key: String,
  value: String,
  focused: Boolean,
  checked?: Boolean,
}

type Props = {
  checkitem: ICheckitem
}

const Checkitem = (props: Props) => {
  const { key, value, focused, checked } = props.checkitem;
  return (
    <div className={`my-1 w-full px-4 py-2.5 bg-slate-100 rounded-xl shadow-sm flex items-start ${focused ? 'opacity-100' : 'opacity-20' }`}>
      <div className="w-10">
        {checked &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-2 stroke-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }

        {focused &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        }
      </div>

      <div className="flex-col">
        <div className="font-semibold text-black">{key}</div>
        <p className="text-slate-500 font-mono">{value}</p>
      </div>
    </div>
  )
}

export default Checkitem;
