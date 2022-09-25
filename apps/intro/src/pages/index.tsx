import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "ui";

const ContentList = styled.div`
`;

type HomeProps = {
  list: Object[];
};

export default function Home({ list }: HomeProps) {
  return (
    <>
      <Head>
        <title>Intro NextJS</title>
      </Head>
      <h1>Intro</h1>
      <h2>Featured Movies</h2>

      <ContentList>
        {list.map((item) => (
          <a href={`/movie${item.id}`}>
            <>
              <Image
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt="Landscape picture"
                width={150}
                height={260}
              />
              {item.title}
            </>
          </a>
        ))}
      </ContentList>

      <Button />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`http://localhost:3000/api/trending`);
    const json = await res.json();

    return {
      props: {
        list: json.list,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
