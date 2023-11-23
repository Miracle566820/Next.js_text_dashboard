import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';
// import { HistoryTab } from '@/app/ui/mycomp/history';
import { History, Topic } from '@/app/ui/mycomp/history';

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <div className="mb-8 flex">
        <div className="flex-1">
          <h1 className={`${lusitana.className} text-xl md:text-2xl`}>
            Welcome!
          </h1>
        </div>
        <div className="flex-initial items-center justify-between gap-2">
          <Search placeholder="Search invoices..." />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              title="Collected"
              value={totalPaidInvoices}
              type="collected"
            />
            <Card title="Pending" value={totalPendingInvoices} type="pending" />
            <Card
              title="Total Invoices"
              value={numberOfInvoices}
              type="invoices"
            />
            <Card
              title="Total Customers"
              value={numberOfCustomers}
              type="customers"
            />
          </div>

          <RevenueChart revenue={revenue} />
        </div>

        <div className="... sm:w-48 md:w-48 lg:w-60 xl:w-72">
          <History />
          <Topic />
        </div>
      </div>
    </main>
  );
}
