import { Disclosure, } from '@headlessui/react'
import ProfileHeader from './ProfileHeader'
import { NavLink } from 'react-router-dom'

const navigation = [
  // { name: 'About', href: '/', current: true },
  { name: 'Donate', href: '/donate', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')

}

export default function PageFrame(props) {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                    <h1 className="font-bold">
                      <NavLink to="/">
                      Perpetual Motion Protocol
                      </NavLink>
                      </h1>
                    </div>
                    <div className="sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          end
                          className={
                            ({isActive}) => classNames(
                            isActive ? 'border-indigo-500 text-gray-900'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  <div className="sm:ml-6 sm:flex sm:items-center">
                    {/* <button
                      type="button"
                      className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}

                    <ProfileHeader />

                  </div>
                </div>
              </div>

            </>
          )}
        </Disclosure>

        <div className="py-10">
          {/* <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header> */}
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

            {props.children}

            </div>
          </main>
        </div>
      </div>
    </>
  )
}
