import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center
            min-h-screen 
            bg-gradient-to-tr from-blue-900 via-slate-800 to-cyan-900
            text-neutral-100">
      <Head>
        <title>README - The software developer book club</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {/*<Image src="/readme.icon.png" alt="Readme Logo (to be replaced)" height={768} width={768} />*/}

        <div className="w-[400px] h-[400px] md:h-[800px] md:w-[800px] bg-[url('/readme.icon.png')] bg-no-repeat bg-cover relative">
          <div className="absolute top-[68px] left-[106px] w-[188px] h-[153px] md:left-[216px] md:top-[163px] md:w-[367px] md:h-[255px] pb-0 bg-black pt-[30px] pb-[30px]">
           <iframe 
             className="w-full h-full"
             width="560"
             height="315"
             src="https://www.youtube.com/embed/crk0t5j3icg"
             title="YouTube video player"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowFullScreen
             ></iframe>
          </div>
          <span className="absolute top-[258px] left-[93px] md:top-[523px] md:left-[308px] text-black font-mono">Ready to get started?</span>
          <Link className="absolute top-[395px] left-[102px] md:top-[561px] md:left-[313px] border rounded bg-[#5865F2] hover:opacity-50 p-4 font-mono font-bold" href="https://discord.gg/V4G58hPdPj" target="_blank">Join the Discord</Link>
        </div>
        {/*<h2 className="text-4xl mt-4 mb-4 font-mono">Announcement Video is Live!</h2>*/}

        <div className="w-full relative h-0 pb-[56.25%] md:w-[560px] md:h-[315px] md:pb-0 hidden">
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

        <div className="flex flex-col justify-center items-center hidden">
          <div className="p-4 font-mono w-full md:w-3/4">
            If you are as excited as we are (not possible really) and want to be a part of this awesome community, join the Discord below.
          </div>

          <Link className="border rounded bg-[#5865F2] hover:opacity-50 p-4 font-mono font-bold" href="https://discord.gg/V4G58hPdPj" target="_blank">Join the Discord</Link>
        </div>
      </main>

      <footer className="flex w-full items-center justify-center">
        <p>Lovingly made with Tailwind. (Don't @ me)</p>
      </footer>
    </div>
  )
};

export default Home;
