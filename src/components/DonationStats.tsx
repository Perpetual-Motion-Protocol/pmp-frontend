import USDC from '../assets/images/Logo_USDC.png'
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { useContractRead } from 'wagmi'
import pmp from "../apis/PerpetualMotionProtocol.json";
import { ethers } from 'ethers';

export interface DonationStatsProps  {
  projectAddress: string
  contractAddress: string
}

export default function DonationStats(props:DonationStatsProps) {
  const abiCoder = new ethers.utils.AbiCoder();
  const { config } = usePrepareContractWrite({
    addressOrName: props.contractAddress,
    contractInterface: pmp,
    functionName: 'execute',
    args: [
      ["0"],
      [[
        "0xF5C618dD4046726a8a3B6664A19a3581C1A96fA5", 
        "0x97BfE1Ac753485134B3a88AE7b0c293D37bE5a84"
       ]], 
      [
        [
          ethers.constants.HashZero,
          abiCoder.encode(
            ["bytes", "uint256"],
            [ethers.utils.hashMessage("Hello World"), 100000]
          ),
        ],
      ]
    ],
  })

  const { write } = useContractWrite(config)

  const amountFunded = useContractRead({
    addressOrName: props.contractAddress,
    contractInterface: pmp,
    functionName: 'returnAmountFunded',
    args: ["0"],
  })

  const amountRaised = amountFunded.data;

return(
        <div className="absolute right-0 top-1/4 px-12 py-8 bg-white border border-slate-400 rounded-md">
          <div className="flex flex-column items-center">
            <span className="text-3xl">{amountRaised && ethers.utils.formatEther(amountRaised.toString()) || "0"}</span>
            <span className="ml-2"><img src={USDC} className="inline w-6 h-6" /> DONATED</span>
          </div>
          <div className="flex flex-column items-center">
          <button
                  type="submit"
                  onClick={()=>{ write && write()}}
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Accumlate Donations
                </button>
          </div>
        </div>
)

}