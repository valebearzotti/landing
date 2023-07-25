import { Arrow } from "@/ui/arrow";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="p-4">
        <h1>There&apos;s nothing over here...</h1>
        <div className="flex w-fit justify-center border-b-2 border-white transition-all duration-300 ease-in-out hover:border-gray-500">
          <Link
            className="flex cursor-pointer items-center gap-2 text-xl"
            href="/"
          >
            Go back to homepage
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}
