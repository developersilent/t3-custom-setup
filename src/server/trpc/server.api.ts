import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { headers } from "next/headers";
import { cache } from "react";

import { createQueryClient } from "./query-client";
import { createTRPCContext } from "@/server/trpc/context";
import { type AppRouter, createCaller } from "@/server/api/root";

const createContext = cache(() => {
  const heads = new Headers(headers());
  return createTRPCContext({
    header: heads,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: serverApi, HydrateClient } =
  createHydrationHelpers<AppRouter>(caller, getQueryClient);
