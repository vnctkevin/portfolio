import Image from "next/image";
import Head from 'next/head'
import Link from "next/link"
import IndexPage from "../../components/IndexPage";
import * as React from "react"
import type { Metadata } from "next";
import "./globals.css"
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
    title: "Kevin's Portfolio",
    description: "Kevin's (@vnctkevin) personal portfolio website",
    keywords: ["portfolio", "Kevin", "software", "development", "design", "vnctkevin"],
    icons: [
        {
            rel: "icon",
            url: "/favicon.ico",
        }
    ]
  };

export default function Index() {
  return (
    <>
    <ThemeProvider attribute="class">
    <Head>
        <title>Kevin's Portfolio</title>
        <meta name="description" content="Kevin's (@vnctkevin) personal portfolio website" />
        <meta name="keywords" content="portfolio, Kevin, software, development, design, vnctkevin" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G6JD3QFVBB"></script>
        <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G6JD3QFVBB');
        `}
        </script>
    </Head> 
      <IndexPage />
    </ThemeProvider>
    </>
  )
}
