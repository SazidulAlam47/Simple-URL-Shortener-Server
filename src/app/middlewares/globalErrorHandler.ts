/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import status from 'http-status';
import { ZodError } from 'zod';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode: number = err?.statusCode || status.INTERNAL_SERVER_ERROR;
    let message: string = err?.message || 'Something went wrong';
    let error = err;

    if (err instanceof ZodError) {
        statusCode = status.UNPROCESSABLE_ENTITY;
        message = 'Validation Error';
    }

    res.status(statusCode).json({
        success: false,
        message,
        error,
        stack: config.NODE_ENV === 'development' ? err?.stack : undefined,
    });
};

export default globalErrorHandler;
