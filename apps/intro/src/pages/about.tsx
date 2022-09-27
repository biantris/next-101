import {
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { Flex } from "rebass";

type AboutProps = {
  author: string
};

export default function About({ author }: AboutProps) {
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
        <Typography variant="h6">
          Page for studying and learning the <b>Static Site Generation</b>{" "}
          feature of Next.js \o/
        </Typography>
      </Flex>

      <Flex
        mt={"80px"}
        mb={"40px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h6">
          Made by {author} 💜
        </Typography>
      </Flex>

      <Flex
        mt={"10px"}
        mb={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button>
          <Link href="/">Go to home</Link>
        </Button>
      </Flex>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      author: '@biantris'
    },
  };
}
