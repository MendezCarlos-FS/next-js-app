import dynamic from 'next/dynamic';
import fs from "fs";
import { Button, Group, Stack } from '@mantine/core';
import { removeExtension, toTitleCase } from "./util";
import Link from 'next/link';

export default function Home() {
  const files = fs.readdirSync("./src/app/content");
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
      return <Link key={file.file} href={`/post/${file.file}`}><h2>{file.title}</h2></Link>
    });

    return (
      <nav className='flex gap-5'>
        {...navComponents}
      </nav>
    );
  }

  return (
    <main className='flex flex-col gap-5
      justify-between items-center'>
      <h1>Blog Posts</h1>
      {displayPosts()}
    </main>
  );
}
