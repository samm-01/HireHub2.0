import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
const inter = Inter({ subsets: ['latin'] })
import useWindowSize from '../../hooks/useWindowSize';
import Header from '../../components/header';
import axios from 'axios';

export default function Home() {
  const router = useRouter();
  const { width } = useWindowSize();

  const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav
  return (

    <Header />
  )
}
