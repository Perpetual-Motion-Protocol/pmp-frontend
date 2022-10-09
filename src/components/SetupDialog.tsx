import { useState } from "react"
import RadioGroupSmall from "./RadioGroupSmall"
import Toggle from "./Toggle"
import { Transition } from '@headlessui/react'
import PriceInput from "./PriceInput"
import DateInput from "./DateInput"
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import pmp from "../apis/PerpetualMotionProtocol.json";
import {ethers, utils} from "ethers"
import ScheduleInput from "./ScheduleInput"
import { useAccount } from 'wagmi'
import { useContractRead } from 'wagmi'

const abiCoder = new utils.AbiCoder()

export interface SetupDialogProps  {
  projectAddress: string
  contractAddress: string
}

const savingMethodGroup = [
  {name:"Round Up", id:'roundup', strategy:"3"},
  // {name:"Set a %", id:'set-percent'},
  {name:"Fixed Amount", id:"fixed-amount", strategy:"2"},
]

export default function SetupDialog(props: SetupDialogProps) {
  const { address } = useAccount()
  const [savingMethod, setSavingMethod] = useState(savingMethodGroup[0].id)

  // Vars to be implemented in the future
  const [endDate, setEndDate] = useState('');
  const [capEnabled, setCapEnabled] = useState(false);

  // Params to build strategy
  const [capAmount, setCapAmount] = useState('');
  const [scheme, setScheme] = useState('');
  const [fixedAmount, setFixedAmount] = useState('0');
  const [schedule, setSchedule] = useState('');
  const [projectId, setProjectId] = useState("0");

  const contractRead = useContractRead({
    addressOrName: props.contractAddress,
    contractInterface: pmp,
    functionName: 'returnUserStrategy',
    args: ["0", address],
  })

  const { config } = usePrepareContractWrite({
    addressOrName: props.contractAddress,
    contractInterface: pmp,
    functionName: 'pledge',
    args: [
      projectId, 
      savingMethod == savingMethodGroup[0].id ? "3" : "2", 
      abiCoder.encode(["uint256", "uint256"],[fixedAmount, 10] )
    ],
  })

  const { write } = useContractWrite(config)
  

  return (
        <div className="bg-gray-50 sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{contractRead.data && "You are already pledged to this project" || "Setup a Microdonation scheme" }</h3>
            <RadioGroupSmall title={contractRead.data && "Would you like to update your strategy?" || "How would you like to save?"} choices={savingMethodGroup} state={savingMethod} setState={setSavingMethod} />

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

            <Transition
              show={(savingMethod == 'fixed-amount')}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ScheduleInput title='Donation Schedule' time={schedule} setSchedule={setSchedule} />
            </Transition>

            <Transition
              show={(savingMethod == 'fixed-amount')}
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
          
          <div className="mt-5">
          <button
                  type="submit"
                  onClick={()=>{ write && write()}}
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {contractRead.data && "Update Scheme" || "Create Scheme"}
                </button>

                {contractRead.data && <button
                  type="submit"
                  onClick={()=>{ usePrepareContractWrite({
                    addressOrName: props.contractAddress,
                    contractInterface: pmp,
                    functionName: 'pledge',
                    args: [
                      projectId, 
                      "0", 
                      abiCoder.encode(["uint256", "uint256"],[fixedAmount, 10] )
                    ],
                  })}}
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-200 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Stop Scheme
                </button>}
          </div>
        </div>
      </div>
    
  )
}