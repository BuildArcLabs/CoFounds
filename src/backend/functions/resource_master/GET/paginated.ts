import prisma from "../../../prisma/client";

export const getPaginatedResources = async (page: number) => {
    const limit = 9;
    const skip = (page - 1) * limit;

    console.log("Page:", page);
    console.log("Skip:", skip);
    console.log("Take:", limit);
  
    const resources = await prisma.resource_master.findMany({
      skip: skip,
      take: limit,
      orderBy: {
        id: "asc",
      },
      select: {
        title: true,
        link: true,
        is_active: true,
        created_at: true,
        updated_at: true,
      },
    });
  
    const totalResources = await prisma.resource_master.count();
    return {
      resources,
      totalResources,
      totalPages: Math.ceil(totalResources / limit),
      currentPage: page,
    };
  };
  