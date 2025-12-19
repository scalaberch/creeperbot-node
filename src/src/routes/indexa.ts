import { createRoute } from '@server/modules/http/router';
import { generateRouteRedirectToUrl } from '@server/modules/http/utils/handlers';

const router = createRoute();

router.get('/', generateRouteRedirectToUrl('https://www.eyeball.games/'));

export default router;
