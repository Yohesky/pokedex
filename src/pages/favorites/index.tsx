import { Layout } from "components/layouts";
import { FavoritePokemons, NoFavorites } from "components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "utils";

export default function FavoritesPage() {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
}
