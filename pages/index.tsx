import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center
            min-h-screen py-2
            bg-gradient-to-tr from-blue-900 via-slate-800 to-cyan-900
            text-neutral-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Image src="/readme.icon.png" alt="Readme Logo (to be replaced)" height={256} width={256} />

        <h2 className="text-4xl mt-4 mb-4 font-mono">Announcement Video is Live!</h2>

        <div className="w-full relative h-0 pb-[56.25%] md:w-[560px] md:h-[315px] md:pb-0">
         <iframe 
           className="absolute t-0 l-0 w-full h-full"
           width="560"
           height="315"
           src="https://www.youtube.com/embed/crk0t5j3icg"
           title="YouTube video player"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowFullScreen
           ></iframe>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="p-4 font-mono w-full md:w-3/4">
            If you are as excited as we are (not possible really) and want to be a part of this awesome community, join the Discord below.
          </div>

          <Link className="border rounded bg-[#5865F2] hover:opacity-50 p-4 font-mono font-bold" href="https://discord.gg/V4G58hPdPj" target="_blank">Join the Discord</Link>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t mt-8">
        <p>Lovingly made with Tailwind. (Don't @ me)</p>
      </footer>
    </div>
  )
};

export default Home;
