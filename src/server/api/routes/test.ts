import { createTRPCRouter, publicProcedure } from "@/server/trpc/init";

export const testRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      message: "Hello from trpc server",
    };
  }),
});
