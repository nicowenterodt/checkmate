import { IChecklist } from '@/components/checklist.module'


import EngineStartJson from './breezer/002_engine_start.json'
import BeforeTaxiJson from './breezer/003_before_taxi.json'
import TaxiJson from './breezer/004_taxi.json'
import BeforeTakeOffJson from './breezer/005_before_takeoff.json'
import TakeOffJson from './breezer/006_takeoff.json'
import AfterTakeoffJson from './breezer/007_after_takeoff.json'
import BeforeLandingJson from './breezer/008_before_landing.json'
import AfterLandingJson from './breezer/009_after_landing.json'

import { ICheckgroup } from '@/components/checkgroup.module'


const EngineStart: IChecklist = EngineStartJson;
const BeforeTaxi: IChecklist = BeforeTaxiJson;
const Taxi: IChecklist = TaxiJson;
const BeforeTakeOff: IChecklist = BeforeTakeOffJson;
const TakeOff: IChecklist = TakeOffJson;
const AfterTakeoff: IChecklist = AfterTakeoffJson;
const BeforeLanding: IChecklist = BeforeLandingJson;
const AfterLanding: IChecklist = AfterLandingJson;

const checkgroup: ICheckgroup = {
  key: "breezer",
  name: "Breezer",
  checklists: [
    EngineStart,
    BeforeTaxi,
    Taxi,
    BeforeTakeOff,
    TakeOff,
    AfterTakeoff,
    BeforeLanding,
    AfterLanding
  ]
}

export default checkgroup;
