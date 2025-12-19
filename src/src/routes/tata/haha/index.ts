import { createRoute } from '@server/modules/http/router';
import { generateRouteRedirectToUrl } from '@server/modules/http/utils/handlers';

const router = createRoute();

router.get('/', generateRouteRedirectToUrl('https://www.google.com/'));

export default router;
