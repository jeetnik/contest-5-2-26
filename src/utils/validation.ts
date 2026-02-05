import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(6),
  role: z.enum(["USER", "SERVICE_PROVIDER"]),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const createServiceSchema = z.object({
  name: z.string().min(1, "Service name is required"),
  type: z.enum(["MEDICAL", "HOUSE_HELP", "BEAUTY", "FITNESS", "EDUCATION", "OTHER"]),
  durationMinutes: z
    .number()
    .min(30, " least 30 minutes")
    .max(120, "most 120 minutes")
    .refine((val) => val % 30 === 0, {
      message: "Duration must be a multiple of 30",
    }),
});
const isValid=(t:string)=>{
const [h:m]=t.split(":").arr

}
export const setService=z.object({
  dayOfWeek: z.number().min(0).max(6),
  startTime:z.string.isValid()
  endTime:
})