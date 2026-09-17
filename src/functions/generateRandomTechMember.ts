import { type TechMember, inMemoryDatabase } from "@/api/database";

export const generateRandomTechMember = (): TechMember => {
  const randomIndex = Math.floor(Math.random() * inMemoryDatabase.length);

  return inMemoryDatabase[randomIndex]!;
};
