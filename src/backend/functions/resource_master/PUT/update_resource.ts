import prisma from "../../../prisma/client";

export const updateResource = async (id: string, data: Partial<{ 
    title: string; 
    link: string; 
    image: string; 
    is_active: boolean; 
  }>) => {
    return prisma.resource_master.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
  };