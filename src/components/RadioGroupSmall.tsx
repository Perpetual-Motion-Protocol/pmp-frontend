import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

export interface RadioGroupProps  {
  choices: {name: string, id: string}[],
  state: string,
  setState(val: string): any
  title: string
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RadioGroupSmall(props:RadioGroupProps) {

  const {state, setState} = props

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">{props.title}</h2>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          ?
        </a>
      </div>

      <RadioGroup value={state} onChange={setState} className="mt-2">
        <RadioGroup.Label className="sr-only"> Choose an option </RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {props.choices.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option.id}
              className={({ active, checked }) =>
                classNames(
                  active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                  checked
                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1'
                )
              }
            >
              <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
