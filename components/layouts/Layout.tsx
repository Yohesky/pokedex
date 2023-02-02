import Head from "next/head";
import React from "react";
import { Navbar } from "../ui";

const origin: string =
  typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon app"} </title>
        <meta name="author" content="Yohesky Jose" />
        <meta
          name="description"
          content={`Information about pokemon ${title}`}
        />
        <meta
          name="keywords"
          content={`${title}, pokedex, pokemon, next, react`}
        />

        <meta property="og:title" content={`Page about ${title}`} />
        <meta
          property="og:description"
          content={`This page is about ${title}`}
        />
        <meta
          property="og:image"
          content="https://import.cdn.thinkific.com/643563/courses/1875496/banner-220526-122428.png"
        />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
