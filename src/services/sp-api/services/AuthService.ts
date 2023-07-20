/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginUserDto } from '../models/LoginUserDto';
import type { RegisterUserDto } from '../models/RegisterUserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Register a user
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAuthRegister({
        requestBody,
    }: {
        /**
         * Register model
         */
        requestBody?: RegisterUserDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Authenticate a user
     * Returns auth token
     * @returns string Success
     * @throws ApiError
     */
    public static postApiAuthLogin({
        requestBody,
    }: {
        /**
         * Login model
         */
        requestBody?: LoginUserDto,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
