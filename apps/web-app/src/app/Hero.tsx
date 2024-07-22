import Image from "next/image";
import { urlFor } from "@sanity/client";
import "./globals.css";

async function getData(client: Client) {
    const query = "*[_type == 'heroImage'][0]"
    const data = await client.fetch(query)
    return data;
}

export default async function Hero({ client, urlFor }) {
    const data = await getData(client);

    return (
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg-max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 text-4xl frontibold text-gray-700 sm:text-5xl md:mb-8 md:text-6xl">
                        Welcome to Karasu Publishing!
                    </h1>
                    <p className="max-w-md leading-relaxed text-gray-700 xl:text-lg">
                        The Place you can get the whole colltection of Para Wars and Penalty Company!
                    </p>
                    <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-300 shadow-lg md:left-16 md:top-16 lg:ml-0">
                            <Image
                                src={urlFor(data.image1).url()}
                                alt="ParaWars1"
                                className="h-full w-full object-cover object-center"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}