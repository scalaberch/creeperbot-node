import { createRoute } from "@server/modules/http/router"
import StripeController from "@src/controllers/StripeController";

const router = createRoute();

router.post("/stripe/callback", StripeController.handleCallback)

export default router;