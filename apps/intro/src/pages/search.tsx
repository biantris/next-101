import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import { useState } from "react";
import { Flex } from "rebass";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 15px;
`;

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSearch = async () => {
    if (searchText !== "") {
      const result = await fetch(
        `http://localhost:3000/api/search?q=${searchText}`
      );
      const json = await result.json();

      setMovieList(json.list);
    }
  };

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
        <Typography variant="h4">Search</Typography>
      </Flex>

      <Flex
        mt={"80px"}
        mb={"40px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Flex>

      <Flex
        mt={"10px"}
        mb={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <button onClick={handleSearch}>Search</button>
      </Flex>

      <hr />

      <Grid marginTop={"10px"}>
        {movieList.map((item) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href={`/movie${item.id}`}>
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
    </Container>
  );
}
