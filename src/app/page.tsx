import Container from "@/app/_components/container";
import { MainImageText } from "@/app/_components/main-image-text";
import Header from "@/app/_components/header";

export default function Index() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Container>
          <MainImageText
            backgroundImage="/assets/images/banner.png"
            title="与猫咪对话的神奇体验"
            description="使用 MeowTalker，让您真正理解猫咪的想法。现在就开始与您的毛茸茸小伙伴进行心灵对话吧！"
            buttonText="下载"
            buttonLink="/download"
            contentAlign="center"
          />
        </Container>
      </main>
    </>
  );
}
