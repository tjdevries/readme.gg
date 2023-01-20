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

      <main className="min-h-screen w-full flex flex-row justify-around">
        <div className="flex flex-col mx-4 shrink-0">
          <h2 className="text-2xl font-mono">Book for the Quarter:</h2>
          <Image src="/seven_languages_seven_weeks.jpg" className="pb-4 px-4" height={518} width={432} alt="Seven Languages in Seven Weeks: A Pragmatic Guide to Learning Programming Languages" />
          <h3 className="text-xl font-mono">Available for Purchase:</h3>
          <ul>
            <li className="p-2 font-bold text-rose-600 hover:underline"><Link href="https://pragprog.com/titles/btlang/seven-languages-in-seven-weeks/">The Pragmatic Bookshelf</Link></li>
            <li className="p-2 font-bold text-rose-600 hover:underline"><Link href="https://www.amazon.com/Seven-Languages-Weeks-Programming-Programmers/dp/193435659X">Amazon</Link></li>
            <li className="p-2 font-bold text-rose-600 hover:underline"><Link href="https://www.abebooks.com/9781934356593/Seven-Languages-Weeks-Pragmatic-Guide-193435659X/plp">AbeBooks</Link></li>
          </ul>
        </div>
        <div className="flex flex-col mx-4">
          <h2 className="text-2xl font-mono">Your Hosts:</h2>
          <div className="flex flex-row mb-4">
            <div className="flex-1 p-4 mr-4">
              <ul>
                <li>Core Maintainer: <Link className="hover:underline text-orange-600" target="_blank" href="https://github.com/neovim/neovim">Neovim</Link> with over 40k stars & over 1 million downloads.</li>
                <li>Community Builder: <Link className="hover:underline text-orange-600" target="_blank" href="https://github.com/nvim-telescope/telescope.nvim">telescope.nvim</Link> which has over 50 contributors in less than 6 months.</li>
                <li>Developer Tool Creator:<Link className="hover:underline text-orange-600" target="_blank" href="https://github.com/nvim-lua/plenary.nvim/"> plenary.nvim</Link></li>
                <li>Working at: <Link className="hover:underline text-orange-600" target="_blank" href="https://sourcegraph.com/search">Sourcegraph</Link></li>
                <li>Live Coder: <Link className="hover:underline text-orange-600" target="_blank" href="https://www.twitch.tv/teej_dv">teej_dv</Link></li>
              </ul>
              <span className="relative"><Link className="hover:underline text-orange-600" target="_blank" href="https://twitter.com/teej_dv">Twitter</Link> | <Link className="hover:underline text-orange-600" target="_blank" href="https://www.twitch.tv/teej_dv">Twitch</Link> | <Link className="hover:underline text-orange-600" target="_blank" href="https://github.com/tjdevries">GitHub</Link> | <Link className="hover:underline text-orange-600" target="_blank" href="https://www.youtube.com/c/TjDeVries">YouTube</Link></span>
            </div>
            <div className="flex justify-center items-center rounded-full border-2 border-black w-48 h-48 bg-orange-600">teej_dv</div>
          </div>
          <div className="flex flex-row mb-4">
            <div className="flex justify-center items-center rounded-full border-2 border-black w-48 h-48 bg-green-600">bashbunni</div>
            <div className="flex-1 p-4 ml-4">
              <p>I'm a software developer and content creator who builds mostly with Go. I do developer relations at <Link className="hover:underline text-green-600" target="_blank" href="https://charm.sh/">@charmcli</Link> which is top tier ~fabulous~. I hack on open source projects (my own, Charm's, and others) in public on my Twitch channel. I also have a YouTube channel where I post more curated content on what I'm learning. I love long form content because I resent how social media platforms can feel like a highlight reel of people's lives, when in reality, we all struggle, especially when coding (heh).</p>
              <span className="relative"><Link className="hover:underline text-green-600" target="_blank" href="https://twitter.com/sudobunni">Twitter</Link> | <Link className="hover:underline text-green-600" target="_blank" href="https://www.twitch.tv/bashbunni">Twitch</Link> | <Link className="hover:underline text-green-600" target="_blank" href="https://github.com/bashbunni">GitHub</Link> | <Link className="hover:underline text-green-600" target="_blank" href="https://www.youtube.com/bashbunni">YouTube</Link></span>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex w-full items-center justify-center">
        <p>Lovingly made with Tailwind. (Don't @ me)</p>
      </footer>
    </div>
  )
};

export default Home;
