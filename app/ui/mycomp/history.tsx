import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import {
  ComputerDesktopIcon,
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export function HistoryTab({
  title,
  time,
  status,
}: {
  title: string;
  time: string;
  status: 'Submitted' | 'Unsubmitted';
}) {
  return (
    <div className="mb-2 flex w-full gap-3 rounded-md bg-white p-3">
      <p className="flex-none">
        <ClockIcon className="w-8 p-1" />
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <div className="mb-2 flex items-center border-b">
            {/* icon here */}
            <p>{title}</p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="text-xs text-gray-500">{time}</div>
            <div className="text-xs">{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopicTab({
  title,
  time,
  status,
}: {
  title: string;
  time: string;
  status: 'Online' | 'Offline';
}) {
  return (
    <div className="mb-2 flex w-full gap-3 rounded-md bg-white p-3">
      <p className="flex-none">
        <ComputerDesktopIcon className="w-8 p-1" />
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <div className="mb-2 flex items-center border-b">
            {/* icon here */}
            <p>{title}</p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="text-xs text-gray-500">{time}</div>
            <div className="text-xs">{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function History() {
  return (
    <div className="mb-3 rounded-xl bg-gray-50 p-2 shadow-sm">
      <h1 className="p-3 text-lg md:text-xl">History</h1>
      <HistoryTab title="History1" time="7 hours ago" status="Submitted" />
      <HistoryTab title="History2" time="17 hours ago" status="Unsubmitted" />
      <HistoryTab title="History3" time="27 hours ago" status="Unsubmitted" />
    </div>
  );
}

export function Topic() {
  return (
    <div className="mb-3 rounded-xl bg-gray-50 p-2 shadow-sm">
      <h1 className="p-3 text-lg md:text-xl">Topics</h1>
      <TopicTab title="Topic1" time="7 min left" status="Online" />
      <TopicTab title="Topic2" time="17 min left" status="Offline" />
      <TopicTab title="Topic3" time="2 hours left" status="Online" />
      <TopicTab title="Topic4" time="59 min left" status="Online" />
    </div>
  );
}
