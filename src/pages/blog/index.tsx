import notion_client from "@/lib/client";
import { Layout } from "@/ui/layout";
import { Post } from "@/ui/post";
import { GetStaticProps } from "next";
import Head from 'next/head';

export default function Blog({ posts }: any) {
    return (
        <>
            <Head>
                <title>Valentina Bearzotti | Frontend Developer</title>
                <meta name="description" content="Hey! I'm Valentina, a frontend developer based in Argentina. I'm a huge music enthusiast and I love to build stuff. Check out some of my projects and articles on my website :)" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="flex flex-col w-full gap-8">
                    {posts && posts.map((post: any) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    // Me traigo todos los registros de la DB que esten publicados y los ordeno por fecha de creación
    const database = await notion_client.databases.query({
        database_id: process.env.NOTION_DATABASE_ID as string,
        filter: {
            property: "Published",
            checkbox: {
                equals: true
            }
        },
        sorts: [
            {
                property: "Date",
                direction: "descending"
            }
        ]
    })

    return {
        props: {
            posts: database.results
        }
    }
}