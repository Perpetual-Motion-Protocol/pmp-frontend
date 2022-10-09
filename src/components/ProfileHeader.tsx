import { Fragment } from 'react'
import { useConnect, useDisconnect, useAccount } from 'wagmi'
import { ConnectKitButton, } from "connectkit";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Menu, Transition } from '@headlessui/react'
  // import { ConnectButton, useConnectModal, useAccount } from '@web3modal/react'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')

}

// function ProfileHeaderWeb3Module(){

//   const {isConnected} = useAccount();

//   // const { isOpen, open, close } = useConnectModal()

//   return (
//     <>
//       <ConnectButton />

//       {isConnected}
//       {/* or
//       <button onClick={open}>Open Modal</button> */}
//     </>
//   )
// }

function ProfileHeaderConnectKit(){
  return(
  <div>
    <ConnectKitButton />
    </div>
    )
}

function ProfileHeader() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                            <Menu.Item>
        <button onClick={() => disconnect()}
          
        className=
                                    'block px-4 py-2 text-sm text-gray-700'
                                  >
Disconnect
          </button>

                            </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
      </div>
    )
  return <button onClick={() => connect()}>Connect Wallet</button>
}

export default ProfileHeaderConnectKit;