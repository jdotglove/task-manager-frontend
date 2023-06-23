import { Fragment, useContext } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/outline';
import { TaskManagerContext } from '../../contexts/TaskManagerContext';

export default function MainHeader({
  signOut,
  noLogo
}) {
  const { user } = useContext(TaskManagerContext);

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
              {noLogo ? (
                <Fragment></Fragment>
              ) : (
                <div className="absolute left-0 flex-shrink-0 lg:static">
                  <a href="/">
                    <HomeIcon className="text-white h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              )}
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
        </Fragment>
      )}
    </Popover>
  )
}