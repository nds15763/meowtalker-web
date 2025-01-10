import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import Header from "@/app/_components/header";
import { getAllPosts } from "@/lib/api";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-24">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8">
            博客文章
          </h1>
          {posts.length > 0 && <MoreStories posts={posts} />}
        </Container>
      </main>
    </>
  );
}
