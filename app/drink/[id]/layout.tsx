import { Suspense } from "react";
import Loading from "./loading";

export default function DrinkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full mt-3 md:mt-9 lg:mt-12">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
