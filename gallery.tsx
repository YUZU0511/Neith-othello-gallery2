
import Head from 'next/head';

const artworks = [
  {
    title: "q&j#s",
    year: "2023",
    medium: "キャンバス、アクリル、ペン / Canvas, acrylic, pen",
    description: "人は見えてるようで、いつも見えていない。だから失うし、得る。",
    descriptionEn: "People think they see, but they rarely do. That’s why we lose — and also why we gain.",
    image: "/images/art1.jpg"
  },
  {
    title: "@jg",
    year: "2023",
    medium: "キャンバス、アクリル、ペン / Canvas, acrylic, pen",
    description: "あなたが見てる景色は、あなたのものですか?それとも…",
    descriptionEn: "Is the world you're seeing truly yours? Or is it... someone else's?",
    image: "/images/art2.jpg"
  },
  {
    title: "oi/Igjk",
    year: "2023",
    medium: "キャンバス、アクリル、ペン / Canvas, acrylic, pen",
    description: "あなたはこの絵を見た時、何を感じましたか?言わなくていい。心にしまっておいて。",
    descriptionEn: "What did you feel when you saw this? You don’t need to say it. Just keep it in your heart.",
    image: "/images/art3.jpg"
  }
];

export default function Gallery() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <Head><title>Gallery - Neith Othello</title></Head>
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {artworks.map((art, idx) => (
          <div key={idx} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform duration-300">
            <img src={art.image} alt={art.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{art.title} <span className="text-sm text-gray-400">({art.year})</span></h2>
              <p className="text-sm text-gray-300">{art.medium}</p>
              <p className="mt-2 italic">"{art.description}"</p>
              <p className="text-sm text-gray-500 mt-1">{art.descriptionEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
