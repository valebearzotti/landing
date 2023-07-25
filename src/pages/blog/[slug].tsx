import notion_client from "@/lib/client";
import notion_api from "@/lib/notion-api";
import { Layout } from "@/ui/layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { NotionRenderer } from "react-notion-x";

export default function BlogPost({ content }: any) {
    return (
        <Layout>
            <NotionRenderer
                recordMap={content}
                fullPage={true}
                darkMode={false}
                disableHeader={true}
            />
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Como esta ruta es dinámica, necesitamos generar los paths de las páginas que vamos a renderizar
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

    // Me traigo los slugs de la DB
    const slugs = database.results.map((post: any) => post.properties.Slug.rich_text[0].plain_text)

    // Creo los paths con los slugs
    const paths = slugs.map((slug: string) => ({
        params: { slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    // Si quiero usar los slugs predefinidos por mi en la DB de Notion tengo que hacer este paralelismo

    // Me traigo el registro de la DB que tiene el slug que coincide con la ruta actual
    const post = await notion_client.databases.query({
        database_id: process.env.NOTION_DATABASE_ID as string,
        filter: {
            property: "Slug",
            rich_text: {
                equals: params?.slug as string
            }
        }
    })

    // Me traigo el contenido de la página que tiene el ID que me traje en el paso anterior
    const page = await notion_api.getPage(post.results[0].id)

    return {
        props: {
            content: page,
        }
    }
}