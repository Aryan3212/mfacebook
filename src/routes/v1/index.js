import { Router } from "express";
import { getUserFriendsPosts, createPost, createFriendRequest, acceptFriendRequest } from "../../controllers/index.js";
import { asyncHandler } from "../../utils/index.js";

const router = Router();

router.get('/posts', asyncHandler(getUserFriendsPosts));
router.post('/posts', asyncHandler(createPost));
router.post('/friend-request/:userId', asyncHandler(createFriendRequest));
router.post('/friend-request/accept/:requestId', asyncHandler(acceptFriendRequest));
router.post('/friend-request/reject/:requestId', asyncHandler(rejectFriendRequest));
export default router;