import { Card, Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

export const FavoritePokemons = ({ pokemons }: { pokemons: number[] }) => {
  return (
    <Grid.Container gap={2} justify="flex-start" direction="row">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
