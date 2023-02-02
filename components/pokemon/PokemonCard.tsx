import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

import { Result } from "../../interfaces/pokemon-list";

export const PokemonCard = (pokemon: Result) => {
  const router = useRouter();

  const goToPokePage = (): void => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card onClick={goToPokePage} hoverable clickable>
        <Card.Body
          css={{
            p: 1,
          }}
        >
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text># {pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
