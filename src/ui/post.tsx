import { SmallArrow } from "@/ui/arrow";
import Link from "next/link";

export const Post = ({ post }: any) => {

    // Convertir la fecha de creación a un formato más legible. Puede ser que no tenga fecha de creación, en ese caso uso la fecha que se creo el registro.
    const dateToConvert = post.properties.Date.date?.start || post.created_time
    const date = new Date(dateToConvert).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <div className="flex flex-col w-full">
            <h3>
                {post.properties.Page.title[0].plain_text}
            </h3>
            <h4 className="text-gray-500 text-sm italic mb-2">
                {date}
            </h4>
            <p className="text-gray-500 text-sm italic mb-2">
                {post.properties.Preview.rich_text[0].plain_text}
            </p>
            <div className="flex w-fit justify-center border-b-2 border-white transition-all duration-300 ease-in-out hover:border-gray-500">
                <Link href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`} key={post.id} className="flex flex-row items-center gap-2">
                    Read more
                    <SmallArrow />
                </Link>
            </div>
        </div>
    )
}