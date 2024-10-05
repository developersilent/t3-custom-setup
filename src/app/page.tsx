// "use client";  // if using server , comment this line

// import { clientApi } from "@/server/trpc/client.api";  // only for client

import { serverApi } from "@/server/trpc/server.api"; // only for server

// 1. Client rendered
//
// export default function clientRendered() {
//   const result = clientApi.TEST.hello.useQuery()
//   return (
//     <>
//       <main className="flex min-h-screen flex-col items-center justify-center text-white bg-stone-900">
//         {result.isLoading && <div>Loading...</div>}
//         client rendered... {result.data?.message}
//       </main>
//     </>
//   );
// }


// 2. Server rendered
export default async function serverRendered() {
  const result = await serverApi.TEST.hello();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-stone-900 text-white">
        server rendered... {result.message}
      </main>
    </>
  );
}
