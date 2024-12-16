/* eslint-disable no-console */
import Table from "cli-table3";
import { config } from "dotenv";
import { expand } from "dotenv-expand";

import { z } from "zod";

const stringBoolean = z.coerce
  .string()
  .transform((val) => {
    return val === "true";
  })
  .default("false");

const EnvSchema = z.object({
  DB_MIGRATING: stringBoolean,
  GITHUB_CLIENT_ID: z.string().min(1),
  GITHUB_CLIENT_SECRET: z.string().min(1),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

expand(config());

const { data: env, error } = EnvSchema.safeParse(process.env);

if (error) {
  const table = new Table({ head: ["Variable", "Errors"] });

  const flatErrors = error.flatten().fieldErrors;

  for (const [key, value] of Object.entries(flatErrors)) {
    if (value) {
      table.push([key, value.map((v) => `\u00B7 ${v}`).join("\n")]);
    }
  }
  console.error("❌ Invalid env:");
  console.log(table.toString());
  process.exit(1);
}

export default env!;
