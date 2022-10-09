import { useState } from "react"
import RadioGroupSmall from "./RadioGroupSmall"
import Toggle from "./Toggle"
import { Transition } from '@headlessui/react'
import PriceInput from "./PriceInput"
import DateInput from "./DateInput"
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import pmp from "../apis/PerpetualMotionProtocol.json";
import {utils} from "ethers"

const abiCoder = new utils.AbiCoder()

export interface SetupDialogProps  {
  projectAddress: string
  contractAddress: string
}

const timeframeGroup = [
  {name:"Perpetual", id:'perpetual'},
  // {name:"Time period", id:'time-period'},
  {name:"Reoccuring", id:"reoccurring"},
]

const savingMethodGroup = [
  {name:"Round Up", id:'roundup'},
  // {name:"Set a %", id:'set-percent'},
  {name:"Fixed Amount", id:"fixed-amount"},
]

export default function SetupDialog(props: SetupDialogProps) {
  const [scheme, setScheme] = useState(timeframeGroup[0].id)
  const [savingMethod, setSavingMethod] = useState(savingMethodGroup[0].id)
  const [endDate, setEndDate] = useState('');
  const [capEnabled, setCapEnabled] = useState(false);

  const [oneShotAmount, setOneShotAmount] = useState('');
  const [capAmount, setCapAmount] = useState('');
  const [fixedAmount, setFixedAmount] = useState('');


  const {projectId, strategy, contributionDetails} = { projectId: parseInt("0"), strategy: parseInt("2"), contributionDetails: abiCoder.encode(["uint256", "uint256"],[100000, 100] )}

  // const debouncedTokenId = useDebounce(tokenId, 500)

  const { config } = usePrepareContractWrite({
    addressOrName: props.contractAddress,
    contractInterface: pmp,
    functionName: 'pledge',
    args: [projectId, strategy, contributionDetails],
  })

  const { write } = useContractWrite(config)

  return (
        <div className="bg-gray-50 sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Setup a Microdonation scheme</h3>
            <RadioGroupSmall title="How would you like to save?" choices={savingMethodGroup} state={savingMethod} setState={setSavingMethod} />
          <RadioGroupSmall title="Timeframe for donation" choices={timeframeGroup} state={scheme} setState={setScheme} />

{/* If time-period */}
          <Transition show={scheme === "time-period"}
              enter="transition-height transition-opacity"
              enterFrom="h-0 hidden"
              enterTo="h-fit"
              leave="transition-height duration-75"
              leaveFrom="h-fit"
              leaveTo="h-0 hidden"
          
          >
<DateInput title="Select an end date" date={endDate} setDate={setEndDate} />
            </Transition>

{/* If one-shot */}
          {/* <Transition show={scheme === "one-shot"}
              enter="transition-height transition-opacity"
              enterFrom="h-0 hidden"
              enterTo="h-fit"
              leave="transition-height duration-75"
              leaveFrom="h-fit"
              leaveTo="h-0 hidden"
          
          >
              <PriceInput title='Amount' amount={oneShotAmount} setAmount={setOneShotAmount} />

            </Transition> */}

{/* if not one-shot */}
          {/* <Transition show={scheme != "one-shot"}
              // enter="transition-opacity duration-75"
              // enterFrom="opacity-0"
              // enterTo="opacity-100"
              // leave="transition-opacity duration-150"
              // leaveFrom="opacity-100"
              // leaveTo="opacity-0"
              enter="transition-height transition-opacity"
              enterFrom="h-0 hidden"
              enterTo="h-fit"
              leave="transition-height duration-75"
              leaveFrom="h-fit"
              leaveTo="h-0 hidden"
          
          > */}

            <Transition
              show={(scheme == 'reoccurring')}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <PriceInput title='Donation Amount' amount={fixedAmount} setAmount={setFixedAmount} />
            </Transition>
            <Toggle title="Cap Donations" description="This could describe this if we want" enabled={capEnabled} setEnabled={setCapEnabled} />

            <Transition
              show={capEnabled}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <PriceInput title='Maximum Amount' amount={capAmount} setAmount={setCapAmount} />
            </Transition>
          {/* </Transition> */}
          
          <div className="mt-5">
          <button
                  type="submit"
                  onClick={()=>{ write && write()}}
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create Scheme
                </button>
          </div>
        </div>
      </div>
    
  )
}