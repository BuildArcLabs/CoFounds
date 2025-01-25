import prisma from '../../../prisma/client';

export const getAllResources = async () => {
    return prisma.resource_master.findMany({
      select: {
        title: true,
        link: true,
        is_active: true,
        created_at: true,
        updated_at: true,
      },
    });
  };
  