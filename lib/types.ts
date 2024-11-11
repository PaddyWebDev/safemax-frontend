import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters.",
    })
    .max(40, "Name shouldn't be greater than 40 characters"),
  email: z
    .string()
    .email()
    .min(5, "Email Must Be Atleast 5 characters")
    .max(40, "Email shouldn't be greater than 40 characters"),
  time: z.string().regex(new RegExp("^(1[5-9]|1[0-2]):([0-5][0-9])$")),
  date: z.string().date(),
  comments: z.string().max(200, {
    message: "Comments must not be longer than 30 characters.",
  }),
});
