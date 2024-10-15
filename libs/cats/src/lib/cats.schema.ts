import { z } from 'zod';

const breed = z.enum(['Siamese', 'Maine Coon', 'Persian', 'Bengal', 'Sphynx']);
export const catsSchema = z.object({
  name: z.string(),
  breed: breed,
});

export type Cat = z.infer<typeof catsSchema>;
