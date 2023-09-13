import Link from "next/link";
import { PostMetaData } from "./PostMetaData.";

const PostPreview= (props:PostMetaData) => {
return(
    <div className="border border-slate-200 p-4 rounded-xl shadow-md bg-white mx-0">
    <Link href={`/posts/${props.slug}`}>
        
    <h2 className="font-bold text-violet-600 hover:underline" >{props.title}</h2>
    </Link>
    <p className="text-sm text-slate-400">{props.date}</p>
    <p className="text-slate-700">{props.subtitle}</p>
    
    
</div>

)
}

export default PostPreview;