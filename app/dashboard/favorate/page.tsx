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
import { record } from 'zod';

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
      <div className="mt-10 pl-10 mb-5 ml-10">
        <h1 className="text-slate-500 text-lg md:text-xl">
          Download
        </h1>
      </div>
      <div className="flex bg-violet-900">
      <div className="flex-initial ml-10 mt-12">
        <div className="bg-slate-200 p-6 m-5">
        </div>
        <div className="bg-slate-200 p-6 m-5">
        </div>
        <div className="bg-slate-200 p-6 m-5">
        </div>
        <div className="bg-slate-200 p-6 m-5">
        </div>
      </div>
        <div className="flex-1">
          <h1 className="text-slate-200 px-20 py-60 text-xl md:text-2xl text-left">
              list saved artical liset and with select item to download function
          </h1>
        </div>
      </div>
    </main>
  );
}
