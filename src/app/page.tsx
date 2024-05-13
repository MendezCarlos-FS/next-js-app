import fs from "fs";
import { Card, Divider } from '@mantine/core';
import { removeExtension, toTitleCase } from "./util";
import Link from 'next/link';
import Image from "next/image";

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
      return (
      <Card key={file.file} shadow='md' padding='lg' radius='md' withBorder>
        <Link href={`/post/${file.file}`}><h3>{file.title}</h3></Link>
      </Card>
      );
    });

    return (
      <nav className='flex flex-col gap-5 items-center'>
        {...navComponents}
      </nav>
    );
  }

  return (
    <main className='flex gap-5'>
        <section className='flex flex-col gap-5
          justify-between items-center'>
          <h1>Blog Posts</h1>
          {displayPosts()}
        </section>
    </main>
  );
}
