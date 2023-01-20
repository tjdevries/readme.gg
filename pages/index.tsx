import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center
             
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

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center min-h-screen">
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
          <span className="absolute top-[258px] md:top-[523px] left-[50%] -translate-x-[50%] text-black font-mono">Ready to get started?</span>
          <Link className="absolute top-[395px] md:top-[561px] left-[50%] -translate-x-[50%] border rounded bg-[#5865F2] hover:opacity-50 p-4 font-mono font-bold" href="https://discord.gg/V4G58hPdPj" target="_blank">Join the Discord</Link>
        </div>
      </main>

      <main className="min-h-screen w-full flex flex-col items-center">
        <h2 className="text-2xl font-mono">Book for the Quarter:</h2>
        <Image src="/seven_languages_seven_weeks.jpg" className="pb-4 px-4" height={518} width={432} alt="Seven Languages in Seven Weeks: A Pragmatic Guide to Learning Programming Languages" />
        <h3 className="text-xl font-mono">Available for Purchase:</h3>
        <ul>
          <li className="p-2 font-bold text-rose-600 hover:underline"><Link href="https://pragprog.com/titles/btlang/seven-languages-in-seven-weeks/">The Pragmatic Bookshelf</Link></li>
          <li className="p-2 font-bold text-rose-600 hover:underline"><Link href="https://www.amazon.com/Seven-Languages-Weeks-Programming-Programmers/dp/193435659X">Amazon</Link></li>
          <li className="p-2 font-bold text-rose-600 hover:underline"><Link href="https://www.abebooks.com/9781934356593/Seven-Languages-Weeks-Pragmatic-Guide-193435659X/plp">AbeBooks</Link></li>
        </ul>
      </main>

      <footer className="flex w-full items-center justify-center">
        <p>Lovingly made with Tailwind. (Don't @ me)</p>
      </footer>
    </div>
  )
};

export default Home;
