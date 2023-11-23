import { lusitana } from '@/app/ui/fonts';
import { Account_card } from '@/app/ui/mycomp/account_card';
import Search from '@/app/ui/search';
import {
    fetchCardData,
  } from '@/app/lib/data';
export default async function Page() {
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
            Profile
          </h1>
        </div>
        <div className="flex-initial items-center justify-between gap-2">
          <Search placeholder="Search invoices..." />
        </div>
      </div>
      <div>
        <Account_card />
      </div>
    </main>
  );
}