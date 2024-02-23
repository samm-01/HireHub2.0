import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
const inter = Inter({ subsets: ['latin'] })
import { Disclosure, Popover, Transition } from '@headlessui/react';
import navLinks from '../../constants/navLinks';
import useWindowSize from '../../hooks/useWindowSize';
// import FadeHamburgerIcon from './FadeHamburgerIcon';
import { ChevronDownIcon, ChevronUpIcon, Bars3Icon } from '@heroicons/react/20/solid';
import Header from '../../components/header';

export default function Home() {
  const router = useRouter();
  const { width } = useWindowSize();

  const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav
  return (

    <Header />
  )
}
