import fs from 'fs';
import matter from 'gray-matter';
import { PostMetaData } from '@/components/PostMetaData.';







const getPostMetadata = ():PostMetaData[] => {
    const folder = "posts/";
    const files= fs.readdirSync(folder); 
    const markdownPosts = files.filter((file) => file.endsWith(".md"));


const posts = markdownPosts.map((fileName) => {
    const fileContents=fs.readFileSync(`posts/${fileName}`, {encoding: "utf8"});
    const matterResults=matter(fileContents);
    return {
        title: matterResults.data.title,
        date: matterResults.data.date,
        subtitle: matterResults.data.subtitle,
        slug:fileName.replace(".md", ""),
    };
});

return posts;
};

export default getPostMetadata;