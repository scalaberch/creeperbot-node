import { verifyAccessToken, verifyRefreshToken } from '@server/auth/jwt';
import { HttpNext, HttpRequest, HttpResponse } from '@server/modules/http/defines';
import { getAuthBearerToken } from '@server/auth';
import { Log } from '@server/logs';

export default async (request: HttpRequest, response: HttpResponse, next: HttpNext) => {
};
