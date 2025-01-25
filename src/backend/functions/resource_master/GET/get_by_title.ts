import prisma from '../../../prisma/client';

export const getResourceByTitle = async (title: string) => {
    return prisma.resource_master.findUnique({
        where: {title},
        select: {
            title: true,
            link: true,
            is_active: true,
            created_at: true,
            updated_at: true,
        }
    });
};