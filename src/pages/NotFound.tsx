import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section flex flex-col items-center py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
