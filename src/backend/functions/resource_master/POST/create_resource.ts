import prisma from "../../../prisma/client";

export const createResource = async (data: {
  title: string;
  link: string;
  image: string;
  is_active?: boolean;
  created_by: string;
}) => {
  return await prisma.resource_master.create({
    data: {
      title: data.title,
      link: data.link,
      image: data.image,
      is_active: data.is_active ?? true,
      created_by: data.created_by || null,
      updated_by: data.created_by || null,
      updated_at: new Date()
    },
  });
};
