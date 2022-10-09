import USDC from '../assets/images/Logo_USDC.png'

export interface DonationStatsProps  {
  projectAddress: string
}

export default function DonationStats(props:DonationStatsProps) {

  const amountRaised = "23 656";
  const donorNumbers = 54;

return(
        <div className="absolute right-0 top-1/4 px-12 py-8 bg-white border border-slate-400 rounded-md">
          <div className="flex flex-column items-center">
            <span className="text-3xl">{amountRaised}</span>
            <span className="ml-2"><img src={USDC} className="inline w-6 h-6" />USDC</span>
          </div>
          <div>Donated by {donorNumbers} wallets</div>
        </div>
)

}