import dynamic from 'next/dynamic';
import fs from "fs";
import { Button } from '@mantine/core';

export default function Home() {
  const files = fs.readdirSync("./src/app/content");
  const components = files.map(file => {
    const Component = dynamic(() => import(`./content/${file}`));
    return <Component/>;
  });
  return (
    <main>
      <h1>Hey</h1>
      <Button>AH</Button>
      {...components}
    </main>
  );
}
