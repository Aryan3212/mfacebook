import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient()


const BASE_USER = 1
export async function createPost(req, res) {
    if (!req.body.body || req.body.body.length > 63206) {
        return res.send("Validation Error")
    }
    const createdPost = await prisma.post.create({
        data: {
            userId: BASE_USER,
            body
        }
    })
    return res.send(createdPost);
}

export async function getUserFriendsPosts(req, res) {
    const userId = Number(req.params.userId);
    return res.send(Posts);
}

export async function createFriendRequest(req, res) {
    const userId = Number(req.params.userId);
    const friendRequest = await prisma.friendRequests.create({
        data: {
          userId1: BASE_USER,
          userId2: userId
        },
      })
    return res.send("ok");
}

export async function acceptFriendRequest(req, res) {
    const requestId = Number(req.params.requestId);
    const friendRequest = await prisma.friendRequests.findFirst({
        where: {
            id: requestId,
        }
    })
    if (friendRequest) {
        const friends = await prisma.friends.create({
            data: {
                user1: friendRequest.userId1,
                user2: friendRequest.userId2
            }
        })
    }
    return res.send("ok");
}

export async function rejectFriendRequest(req, res) {
    const requestId = Number(req.params.requestId);
    const friendRequest = await prisma.friendRequests.delete({
        where: {
            id: requestId,
        }
    })
    return res.send("ok");
}