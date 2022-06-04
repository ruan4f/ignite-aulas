import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
    const client = Prismic.client(
        process.env.PRISMIC_ENDPOINT,
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return client;
}