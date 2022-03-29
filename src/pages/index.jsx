/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import Layout from '../components/Layout';
export default function Home({ pokemon }) {
  return (
    <Layout title="NextJS Pokedex">
      <h1 className="mb-8 text-4xl text-center ">
        The Nextjs Pokedex
      </h1>
      <ul>
        {pokemon.map((pokeman, index) => (
          <li key={index}>
            <NextLink href={`/pokemon/${index + 1}`}>
              <a className="flex items-center p-4 my-2 text-lg capitalize bg-gray-200 rounded-md border hover:shadow-md">
                <img
                  src={pokeman.image}
                  alt={pokeman.name}
                  className="mr-3 w-20 h-20"
                />
                <span className="mr-2 font-bold">{index + 1}.</span>
                {pokeman.name}
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const { results } = await res.json();
    const pokemon = results.map((pokeman, index) => {
      const paddedId = ('00' + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...pokeman, image };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}