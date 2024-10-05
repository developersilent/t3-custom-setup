import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import { type createTRPCContext } from "@/server/trpc/context";

const trpc = initTRPC.context<typeof createTRPCContext>().create({
  transformer: SuperJSON,
});

export const createTRPCRouter = trpc.router;
export const publicProcedure = trpc.procedure;

export const privateProcedure = trpc.procedure;

export const createCallerFactory = trpc.createCallerFactory;
