import notion_client from "@/lib/client";
import type { IPost } from "@/types/post";
import { Layout } from "@/ui/layout";
import { Post } from "@/ui/post";
import type { GetStaticProps } from "next";
import Head from 'next/head';

export default function Blog({ posts }: { posts: IPost[] }) {
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
                    {posts && posts.map((post: IPost) => (
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
        database_id: process.env.NOTION_DATABASE_ID,
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

    const posts: IPost[] = []
    // Formateo la data en un array de IPost
    // Eventualmente podría agregar los tags, ya que los tengo en la DB 🤔

    // TODO: Arreglar el tipo de la data que devuelve la API de Notion
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    database.results.map((post: any) => {
        posts.push({
            id: post.id,
            properties: {
                Page: post.properties.Page,
                Slug: post.properties.Slug,
                Preview: post.properties.Preview,
                Date: post.properties.Date
            },
            created_time: post.created_time
        })
    })

    return {
        props: {
            posts: posts
        }
    }
}