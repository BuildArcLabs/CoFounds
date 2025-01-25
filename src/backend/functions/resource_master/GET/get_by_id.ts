import prisma from "../../../prisma/client";

export const getResourceById = async (id: string) => {
  return prisma.resource_master.findUnique({
    where: { id },
  });
};
