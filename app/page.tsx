import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Hugo Rafael de Lima
      </h1>
      <h1 className="my-8 text-3xl font-normal tracking-tighter">
        Full Stack Software Engineer
      </h1>
      <div className="space-y-4">
        <p>
          Nothing satisfies me more than leading people in search of solutions
          to complex problems. I work as a software engineer and full-stack
          developer, and I also conduct bootcamps to train Junior and Mid-level
          developers.
        </p>
        <p>
          Over the course of 7 years of experience, I have had the opportunity
          to mentor and contribute to prominent projects in companies such as
          Itaú, Bradesco, USIMINAS, C6 Bank, UNICRED and Casa&Vídeo.
        </p>
        <p>
          I am open to being part of scalable and high-impact projects, aiming
          to highlight my skills in optimization, project architecture, and team
          management.
        </p>
      </div>
      <h1 className="my-8 text-3xl font-normal tracking-tighter">
        Recent Posts
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
