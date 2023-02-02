import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkUi } from "@nextui-org/react";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        width={70}
        height={70}
        alt="pokemon"
      />
      <LinkUi href="/">
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okemon
        </Text>
      </LinkUi>

      <Spacer
        css={{
          flex: 1,
        }}
      />
      <LinkUi href="/favorites">
        <Text>Favoritos</Text>
      </LinkUi>
    </div>
  );
};
