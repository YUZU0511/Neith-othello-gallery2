
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <Head>
        <title>Neith Othello Gallery</title>
      </Head>
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
        あなたにこの謎は解けるかな?
      </h1>
      <div className="flex space-x-4">
        <Link href="/gallery">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">Gallery</button>
        </Link>
        <Link href="/about">
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded">About</button>
        </Link>
      </div>
    </div>
  );
}
