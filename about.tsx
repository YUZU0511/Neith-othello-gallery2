
import Head from 'next/head';

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <Head><title>About - Neith Othello</title></Head>
      <h1 className="text-4xl font-bold mb-4">About Neith Othello</h1>
      <p className="leading-relaxed text-lg whitespace-pre-line">
Neith Othelloは
「論理と感情のバランス」をテーマに活動している唯一無二のミステリアスなアーティストだ。
様々な分野の知識や歴史を盛り込み、どこか破壊的で怪奇な独特の世界観と言語で誰も見たことのないアートを作る。
この世界に存在しないその不可解な生物のようなものは、見たあなた心や脳に何を伝えようとしているのか？

日々批判を恐れ、感情を押し殺して生きるあなた。
正論を振りかざすあなた。

いま、この時からあなたはこのミステリアスなアーティスト"Neith Othello"の
生涯をかけた謎解きゲームに巻き込まれたのだ。

その謎。もう解くしかない。
あなたには、解けるか？
      </p>
    </div>
  );
}
