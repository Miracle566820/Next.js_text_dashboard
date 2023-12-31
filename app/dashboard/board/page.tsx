import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { BellAlertIcon,ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
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
      <div className="mb-8 flex gap-3">
        <div className="flex-1">
          <h1 className={`${lusitana.className} text-xl md:text-2xl`}>
            Welcome, User name!
          </h1>
        </div>
        <div className="flex-initial">
          <button className="rounded-full border p-2 bg-violet-800">
            <ChatBubbleLeftRightIcon className="w-6 text-slate-300" />
          </button>
        </div>
        <div className="flex-initial">
          <button className="rounded-full border p-2 bg-violet-800">
            <BellAlertIcon className="w-6 text-slate-300" />
          </button>
        </div>
        <div className="flex-initial items-center justify-between gap-2">
          <Search placeholder="Search invoices..." />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-6 pt-10 pb-10 pl-3 pr-3">
            <h1 className={`text-lg md:text-xl text-center text-violet-800`}>
                You have conducted 100 researchers in the last 7 days
            </h1>
            <h1 className={`text-lg md:text-xl text-center text-violet-800`}>
                and 300 researchers in the last 30 days.
            </h1>
          </div>

          <RevenueChart revenue={revenue} />
        </div>

        <div className="... sm:w-56 md:w-56 lg:w-72 xl:w-84">
          <History />
          <Topic />
        </div>
      </div>
    </main>
  );
}
