import dynamic from 'next/dynamic';
import fs from "fs";
import { Button } from '@mantine/core';
import { removeExtension, toTitleCase } from "./util";
import Link from 'next/link';

export default function Home() {
  const files = fs.readdirSync("./src/app/content");
  // const components = files.map(file => {
  //   const Component = dynamic(() => import(`./content/${file}`));
  //   return <Component/>;
  // });
  const filesWithTitle: {
    file: string,
    title: string
  }[] = files.map(file => {
    const noExtension = removeExtension(file);
    const title = toTitleCase(noExtension, "-");
    return { file: noExtension, title };
  });

  function displayPosts() {
    const navComponents = filesWithTitle.map(file => {
      return <Link key={file.file} href={`post/${file.file}`}>{file.title}</Link>
    });

    return (
      <nav>
        {...navComponents}
      </nav>
    );
  }

  return (
    <main>
      <h1>Title</h1>
      <Button>AH</Button>
      {displayPosts()}
      {/* {...components} */}
    </main>
  );
}
