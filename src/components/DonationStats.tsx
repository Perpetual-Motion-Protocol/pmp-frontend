import USDC from '../assets/images/Logo_USDC.png'
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { useContractRead } from 'wagmi'
import pmp from "../apis/PerpetualMotionProtocol.json";
import { ethers } from 'ethers';
import { TbHandRock } from "react-icons/tb";

export interface DonationStatsProps  {
  projectAddress: string
  contractAddress: string
}

export default function DonationStats(props:DonationStatsProps) {
  let projectId
    if (props.projectAddress === "0x151a64570e4997739458455ba4ab5A535FD2E306") {
      projectId = "0"
    } else if (props.projectAddress === "0x52DF867874Be4d01a4138165d4dB72Ec91B948e3") {
      projectId = "1"
    }
  const abiCoder = new ethers.utils.AbiCoder();
  const { config } = usePrepareContractWrite({
    addressOrName: props.contractAddress,
    contractInterface: pmp,
    functionName: 'execute',
    args: [
      [projectId],
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
    args: [projectId],
  })

  const fundingGoal = useContractRead({
    addressOrName: props.contractAddress,
    contractInterface: pmp,
    functionName: 'returnFundingGoal',
    args: [projectId],
  })

  const amountRaised = amountFunded.data;

return(
        <div className="absolute right-0 top-1/4 px-12 py-8 bg-white border border-slate-400 rounded-md">
          <div className="flex flex-column items-center">
            <span className="text-3xl">{amountRaised && ethers.utils.formatEther(amountRaised.toString()) || "0"}</span>
            <span className="ml-2"><img src={USDC} className="inline w-6 h-6" /> DONATED</span>
          </div>
          <div className="flex flex-column items-center">{fundingGoal.data && ethers.utils.formatEther(fundingGoal.data.toString()) || "0"} Goal</div>
          <button
                  type="submit"
                  onClick={()=>{ write && write()}}
                  className="mt-4 flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  {/* Accumlate Donations */}
                  <TbHandRock className="w-10 h-auto" />

                </button>
          {/* <div className="flex flex-column items-center"> */}
          {/* </div> */}
        </div>
)

}