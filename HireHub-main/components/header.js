import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
const inter = Inter({ subsets: ['latin'] })
import { Disclosure, Popover, Transition } from '@headlessui/react';
import navLinks from '../constants/navLinks';
import useWindowSize from '../hooks/useWindowSize';
// import FadeHamburgerIcon from './FadeHamburgerIcon';
import { ChevronDownIcon, ChevronUpIcon, Bars3Icon } from '@heroicons/react/20/solid';

export default function Header() {
    const router = useRouter();
    const { width } = useWindowSize();

    const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav


    return (
        <div className="bg-slate-100 flex flex-wrap justify-center">
            <header className='shadow-sm sticky md:w-3/4 w-full top-0 z-10  p-4 md:relative'>

                <div className='relative'>
                    <div className='flex flex-wrap items-center px-7 '>
                        {/* Logo */}
                        <Link href='/'>
                            <Image
                                src='/images/logo.svg'
                                priority
                                alt='Logo'
                                className=' w-56 lg:w-36 -ml-1 hidden md:block'
                                width={100}
                                height={100}
                            />
                            <Image
                                src='/images/logo.svg'
                                width={150}
                                height={178}
                                priority
                                alt='Logo'
                                className='block md:hidden outline-none'
                            />
                        </Link>
                        {/* NavBar */}
                        <div className='flex flex-1 justify-end items-center'>
                            <div
                                className='hidden items-center md:flex text-md gap-x-8 [@media(max-width:840px)]:pr-4 [@media(max-width:840px)]:gap-x-4'
                                id='menu'
                            >
                                {navLinks.map(({ title, link, nestedLinks = [] }) =>
                                    nestedLinks.length > 0 ? (
                                        <Popover
                                            className='relative focus-visible:outline-none'
                                            key={`${title}`}
                                        >
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={`inline-flex items-center gap-x-1 leading-6 text-gray-900 focus-visible:outline-none ${open ? 'bg-blue' : ''
                                                            } rounded-lg px-2`}
                                                    >
                                                        <p
                                                            className={`my-2 ${open
                                                                ? 'text-white'
                                                                : 'hover-gradTxtNavbar'
                                                                }`}
                                                        >
                                                            {title}
                                                        </p>
                                                        {open ? (
                                                            <ChevronUpIcon
                                                                className='h-5 w-5 text-white'
                                                                aria-hidden='true'
                                                            />
                                                        ) : (
                                                            <ChevronDownIcon
                                                                className='h-5 w-5 text-black hover-gradTxtNavbar'
                                                                aria-hidden='true'
                                                            />
                                                        )}
                                                    </Popover.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter='transition ease-out duration-200'
                                                        enterFrom='opacity-0 translate-y-1'
                                                        enterTo='opacity-100 translate-y-0'
                                                        leave='transition ease-in duration-150'
                                                        leaveFrom='opacity-100 translate-y-0'
                                                        leaveTo='opacity-0 translate-y-1'
                                                    >
                                                        <Popover.Panel className='absolute left-1/2 z-10 flex w-screen max-w-min -translate-x-1/2'>
                                                            <div className='w-56 flex-auto overflow-hidden rounded-lg bg-white leading-6 shadow-lg ring-1 ring-gray-900/5 p-2'>
                                                                {nestedLinks.map(
                                                                    (
                                                                        nestedItem
                                                                    ) => (
                                                                        <Link
                                                                            key={
                                                                                nestedItem.title
                                                                            }
                                                                            href={`${link}${nestedItem.link}`}
                                                                        >
                                                                            <p className='rounded-lg text-black hover:bg-saffron hover:text-white p-2.5'>
                                                                                {
                                                                                    nestedItem.title
                                                                                }
                                                                            </p>
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ) : (
                                        <Link key={`${title}`} href={link}>
                                            <p
                                                className={`${router.pathname === `${link}` ||
                                                    router.pathname === `/${link}`
                                                    ? 'gradTxtNavbar'
                                                    : 'text-black hover-gradTxtNavbar'
                                                    } my-2`}
                                            >
                                                {title}
                                            </p>
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                        {/* Hamburger Menu */}
                        <div
                            className={`md:hidden shadow-3xl rounded-full ${isMobileNavOpen
                                ? 'border-saffron border-2'
                                : 'border-0'
                                } outline-none h-[50px] w-[50px] flex items-center justify-center`}
                        >
                            <Bars3Icon
                                toggled={isMobileNavOpen}
                                toggle={setisMobileNavOpen}
                                rounded
                            />
                        </div>
                    </div>
                    {/* Mobile Navbar */}
                    {isMobileNavOpen && width < 768 && (
                        <div className='absolute w-full overflow-y-auto bg-white max-h-[80vh] pb-4'>
                            <div className='border-t border-gray-400 flex flex-col'>
                                {navLinks.map(({ title, link, nestedLinks = [] }) =>
                                    nestedLinks.length > 0 ? (
                                        <Disclosure
                                            key={`${title}`}
                                            as='div'
                                            className='px-8 outline-none'
                                        >
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button
                                                        className={`flex w-full items-center justify-between outline-none ${open
                                                            ? 'border-b border-gray-400'
                                                            : ''
                                                            }`}
                                                    >
                                                        <p className='text-base font-medium py-2.5'>
                                                            {title}
                                                        </p>
                                                        <ChevronDownIcon
                                                            className={`h-5 w-5 flex-none
                                                              ${open ? 'rotate-180' : ''}
                                                          `}
                                                            aria-hidden='true'
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className='mt-2.5 outline-none flex flex-col divide-y divide-gray-400 border border-gray-400 rounded-sm'>
                                                        {nestedLinks.map(
                                                            (nestedItem) => (
                                                                <Link
                                                                    key={
                                                                        nestedItem.title
                                                                    }
                                                                    href={`${link}${nestedItem.link}`}
                                                                    className='outline-none'
                                                                >
                                                                    <p className='py-2 outline-none px-4 text-base font-medium inline-block'>
                                                                        {
                                                                            nestedItem.title
                                                                        }
                                                                    </p>
                                                                </Link>
                                                            )
                                                        )}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ) : (
                                        <Link
                                            key={`${title}`}
                                            href={link}
                                            className='px-4 outline-none'
                                        >
                                            <p
                                                className={`${router.pathname === `${link}` ||
                                                    router.pathname === `/${link}`
                                                    ? 'gradTxtNavbar'
                                                    : ''
                                                    } py-2.5 px-4 text-base font-medium inline-block`}
                                            >
                                                {title}
                                            </p>
                                        </Link>
                                    )
                                )}
                            </div>
                            <div className='mx-8 border-t border-gray-400'>
                                <p className='py-2 text-sm font-medium'>
                                    Need Help? Talk to an expert{' '}
                                    <strong>9876543210</strong>
                                </p>
                                <button
                                    type='button'
                                    className='transform rounded-full bg-saffron p-1 pl-5 pr-5 font-semibold text-black'
                                >
                                    Latest Jobs
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>)
}