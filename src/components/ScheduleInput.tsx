import RadioGroupSmall from "./RadioGroupSmall"

export interface ScheduleInputProps  {
  time: string,
  setSchedule(val: string): any
  title: string
}

const scheduleGroup = [
  {name:"One Time", id: "one-time"},
  {name:"Daily", id: "daily"},
  {name:"Weekly", id: "weekly"},
  {name:"Monthly", id: "monthly"},
]

export default function PriceInput(props: ScheduleInputProps) {
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        </div>
        <RadioGroupSmall title="How would you like to save?" choices={scheduleGroup} state={props.time} setState={props.setSchedule} />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        </div>
      </div>
    </div>
  )
}