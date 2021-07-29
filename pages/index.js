import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout';
import HeaderNavBar from './components/Header';
import Hero from './components/HeroSection';
export default function Home() {
  return (
    <Layout pageTitle="Moneymie, digital bank for African migrants">
        <HeaderNavBar/>
        <Hero/>
    </Layout>
  )
}
