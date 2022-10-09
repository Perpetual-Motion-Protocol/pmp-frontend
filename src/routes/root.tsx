import {Link} from "react-router-dom";
import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

import HeaderImg from '../assets/images/headerSample.png'
import HeaderImg2 from '../assets/images/headerSample2.png'
import HeaderImg3 from '../assets/images/DSCN8452.jpg'

import logo1 from '../assets/brandLogos/1.jpeg';
import logo2 from '../assets/brandLogos/2.png';
import logo3 from '../assets/brandLogos/3.png';
import logo4 from '../assets/brandLogos/4.png';
import logo5 from '../assets/brandLogos/5.png';
import logo6 from '../assets/brandLogos/6.jpeg';
import logo7 from '../assets/brandLogos/7.png';
import logo8 from '../assets/brandLogos/8.png';
import logo9 from '../assets/brandLogos/9.png';
import logo10 from '../assets/brandLogos/10.png';

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
]

const headerImages = [HeaderImg, HeaderImg2, HeaderImg3];

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
]


const projects = [
  {address:"0x151a64570e4997739458455ba4ab5A535FD2E306",
    "title": "KOKO DAO",
    "short": "KOKO DAO works with local Colombian communities to create viable economic models as an alternative to small scale deforestation.",
    "details": "KOKO DAO works with local Colombian communities to create viable economic models as an alternative to small scale deforestation.\nWhy Focus on Small Scale Forests?\nRural communities and small land owners have neither the resources nor sufficient amounts of land to receive compensation from forest preservation efforts through carbon offsets. This makes deforestation the most economically compelling option for them.\nFortunately, blockchains allow us to demonstrate the proof of impact of small scale conservation projects in a transparent and trustless way. This makes it possible for us to design new ways to compensate rural communities for preserving their land.\nPilot Project\nKoko DAO's first protected forest spans across 37 acres of forest in Huila, Colombia.",
    "href": "https://kokodao.xyz/",
    "twitter": "kokodaoxyz",
    "sgdGoals": [5, 8, 13, 15, 16],
    "headerImage": 0
  },
  {
  address:"0x52DF867874Be4d01a4138165d4dB72Ec91B948e3",
    "title": "CoffeeCarbonCo",
    "short": "CCC provides tools to support coffee farmers and provide pre-financing during their transition to regenerative agriculture.",
    "details": "CCC provides a web3 ecosystem to support coffee farmers in transitioning to agroforestry by providing tools for pre-financing and tools for direct trade with climate-conscious coffee buyers. CCC quantifies future carbon savings and mints a geo-spatial NFT that keeps the track of regeneration of the farm. Farmer requests pre-financing of transition by issuing carbon credit tokens that are connected to geospatial NFTs using CCC infrastructure and fundraising directly from the climate-conscious buyers. CCC guides the farmer through transition and keeps the track of activities, verifies practices and results through dMRV. CCC provides another set of contracts for the direct coffee trade to open market access for \"regenerated coffee\".",
    "twitter": "CoffeeCarbonCo",
    "sgdGoals": [13,15,16],
    "headerImage": 1
  },
  {
  "address": "0x0000000000000000000000000000000000000000",
    "title": "Earth Regenerators",
    "short": "Earth Regenerators is a global network of people seeking to participate in the restoration of landscapes and cultivation of regenerative communities.",
    "headerImage": 2
  }
]

function Root() {

  return (
    <div>

  <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Giving made</span>{' '}
              <span className="block text-emerald-600 xl:inline">seamless</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Experience a new way of giving. Round up or pick set amount to support causes from each crypto transaction.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/donate/0x151a64570e4997739458455ba4ab5A535FD2E306"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 md:py-4 md:px-10 md:text-lg"
                >
                  Start Your Giving
                </Link>
              </div>
            </div>
          </div>
        </main>




        <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Curated Projects from Devcon Bogota</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Select one of the public goods that deserve continued support.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={headerImages[project.headerImage]} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link
                  to={`/donate/${project.address}`}
                  className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                    <p className="mt-3 text-base text-gray-500">{project.short}</p>
                  </Link>
                </div>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Link
                  to={`/donate/${project.address}`}
                  className="flex w-full items-center justify-center rounded-md border border-2 border-emerald-600 px-8 py-1 text-emerald-600 font-medium hover:bg-slate-100 px-10"
                >
                  Donate
                </Link>
              </div>
            </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>






        <div className="overflow-hidden">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to donate.</h2>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
        

        <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-left text-lg font-semibold text-gray-600">
          Built on
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-5 lg:mt-8">
          { logos.map((logo)=>{return(
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img
              className="max-h-16 grayscale"
              src={logo}
            />
          </div>

          )}) }
        </div>
      </div>
    </div>

        
    </div>
  )
}

export default Root