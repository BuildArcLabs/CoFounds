import prisma from "../../../../../prisma/client";

export const getDegreeByType = async (type: string) => {
    return prisma.degreeMaster.findMany({
        where: { type, isActive: true },
        select: {
            id: true,
            name: true,
            type: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
        },
        orderBy: {
            updatedAt: "desc",
          },
    });
};