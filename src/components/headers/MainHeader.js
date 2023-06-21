import { Fragment, useContext, useEffect } from 'react';	
import { Menu, Popover, Transition } from '@headlessui/react';	
import { Bars3Icon, XMarkIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';	
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/20/solid';	
import { UserContext } from '../../contexts/UserContext';	

export default function MainHeader() {	
  const { user } = useContext(UserContext);	

  const userNavigation = [	
    { name: 'Sign out', href: '#' },	
  ]	

  function classNames(...classes) {	
    return classes.filter(Boolean).join(' ')	
  }	

  return (	
    <Popover as="header" className="py-4">	
      {({ open }) => (	
        <Fragment>	
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">	
            <div className="relative flex items-center justify-center py-5 lg:justify-between">	
              {/* Logo */}	
              <div className="absolute left-0 flex-shrink-0 lg:static">	
                <a href="/">	
                  <img	
                    className="h-8 w-auto"	
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"	
                    alt="Your Company"	
                  />	
                </a>	
              </div>	
              {/* Right section on desktop */}	
              <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">	

                {/* Profile dropdown */}	
                {user ? (	
                  <Menu as="div" className="relative ml-4 flex-shrink-0">	
                    <Menu.Button className="flex text-sm text-indigo-200">	
                      <span className="sr-only">Open user menu</span>	
                      <Cog8ToothIcon className="h-6 w-6" aria-hidden="true" />	
                    </Menu.Button>	
                    <Transition	
                      as={Fragment}	
                      leave="transition ease-in duration-75"	
                      leaveFrom="transform opacity-100 scale-100"	
                      leaveTo="transform opacity-0 scale-95"	
                    >	
                      <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">	
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
                      </Menu.Items>	
                    </Transition>	
                  </Menu>	
                ) : (	
                  <Fragment></Fragment>	
                )}	

              </div>	
              {/* Menu button */}	
              <div className="absolute right-0 flex-shrink-0 lg:hidden">	
                {/* Mobile menu button */}	
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">	
                  <span className="sr-only">Open main menu</span>	
                  {open ? (	
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />	
                  ) : (	
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />	
                  )}	
                </Popover.Button>	
              </div>	
            </div>	
          </div>	
          <Transition.Root as={Fragment}>	
            <div className="lg:hidden">	
              <Transition.Child	
                as={Fragment}	
                enter="duration-150 ease-out"	
                enterFrom="opacity-0"	
                enterTo="opacity-100"	
                leave="duration-150 ease-in"	
                leaveFrom="opacity-100"	
                leaveTo="opacity-0"	
              >	
                <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />	
              </Transition.Child>	

              <Transition.Child	
                as={Fragment}	
                enter="duration-150 ease-out"	
                enterFrom="opacity-0 scale-95"	
                enterTo="opacity-100 scale-100"	
                leave="duration-150 ease-in"	
                leaveFrom="opacity-100 scale-100"	
                leaveTo="opacity-0 scale-95"	
              >	
                <Popover.Panel	
                  focus	
                  className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"	
                >	
                  <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">	
                    <div className="pb-2 pt-3">	
                      <div className="flex items-center justify-between px-4">	
                        <div>	
                          <img	
                            className="h-8 w-auto"	
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"	
                            alt="Your Company"	
                          />	
                        </div>	
                        <div className="-mr-2">	
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">	
                            <span className="sr-only">Close menu</span>	
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />	
                          </Popover.Button>	
                        </div>	
                      </div>	
                    </div>	
                    <div className="pb-2 pt-4">	
                      <div className="mt-3 space-y-1 px-2">	
                        {userNavigation.map((item) => (	
                          <a	
                            key={item.name}	
                            href={item.href}	
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"	
                          >	
                            {item.name}	
                          </a>	
                        ))}	
                      </div>	
                    </div>	
                  </div>	
                </Popover.Panel>	
              </Transition.Child>	
            </div>	
          </Transition.Root>	
        </Fragment>	
      )}	
    </Popover>	
  )	
}