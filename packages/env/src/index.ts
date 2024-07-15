import { createEnv } from '@t3-oss/env-nextjs'
import { vercel } from '@t3-oss/env-nextjs/presets'
import 'dotenv/config'
import { z } from 'zod'

export const env = createEnv({
    extends: [vercel()],
    shared: {
        NODE_ENV: z.enum(['development', 'production']).optional(),
    },
    server: {
        x: z.string().default('client'),
    },
    client: {},
    runtimeEnv: {
        x: process.env.x,
        NODE_ENV: process.env.NODE_ENV,
    },
})
