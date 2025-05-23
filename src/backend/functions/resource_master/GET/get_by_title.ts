import prisma from "../../../../../prisma/client";

export const getResourceByTitle = async (title: string) => {
    return prisma.resourceMaster.findUnique({
        where: {title},
        select: {
            id: true,
            title: true,
            link: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
        }
    });
};