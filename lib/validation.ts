"use client";

import * as z from "zod";

export const folderSchema = z.object({
  name: z.string().min(2).max(50),
});
