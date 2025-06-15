import { model, Schema } from 'mongoose';
import { TShortUrl } from './url.interface';

const shortUrl = new Schema<TShortUrl>(
    {
        shortId: {
            type: String,
            required: true,
            unique: true,
        },
        originalUrl: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const ShortUrl = model<TShortUrl>('ShortUrl', shortUrl);
