export async function createTRPCContext(opts: { header: Headers }) {
  return {
    ...opts,
  };
}
