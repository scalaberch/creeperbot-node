import { generateAccessToken, generateRefreshToken, getIssuer } from '@server/auth/jwt';
import { generateUUID } from '@server/lib/strings';
import { Log } from '@server/logs';
import { Roles } from './roles';
import _ from 'lodash'

const issuer = getIssuer();
const tgtAudience = '';

export const generateTokenPayload = (role: Roles.spectator, userAgent = '') => {
  return {
    role,
    userAgent,
  };
};

/**
 * issue initial access and refresh tokens to the client
 *
 * @param userAgent
 * @returns
 */
export const issueTokens = (userAgent = '') => {
  const id = generateUUID();
  const payload = generateTokenPayload(Roles.spectator, userAgent);

  // Issue access token.
  const { token: accessToken, jti: accessJti } = generateAccessToken(
    id,
    payload,
    issuer,
    tgtAudience,
  );

  // issue refresh token
  const { token: refreshToken, jti: refreshJti } = generateRefreshToken(
    id,
    { userAgent },
    issuer,
    tgtAudience,
  );

  return { accessToken, refreshToken };
};


export const reloadAccessToken = (refreshTokenData: any) => {
  const { jti, sub, iss, player, aud } = refreshTokenData;
  const role = _.get(refreshTokenData, 'role', Roles.spectator) as Roles;
  const userAgent = _.get(refreshTokenData, 'userAgent', '') as string;

  // Issue access token.
  const { token: accessToken, jti: accessJti } = generateAccessToken(sub, { role, userAgent }, issuer, tgtAudience);

  return accessToken;
};
