import SetupDialog from "./SetupDialog"
import Donations from "./Donations"

import pmp from "../apis/PerpetualMotionProtocol.json";

import {utils} from "ethers"

const abiCoder = new utils.AbiCoder()

export interface ProjectViewProps  {
  projectAddress: string
}

// depending on chain, get deployment contract address
const pmpAddresses = {"mumbai":"0x6C5c9115ef9C241Bd0efBA333B873c2E790E90A9"}

const sampleData = {
  "0x151a64570e4997739458455ba4ab5A535FD2E306":{
    title: "Super Regen Forest Quest",
    details: "This is a long explaination of the project. This is a long explaination of the project. This is a long explaination of the project. This is a long explaination of the project. This is a long explaination of the project. This is a long explaination of the project.",
    href: "",
    totalDonated: 23656.07,
    donors: 54,
    discord: "discordHandle",
    twitter: "twitterHandle",
    sgdGoals: [16,8,13],
    headerImage: ""
  }}
const title = "Super Regen Forest Quest"
const totalDonated = ""

function ProjectView(props:ProjectViewProps) {

  const {title, details, href, totalDonated, donors, discord, twitter, sgdGoals, headerImage} = sampleData["0x151a64570e4997739458455ba4ab5A535FD2E306"]


  return (
    <div>
      <h1>{title}</h1>
      <h3>Project Details</h3>
      <p>{details}</p>
      <h3>SDG Goals</h3>
      FOR EACH LOOP
      <h3>Donations</h3>
      <Donations />
    <SetupDialog projectAddress={props.projectAddress} contractAddress={pmpAddresses.mumbai} />

    </div>
  )
}

export default ProjectView