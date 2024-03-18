import Footer from "./templates/organisms/Footer";
import Header from "./templates/organisms/Header";


const Home = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto">
        <section className="text-2xl flex flex-col items-center px-3 py-5 h-auto w-80 mx-auto mt-20">
          <p className="border-b-4 border-red-500 pb-2 mb-5">ABOUT</p>
          <img src="../about.jpg" alt="自分の写真" className="w-64 md:w-auto"/>
          <span className="text-base pt-5">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span>
        </section>

        <section className="text-2xl px-3 py-5 h-auto mx-auto mt-20">
          <div className="flex flex-col items-center  mb-8">
            <p className="border-b-4 border-red-500 pb-2 mb-5">WEB SITE</p>
            <div className="mt-3 px-5">
              <p className="text-xl text-left lg:text-2xl">コワーキングスペースのHP</p>
              <ul className="text-base">
                <li>- LPページ</li>
                <li>- レスポンシブ対応</li>
              </ul>
            </div>
            <a href="https://website01-gold.vercel.app/">
              <img
                src="../portfolio01.jpg" alt="Webサイトサムネ" className="w-screen mx-auto md:w-4/5" />
            </a>
          </div>
        </section>

        <section className="text-2xl px-3 py-5 h-auto mx-auto mt-20">
          <div className="flex flex-col items-center mb-8">
            <p className="border-b-4 border-red-500 pb-2 mb-5">BANNER</p>
            <div className="grid grid-cols-1 w-80 md:w-auto md:px-20 md:grid-cols-2 gap-6">
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
