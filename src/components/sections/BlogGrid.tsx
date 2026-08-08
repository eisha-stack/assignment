import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { blogContent } from "@/data/blog";

export function BlogGrid() {
  return (
    <section id="blog" className="bg-white pb-24 pt-16 sm:pb-28 sm:pt-20">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
            {blogContent.title}
          </h2>
          <p className="text-sm leading-7 text-body">{blogContent.description}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {blogContent.posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 100}>
              <Link href={post.href} className="group block">
                <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="relative z-10 -mt-10 mx-4 flex flex-col gap-3 rounded-xl bg-white p-5 shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
                  <h3 className="font-heading text-base font-semibold leading-6 text-ink transition-colors duration-200 group-hover:text-primary-700">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600">
                    {post.readMoreLabel}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.333 8h9.334M8.667 3.667 13 8l-4.333 4.333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
