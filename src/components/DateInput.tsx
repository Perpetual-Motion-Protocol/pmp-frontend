export interface DateInputProps  {
  date: string,
  setDate(val: string): any
  title: string
}

export default function DateInput(props: DateInputProps) {
  return (
    <div>
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
        {props.title}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="date"
          name="date"
          id="date"
          className="block w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
          placeholder="mm/dd/yyyy"
          aria-describedby="date"
          value={props.date}
          onChange={(e) => props.setDate(e.target.value)}
        />
      </div>
    </div>
  )
}