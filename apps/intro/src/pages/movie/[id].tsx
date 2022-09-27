import { Button, Container, Typography } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { Flex } from "rebass";

type MovieItemProps = {
  info: Object[];
};

export default function MovieIem({ info }: MovieItemProps) {
  return (
    <Container>
      <Head>
        <title>Intro NextJS</title>
      </Head>

      <Flex
        mt={"80px"}
        mb={"40px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h4">Movie: {info.title}</Typography>
      </Flex>

      <Flex
        mt={"10px"}
        mb={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h6">Note: {info.vote_average}</Typography>
      </Flex>

      <Flex
        mt={"80px"}
        mb={"40px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h6">{info.overview}</Typography>

        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="500"/>
      </Flex>
      
      <Flex
        mt={"10px"}
        mb={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button>
          <Link href="/">Go to Home</Link>
        </Button>
      </Flex>
    </Container>
  );
}

export async function getServerSideProps(context: { params: { id: string } }) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/movie/${context.params.id}`
    );
    const json = await res.json();

    return {
      props: {
        info: json.info,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
