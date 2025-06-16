import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UrlServices } from './url.service';
import getBaseUrl from '../../utils/getBaseUrl';

const createShortUrl = catchAsync(async (req, res) => {
    const baseUrl = getBaseUrl(req);
    const result = await UrlServices.createShortUrl(req.body.url, baseUrl);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Short URL created successfully',
        data: result,
    });
});

const redirectToOriginalUrl = catchAsync(async (req, res) => {
    const result = await UrlServices.redirectToOriginalUrl(req.params.id);
    res.redirect(result);
});

const redirectBaseUrlToClient = catchAsync(async (req, res) => {
    const result = await UrlServices.redirectBaseUrlToClient();
    res.redirect(result);
});

export const UrlControllers = {
    createShortUrl,
    redirectToOriginalUrl,
    redirectBaseUrlToClient,
};
