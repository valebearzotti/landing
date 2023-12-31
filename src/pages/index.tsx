import { Layout } from '@/ui/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Valentina Bearzotti | Frontend Developer</title>
        <meta name="description" content="Hey! I'm Valentina, a frontend developer based in Argentina. I'm a huge music enthusiast and I love to build stuff. Check out some of my projects and articles on my website :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <p>
          <b>Based in Argentina 🇦🇷</b>
        </p>
        <p>
          I started my coding journey back in 2018 when I was studying for becoming a Civil Engineer. It was just a subject but the one I enjoyed the most, and ended up switching to pursue a Systems Engineering degree in 2020.
        </p>
        <p>
          My first programming languages were C and Python but I quickly moved to Web Development. Overall, what I really wanted to do is to build stuff and see them live out there in the world. I couldn&apos;t build a bridge like I thought I would end up doing in my first years of college, but I certainly could achieve a lot with coding too.
        </p>
        <p>
          I started with the basics then got into <b>React</b>, and eventually <b>Next</b>.
        </p>
        <p>
          My first job was as a freelance teacher and occasionally some really small web development projects.
          That led me to my first office job in 2021. I took the leap in 2022 and joined a startup team from Australia, where I made the most progress as a person and developer.
        </p>
        <p>
          But anyways, <i>not everything is about work</i>.
        </p>
        <p>
          I&apos;m a huge music enthusiast. I taught myself piano during the pandemic and later took music theory classes. Outside of it, I find joy reading, solving puzzles, and every once in a while, snowboarding. Yeah, I&apos;m a winter person.
        </p>
        <p>
          This is pretty much it but if you want to get in touch you can <Link className='underline' href="mailto:valebearzotti1@gmail.com">write me an email</Link> or follow me on <Link className='underline' href="https://twitter.com/valebearzotti">Twitter</Link> and <Link className='underline' href="https://instagram.com/valebearzotti">Instagram</Link>.
        </p>
        <p>
          🚀
        </p>
      </Layout>
    </>
  )
}