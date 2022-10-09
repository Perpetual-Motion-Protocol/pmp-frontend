export interface PriceInputProps  {
  amount: string,
  setAmount(val: string): any
  title: string
}

export default function PriceInput(props: PriceInputProps) {
  return (
    <div>
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
        {props.title}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
          placeholder="0.00"
          aria-describedby="price-currency"
          value={props.amount}
          onChange={(e) => props.setAmount(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            USDC
          </span>
        </div>
      </div>
    </div>
  )
}