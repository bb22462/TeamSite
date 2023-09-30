import PostPreview from "@/app/components/post_preview";
import AnimatedButton from "../components/animated_button";

export async function getPosts(page: number) {
  var cur_page: any = await getPageCount() - (page - 1);
  let res = await fetch(
    `http://localhost:1337/api/posts?pagination[page]=${cur_page}&pagination[pageSize]=5`,
    {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
  let pageSize = Object.keys(res.data).length;
  let elements: any[] = [];

  if (Object.keys(res.data).length > 0) {
    if (page != 1) {
       elements.push(
        <a href={`/news/${page - 1}`}>Previous Page</a>
       ) 
    }
    for (var i = 0; i < pageSize; i++) {
      elements.push(
        <PostPreview
          href={`/blog/${res.data[i].id}`}
          date={res.data[i].attributes.Date}
          title={res.data[i].attributes.Title}
        />
      );
    }
    if (page != res.meta.pagination.pageCount) {
        elements.push(
         <a href={`/news/${page + 1}`}>Next Page</a>
        ) 
     }
  } else {
    let notfound: any[] = [
    <>
      <div>
          <h1>Page Not Found</h1>
      </div>
    </>
    ];
    return notfound;
  }

  return elements.reverse();
}

export async function getData(post: string) {
  let res = await fetch(`https://strapi-indx-blog.onrender.com/api/posts/${post}`, {
    method: "GET",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  // Recommendation: handle errors
  return res.data.attributes;
}

export async function getPageCount() {
  let res = await fetch(`http://localhost:1337/api/posts?pagination[page]=1&pagination[pageSize]=5`, {
    method: "GET",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  // Recommendation: handle errors
  return res.meta.pagination.pageCount;

}