import { postRepository } from "@/repositories/postRepository";

export const postUseCases = {
  listPublished: () => postRepository.listPublished(),
  listAll: () => postRepository.listAll(),
  detailBySlug: (slug: string) => postRepository.getBySlug(slug)
};
