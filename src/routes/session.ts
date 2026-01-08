import { createRoute } from "@server/modules/http/router"
import SessionController from "@src/controllers/SessionController";
const router = createRoute();

router.post("/", SessionController.createJwtSession)

export default router;