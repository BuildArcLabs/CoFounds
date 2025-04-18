import { CreateSkill } from "@/backend/interfaces/POST/create_skill";
import prisma from "../../../../../prisma/client";

export const createBulkSkills = async (
  skills: Array<CreateSkill>
) => {
  return await prisma.skillMaster.createMany({
    data: skills.map((skill) => ({
      name: skill.name,
      isActive: skill.is_active ?? true,
      createdBy: skill.created_by || null,
      updatedBy: skill.created_by || null,
      updatedAt: new Date(),
    })),
    skipDuplicates: true,
  });
};
