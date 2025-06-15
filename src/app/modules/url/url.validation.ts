import { z } from 'zod';

const createShortUrl = z.object({
    url: z.string().url(),
});

export const UrlValidations = {
    createShortUrl,
};
