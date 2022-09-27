import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { Flex } from "rebass";
import styled from "styled-components";

type HomeProps = {
  list: Object[];
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 15px;
`;

export default function Home({ list }: HomeProps) {
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
        <Flex mr={"10px"}>
          <Chip label="Intro" variant="outlined" />
        </Flex>
        <Typography variant="h4">Featured Movies</Typography>
      </Flex>

      <Flex
        mt={"10px"}
        mb={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button>
          <Link href="/search">Go to search</Link>
        </Button>
      </Flex>

      <Grid marginTop={"10px"}>
        {list.map((item) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href={`/movie/${item.id}`}>
              <CardMedia
                component="img"
                height="300"
                image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt="movie images"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.overview}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>

      <Flex
        mt={"10px"}
        mb={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button>
          <Link href="/about">About me</Link>
        </Button>
      </Flex>
      
    </Container>
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
