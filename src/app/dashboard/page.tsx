import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-[calc(100vh-8rem)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Dashboard
        </h1>
        <p className="mt-2 text-muted">
          Connect your real estate account to see your plots and apply for
          loans.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">
              My plots
            </h2>
            <p className="mt-2 text-sm text-muted">
              Land from onboarded platforms will appear here once connected.
            </p>
            <div className="mt-4 rounded-lg bg-primary-muted px-4 py-3 text-center text-sm font-medium text-primary">
              Connect real estate account
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">
              Active loans
            </h2>
            <p className="mt-2 text-sm text-muted">
              Loans secured with your land will be listed here.
            </p>
            <p className="mt-4 text-sm text-muted">No active loans</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">
              Apply for loan
            </h2>
            <p className="mt-2 text-sm text-muted">
              Use a verified plot as collateral to request a loan.
            </p>
            <div className="mt-4 rounded-lg border-2 border-primary py-3 text-center text-sm font-medium text-primary">
              Apply (connect account first)
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-primary-muted/50 p-8 text-center">
          <p className="text-muted">
            This is a placeholder dashboard. In production, you would sign in,
            connect your real estate platform, and manage plots and loans here.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
