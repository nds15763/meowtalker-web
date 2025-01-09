import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MainImageText } from "@/app/_components/main-image-text";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  // const heroPost = allPosts[0];

  const morePosts =allPosts;

  return (
    <main>
      <Container>
        <Intro />
        <MainImageText
          backgroundImage="/assets/images/banner.png"
          title="与猫咪对话的神奇体验"
          description="使用 MeowTalker，让您真正理解猫咪的想法。现在就开始与您的毛茸茸小伙伴进行心灵对话吧！"
          buttonText="下载"
          buttonLink="/download"
          contentAlign="center"
        />
        {/* <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        /> */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
