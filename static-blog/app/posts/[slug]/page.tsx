import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';




const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResults = matter(content);
    return matterResults;
  };


export const generateStaticParams = async () => {
    const posts=getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};




const PostPage = (props:any) => {
const slug = props.params.slug;
const post = getPostContent(slug);

    return (
        <div>
            
            <h1 className='text-3xl text-black text-center'>{post.data.title}</h1>
            <article className="prose prose-xl">
            <Markdown>{post.content}</Markdown>
            </article>
        </div>

    )

}

export default PostPage