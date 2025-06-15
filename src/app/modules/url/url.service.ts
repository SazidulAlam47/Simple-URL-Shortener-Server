import config from '../../config';
import generateShortId from '../../utils/generateShortId';
import { ShortUrl } from './url.model';

const createShortUrl = async (originalUrl: string, baseUrl: string) => {
    let shortId: string;
    let isExists: boolean;

    do {
        shortId = generateShortId();
        isExists = Boolean(await ShortUrl.findOne({ shortId }));
    } while (isExists);

    const shortUrl = `${baseUrl}/${shortId}`;

    await ShortUrl.create({ shortId, originalUrl });

    return { shortUrl };
};

const redirectToOriginalUrl = async (shortId: string) => {
    const result = await ShortUrl.findOne({ shortId });

    if (!result) {
        return config.client_url as string;
    }

    return result?.originalUrl;
};

export const UrlServices = {
    createShortUrl,
    redirectToOriginalUrl,
};
