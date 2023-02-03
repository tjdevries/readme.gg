import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import path from 'path';
import { promises as fs } from 'fs';
import { Url } from 'url';
import HostsHeader from '../components/HostsHeader';
import BookHeader from '../components/BookHeader';

interface PurchaseLink {
  label: string,
  url: Url
}

interface Book {
  image: string,
  purchaseLinks: PurchaseLink[],
}

interface Host {
  name: string,
  image: string,
  bio: string,
  twitch: string,
  twitter: string,
  youtube: string,
  github: string,
}

interface MainPage {
  content: {
    pageTitle: string,
    computerYouTube: string,
    subText: string,
    callToAction: string,
    book: Book,
    hosts: Host[],
  },
}

const Home: NextPage<MainPage> = ({ content }: MainPage) => {
  return (
    <div className="flex flex-col items-center justify-center
            bg-gradient-to-tr from-blue-900 via-slate-800 to-cyan-900
            text-neutral-100">
      <Head>
        <title>{content.pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <main className="flex w-full xl:basis-1/2 flex-1 flex-col items-center justify-center px-20 md:px-0 text-center min-h-screen">
          <div className="w-[400px] h-[400px] md:h-[800px] md:w-[800px] bg-[url('/readme.icon.png')] bg-no-repeat bg-cover relative">
            <div className="absolute top-[68px] left-[106px] w-[188px] h-[153px] md:left-[216px] md:top-[163px] md:w-[367px] md:h-[255px] pb-0 bg-black pt-[30px] pb-[30px]">
              <iframe
                className="w-full h-full"
                width="560"
                height="315"
                src={content.computerYouTube}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <span className="absolute top-[258px] md:top-[523px] left-[50%] -translate-x-[50%] text-black font-mono">{content.subText}</span>
            <Link className="absolute top-[395px] md:top-[561px] left-[50%] -translate-x-[50%] border rounded bg-[#5865F2] hover:opacity-50 p-4 font-mono font-bold" href="https://discord.gg/V4G58hPdPj" target="_blank">{content.callToAction}</Link>
          </div>
        </main>

        <main className="min-h-screen w-full xl:basis-1/2 flex flex-col xl:flex-row justify-around xl:items-center">
          <div className="flex flex-col mx-4 items-center shrink-0">
            <BookHeader />
            <Image src={content.book.image} className="pb-4 px-4" height={518} width={432} alt="Seven Languages in Seven Weeks: A Pragmatic Guide to Learning Programming Languages" />
            <h2 className="text-xl font-mono">Available for Purchase:</h2>
            <span className="text-sm">Use code <span className="bg-black rounded text-green-500 p-1">READMESEVEN</span> for 30% off at The Pragmatic Bookshelf</span>
            <ul>
              {content.book.purchaseLinks && content.book.purchaseLinks.map(
                (link) => (<li className="p-2 font-bold text-[#F1005A] hover:underline" key={link.label}><Link href={link.url}>{link.label}</Link></li>)
              )
              }
            </ul>
          </div>
          {/*<div className="flex flex-col mx-4">*/}
          {/* TO BE ADDED IN WHEN ALL HOST INFORMATION IS OBTAINED */}
          {/*<HostsHeader />*/}
          {/*
            content.hosts && content.hosts.map((host) => (
              <div className="flex flex-row mb-8">
                <div className="flex-1 p-4 mr-4">
                  <div>{host.bio}</div>
                  <span className="relative">
                    <Link className="hover:underline text-[#F1005A]" target="_blank" href={host.twitter}>Twitter</Link>
                    &nbsp;|&nbsp;
                    <Link className="hover:underline text-[#F1005A]" target="_blank" href={host.twitch}>Twitch</Link>
                    &nbsp;|&nbsp;
                    <Link className="hover:underline text-[#F1005A]" target="_blank" href={host.github}>GitHub</Link>
                    &nbsp;|&nbsp;
                    <Link className="hover:underline text-[#F1005A]" target="_blank" href={host.youtube}>YouTube</Link>
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col grow-0 justify-center items-center border-1 border-gray-800 bg-neutral-200 rotate-[5deg]">
                    <div className="relative bg-black h-36 w-36 border-neutral-200 border-[12px]">
                      <Image src={host.image} fill className="w-full h-full" alt={`A photo of ${host.name}`} />
                    </div>
                    <div className="text-black font-mono pb-1">{host.name}</div>
                  </div>
                </div>
              </div>
            ))
          */}
          {/*</div>*/}
        </main>
      </div>
      <footer className="flex w-full items-center justify-center">
        <p className="opacity-70">Lovingly made with Tailwind. (Don't @ me)</p>
      </footer>
    </div>
  )
};

export async function getStaticProps() {
  // Grab the content file from our faux-headless-cms
  const publicDirectory = path.join(process.cwd(), 'public');
  const fileContent = await fs.readFile(publicDirectory + '/content.json', 'utf8');
  const content = JSON.parse(fileContent);

  return {
    props: {
      content,
    },
  };
};

export default Home;
