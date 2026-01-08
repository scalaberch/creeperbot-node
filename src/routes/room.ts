import { createRoute } from "@server/modules/http/router"

const router = createRoute();

router.get('/', () => {});
router.get('/:id', () => {});
router.get('/:id/status', () => {});
router.post('/:id/control/request', () => {});
router.get('/:id/control', () => {});
router.post('/:id/control', () => {});
router.post('/:id/tip', () => {});
router.post('/:id/session/end', () => {});
router.post('/:id/session/terminate', () => {});
router.get('/:id/chat', () => {});
router.post('/:id/chat', () => {});

export default router;