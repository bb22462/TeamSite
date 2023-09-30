import PostPreview from "@/app/components/post_preview";
import {getPosts} from "@/app/functions/get_data";
import { metadata } from "@/app/layout";

export default async function Page({ params }: { params: { id: string } }) {
    const posts = await getPosts(Number(params.id))
    metadata.title = "Blog"
    return(
        <main className="p-8 flex flex-col">
          {posts}
        </main>
    )
}

