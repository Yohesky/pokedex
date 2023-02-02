import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No favorites</Text>
      <Image
        width={250}
        height={250}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
        css={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};
