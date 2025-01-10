import Container from "@/app/_components/container";
import { MainImageText } from "@/app/_components/main-image-text";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default function Index() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex">
        <div className="w-full h-full">
          <MainImageText
            backgroundImage="/assets/images/banner.png"
            title="The magical experience of conversing with cats."
            description="With MeowTalker, you can truly understand what your cat is talking about. Start having a heart-to-heart conversation with your furry little friend today!"
            buttonText="Download"
            buttonLink="/download"
            contentAlign="center"
            fullHeight
          />
        </div>
      </main>
    </div>
  );
}
