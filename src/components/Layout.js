
import Head from 'next/head';

export default function Layout({title,children}) {
    return (
        <div className="bg-gray-300">
            <Head>
                <title>{ title }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container pt-8 mx-auto max-w-xl min-h-screen">
                {children}
            </main>
        </div>
    );
}
