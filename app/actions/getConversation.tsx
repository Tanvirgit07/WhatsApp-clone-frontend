import { db } from "@/lib/db";
import { getCurrentUser } from "./getCurrentUser";

const getConversations = async () => {
  const { currentUserPrisma } = await getCurrentUser();

  if (!currentUserPrisma?.id) {
    return [];
  }

  try {
    const conversations = await db.conversation.findMany({
      orderBy: {
        listMessageAt: "desc", 
      },
      where: {
        userIds: {
          has: currentUserPrisma.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    });

    return conversations; 
  } catch (error) {
    console.error("Failed to get conversations:", error);
    return [];
  }
};

export default getConversations;   
