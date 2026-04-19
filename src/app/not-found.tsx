import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold text-ink-900">Page not found</h1>
      <p className="max-w-md text-sm text-slate-600">
        The page you are looking for does not exist or is still being prepared.
      </p>
      <Link
        href="/"
        className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white"
      >
        Go to home
      </Link>
    </div>
  );
}
