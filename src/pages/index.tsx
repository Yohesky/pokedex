import { Card, Grid, Row, Text } from "@nextui-org/react";
import { pokeApi } from "api";
import { Layout } from "components/layouts";
import { PokemonCard } from "components/pokemon";
import { GetStaticProps } from "next";
import { PokemonListResponse, Result } from "../../interfaces";

export default function HomePage({ pokemons }: { pokemons: Result[] }) {
  return (
    <Layout title="Pokemon list">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
}

const imgUrl = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
    id + 1
  }.svg`;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: Result[] = [...data.results].map((item, idx) => ({
    ...item,
    id: idx + 1,
    img: imgUrl(idx + 1),
  }));
  return {
    props: {
      pokemons,
    },
  };
};
