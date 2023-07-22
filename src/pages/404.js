import Link from "next/link";

const Arrow = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.24265 15.5563L15.5564 4.24264M15.5564 4.24264V12.7279M15.5564 4.24264H7.07108"
      stroke="#4F4F4F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function Custom404() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div>
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
