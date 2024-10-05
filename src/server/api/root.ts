import { createCallerFactory, createTRPCRouter } from "@/server/trpc/init";
import { testRouter } from "@/server/api/routes/test";

export const appRouter = createTRPCRouter({
  TEST: testRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
