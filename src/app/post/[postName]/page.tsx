import dynamic from "next/dynamic";
import fs from "fs";
import { removeExtension } from "@/app/util";

export async function generateStaticParams() {
    const files = fs.readdirSync("./src/app/content");
    
    return files.map(file => {
        return { postName: removeExtension(file) };
    })
}

export default function Post(params: { params: { postName: string }}) {
    const fileName = params.params.postName;
    if (!fs.existsSync(`./src/app/content/${fileName}.mdx`)) {
        return (
            <h2 className="prose">This post does not exist!</h2>
        )
    }

    let Component = dynamic(() => import(`../../content/${fileName}.mdx`));

    return (
        <Component/>
    )
}