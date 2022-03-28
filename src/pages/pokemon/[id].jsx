/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
export default function pokemon({ pokeman }) {
  return (
    <Layout title={pokeman.name}>
      <h1 className="mb-2 text-4xl text-center capitalize">
        {pokeman.id}. {pokeman.name}
      </h1>
      <img className="mx-auto" src={pokeman.image} alt={pokeman.name} />
      <p>
        <span className="mr-2 font-bold">Weight:</span> {pokeman.weight}
      </p>
      <p>
        <span className="mr-2 font-bold">Height:</span>
        {pokeman.height}
      </p>
      <h2 className="mt-6 mb-2 text-2xl">Types</h2>
      {pokeman.types.map((type, index) => (
        <p key={index}>{type.type.name}</p>
      ))}
      <p className="mt-10 text-center">
        <NextLink href="/">
          <a className="text-2xl underline">Home</a>
        </NextLink>
      </p>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await res.json();
    const paddedId = ('00' + id).slice(-3);
    pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { pokeman },
    };
  } catch (err) {
    console.error(err);
  }
}
