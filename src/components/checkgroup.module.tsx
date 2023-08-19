import React from 'react';
import { IChecklist } from './checklist.module';

export interface ICheckgroup {
  key: string,
  name: string,
  checklists: Array<IChecklist>,
}

type Props = {
}

const Checkgroup = (props: Props) => {

  return (
    <div className='flex-col'>
    </div>
  )
}

export default Checkgroup;
