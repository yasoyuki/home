import Footer from "./templates/organisms/Footer";
import Header from "./templates/organisms/Header";
import { IoArrowDownCircleSharp } from "react-icons/io5";


const Home = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto">
        <section className="text-2xl flex flex-col items-center px-3 py-5 h-auto mx-auto mt-20">
          <p className="border-b-4 border-red-500 pb-2 mb-5">ABOUT</p>
          <img src="../about.jpg" alt="自分の写真" className="w-64 md:w-80" />
          <span className="text-base pt-5 w-3/4 md:w-1/2">
            私はWebライターおよびWeb制作のフリーランスとして活動したのち、異業種での経験を経て、新たな視点を持ってまたIT業界へ戻って参りました。IT企業での事務職を約1年間、コーダーとして約1年間キャリアを築いてきました。<br />
            フリーランス時代には、様々なクライアントのニーズに応えることで、コンテンツ制作とWebデザインの幅広いスキルを習得しました。その後、IT企業での事務職を通じて、組織運営の裏側を学び、チームワークとプロジェクト管理の重要性を実感しました。<br />
            最近では、コーダーとしてHTML、CSS、JavaScriptを用いたフロントエンド開発に携わり、ユーザーインターフェースの重要性と、エンドユーザーにとっての使いやすさを常に念頭に置くことの大切さを学びました。<br />
            これらの経験を基に、WebとITの分野でさらにスキルアップし、新しい挑戦を続けていきたいと考えています。</span>
        </section>

        <section className="text-2xl px-3 py-5 h-auto mx-auto mt-20">
          <div className="flex flex-col items-center  mb-8">
            <p className="border-b-4 border-red-500 pb-2 mb-5">WEB SITE</p>
            <div className="mt-3 px-5">
              <p className="text-xl text-left lg:text-2xl">コワーキングスペースのHP</p>
              <ul className="text-base my-3">
                <li>- LPページ</li>
                <li>- レスポンシブ対応</li>
                <li>- フレームワークはNext.jsを使用</li>
                <li>- Typeacriptを採用</li>
              </ul>
            </div>
            <a href="https://website01-gold.vercel.app/">
              <button className="header hover:bg-blue-500 text-white px-8 border-none rounded-full flex items-center justify-center text-lg my-5 h-12">
                <div className="text-2xl"><IoArrowDownCircleSharp /></div><p className="mt-2">　サイトを見る</p></button>
            </a>
            <div className="lg:flex ">
              <div className="w-11/12 mx-auto md:w-4/5 lg:w-3/5">
                <p>PC</p>
                <picture>
                  <img src="../portfolio01-pc.jpg" alt="ポートフォリオサムネ" />
                </picture>
              </div>
              <div className="w-2/5 mx-auto lg:w-1/5 mt-10 lg:mt-0">
                <p>SP</p>
                <picture>
                  <img src="../portfolio01-sp.jpg" alt="ポートフォリオサムネ" />
                </picture>
              </div>
            </div>
          </div>
        </section>

        <section className="text-2xl px-3 py-5 h-auto mx-auto mt-20">
          <div className="flex flex-col items-center mb-8">
            <p className="border-b-4 border-red-500 pb-2 mb-5">BANNER</p>
            <div className="grid grid-cols-1 w-80 md:w-3/4 md:px-20 md:grid-cols-2 gap-6">
              <img src="../banner001.png" alt="バナー１" />
              <img src="../banner002.png" alt="バナー２" />
              <img src="../banner003.png" alt="バナー３" />
              <img src="../banner004.png" alt="バナー４" />
              <img src="../banner005.png" alt="バナー５" />
              <img src="../banner006.png" alt="バナー６" />
            </div>
          </div>
        </section>

        <section className="text-2xl  px-3 py-5 h-auto mx-auto mt-20">
          <div className="flex flex-col items-center mb-8">
            <p className="border-b-4 border-red-500 pb-2 mb-5">SKILL SET</p>
            <div className="">
              <p>HTML,CSS</p>
              <p>React(Next.js)</p>
              <p>Tailwind CSS</p>
              <p>Photoshop,Illustrator</p>
              <p>Github</p>
              <p>Figma</p>
            </div>
          </div>
        </section>
        <section className="text-2xl  px-3 py-5 h-auto mx-auto mt-20">
          <div className="flex flex-col items-center mb-8">
            <p className="border-b-4 border-red-500 pb-2 mb-5">MATERIAL</p>
            <div className="text-xl">
              <p>イラストAC</p>
              <p>Unsplash</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
