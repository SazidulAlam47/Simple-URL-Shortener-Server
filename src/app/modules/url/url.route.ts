import express from 'express';
import { UrlControllers } from './url.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UrlValidations } from './url.validation';

const router = express.Router();

router.get('/', UrlControllers.redirectBaseUrlToClient);

router.get('/:id', UrlControllers.redirectToOriginalUrl);

router.post(
    '/',
    validateRequest(UrlValidations.createShortUrl),
    UrlControllers.createShortUrl,
);

export const UrlRoutes = router;
