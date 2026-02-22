import { projectRepository } from "@/repositories/projectRepository";

export const projectUseCases = {
  listAll: () => projectRepository.listAll(),
  listFeatured: () => projectRepository.listFeatured()
};
