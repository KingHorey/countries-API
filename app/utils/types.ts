import { z } from "zod";

export const searchParam = z.object({
  name: z.string(),
});

export type SearchParams = z.infer<typeof searchParam>;
