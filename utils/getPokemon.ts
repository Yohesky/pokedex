import { pokeApi } from "api";
import { PokemonDTO } from "interfaces";

export const getPokemon = async (query: string): Promise<PokemonDTO> => {
  const { data } = await pokeApi.get<PokemonDTO>(`/pokemon/${query}`);
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
