import z from 'zod';

export const RegisterBody = z
  .object({
    username: z
      .string()
      .trim()
      .min(2, { message: 'Tên người dùng phải có ít nhất 2 ký tự' })
      .max(15, { message: 'Tên người dùng không được vượt quá 15 ký tự' }),
    email: z
      .string()
      .email()
  })
  .strict()
 

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>;

export const RegisterRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    }),
  }),
  message: z.string(),
});

export type RegisterResType = z.TypeOf<typeof RegisterRes>;


export const LoginRes = RegisterRes;

export type LoginResType = z.TypeOf<typeof LoginRes>;
export const SlideSessionBody = z.object({}).strict();

export type SlideSessionBodyType = z.TypeOf<typeof SlideSessionBody>;
export const SlideSessionRes = RegisterRes;

export type SlideSessionResType = z.TypeOf<typeof SlideSessionRes>;
