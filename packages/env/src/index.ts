import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
import 'dotenv/config'
export const env = createEnv({
  server: {
    x: z.string().default('client'),
  },
  client: {},
  runtimeEnv: {
    x: process.env.x,
  },
})
