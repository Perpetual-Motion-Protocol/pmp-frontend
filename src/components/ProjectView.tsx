import SetupDialog from "./SetupDialog"
import Donations from "./Donations"
import DonationStats from "./DonationStats"
import projectData from "../data/projects.json"
import { TbBrandDiscord, TbBrandTwitter, TbWorld } from "react-icons/tb";

import HeaderImg from '../assets/images/headerSample.png'
import HeaderImg2 from '../assets/images/headerSample2.png'
import HeaderImg3 from '../assets/images/DSCN8452.jpg'

const headerImages = [HeaderImg, HeaderImg2, HeaderImg3];

import pmp from "../apis/PerpetualMotionProtocol.json";

import {utils} from "ethers"

const abiCoder = new utils.AbiCoder()

export interface ProjectViewProps  {
  projectAddress: string 
}

// depending on chain, get deployment contract address
const pmpAddresses = {"mumbai":"0x62b1C9ea7E6EAC66Ee9C3bcD93aBBa86649EF66e"}


function ProjectView(props:ProjectViewProps) {

  const {title, details, href, twitter, sgdGoals, headerImage} = projectData[props.projectAddress]

  return (
    <div className="max-w-7xl mb-24">
      <h1 className="font-normal text-5xl mb-6">{title}</h1>
      <div className="relative max-w-full">
        <DonationStats projectAddress={props.projectAddress} contractAddress={pmpAddresses.mumbai}/>
        <img src={headerImages[headerImage]} />
      </div>
      <div className="flex flex-row gap-4 mt-6">

        <div className="flex-none max-w-2xl pr-6">
          <div className="flex flex-rows">

        <h3 className="flex-1 text-2xl font-medium leading-6 text-gray-900 mb-6 mt-4">
          Project Details
        </h3>

        <span className="flex flex-row gap-2 mt-5 mr-4">
          {href && <a href={href} target="_blank"><TbWorld className="w-8 h-8" /></a>}
          {twitter && <a href={`https://twitter.com/${twitter}`} target="_blank"><TbBrandTwitter className="w-8 h-8" /></a>}
          {/* {discord && <TbBrandDiscord className="w-8 h-8" />} */}
        </span>

          </div>
        <p>{details}</p>
        <h3 className="text-2xl font-medium leading-6 text-gray-900 mb-6 mt-10">
          SDG Goals
        </h3>
        <div className="flex flex-row gap-6">
          {sgdGoals.map((item:number)=>{
            return <img key={item} src={`./images/SDG_${item}.png`} /> 
          })}
        </div>
        {/* <h3>Donations</h3>
        <Donations /> */}
        </div>

<div className="flex-1 h-72">
        <SetupDialog projectAddress={props.projectAddress} contractAddress={pmpAddresses.mumbai} />
</div>
      </div>

    </div>
  )
}

export default ProjectView