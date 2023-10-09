import Post from "@/app/components/post";
import { getData } from "@/app/functions/get_data";
import { metadata } from "@/app/layout";

export default async function Page({ params }: { params: { id: string } }) {

  let post = await getData(params.id);
  return (
    <Post title={post.Title} date={post.Date} article={post.Article}></Post>
  );
}
