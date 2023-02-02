import { Layout } from "components/layouts";
import { GetStaticProps, GetStaticPaths } from "next";
import { pokeApi } from "api";
import { Pokemon } from "interfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { localFavorites } from "utils";
import { useState } from "react";
import confetti from "canvas-confetti";
import { getPokemon } from "../../../utils/getPokemon";

export default function PokemonPage({ pokemon }: { pokemon: Pokemon }) {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorite = (): void => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 10,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container
        css={{
          marginTop: "5px",
        }}
        gap={2}
      >
        <Grid xs={12} sm={4}>
          <Card
            hoverable
            css={{
              padding: "30px",
            }}
          >
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "no-image.png"
                }
                alt={pokemon.name}
                width="100"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text h1 transform="capitalize">
                {" "}
                {pokemon.name}{" "}
              </Text>
              <Button
                onClick={onToggleFavorite}
                color="gradient"
                ghost={!isInFavorites}
              >
                {!isInFavorites ? "Save as favorite" : "Remove from favorites"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

// this is executed first - 1
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const allPokemons = [...Array(151)].map((value, idx) => `${idx + 1}`);
  return {
    paths: allPokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

// this is executed after getStaticPaths - 2
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemon(id),
    },
  };
};
