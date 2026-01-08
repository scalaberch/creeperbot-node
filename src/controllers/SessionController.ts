import { getCurrentTimestamp } from '@server/lib/datetime';
import { HttpRequest, HttpResponse } from '@server/modules/http/defines';
import { issueTokens, reloadAccessToken } from '@src/services/SessionService';
import { getAuthBearerToken } from '@server/auth';
import { verifyAccessToken, verifyRefreshToken } from '@server/auth/jwt';

const tryVerify = (token: string, verifier: (t: string) => any) => {
  if (!token) return null;
  try {
    return verifier(token);
  } catch {
    return null;
  }
};

export const createJwtSession = (req: HttpRequest, res: HttpResponse) => {
  const userAgent = req.header('user-agent');
  const refreshTokenInput = req.getBody('refresh', '') as string;
  const accessTokenInput = getAuthBearerToken(req);

  // Attempt to parse existing tokens
  const refreshData = tryVerify(refreshTokenInput, verifyRefreshToken);
  const accessData = tryVerify(accessTokenInput, verifyAccessToken);

  /**
   * Scenario 1: Refresh Token is present
   * Action: Generate a new Access Token (Rotation)
   */
  if (refreshData) {
    return res.outputSuccess(
      {
        accessToken: reloadAccessToken(refreshData), 
        refreshToken: refreshTokenInput,
      },
      'Session has been refreshed.',
    );
  }

  /**
   * SCENARIO 2: A token was provided but it's INVALID (Expired/Malformed).
   * We should probably tell the user their session is dead rather than
   * silently making them a guest, or handle the 'Reset' logic here.
   */
  const isBrokenSession = (refreshTokenInput && !refreshData) || (accessTokenInput && !accessData);
  if (isBrokenSession) {
    // Option A: Force a fresh start
    const { accessToken, refreshToken } = issueTokens(userAgent);
    return res.outputSuccess(
      { accessToken, refreshToken },
      'Previous session expired. New session created.',
    );
  }

  /**
   * SCENARIO 3: No tokens at all (Brand New Guest).
   */
  if (!accessData) {
    const { accessToken, refreshToken } = issueTokens(userAgent);
    return res.outputSuccess({ accessToken, refreshToken }, 'Session has been created.');
  }

  /**
   * SCENARIO 4: Valid Access Token exists.
   * Everything is fine, just echo back the current state.
   */
  return res.outputSuccess(
    {
      accessToken: accessTokenInput,
      refreshToken: refreshTokenInput,
    },
    'Session is up.',
  );
};

export default {
  createJwtSession,
};
