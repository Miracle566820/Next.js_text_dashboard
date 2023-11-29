import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import {
  ComputerDesktopIcon,
  CheckCircleIcon,
  XCircleIcon,
  DocumentPlusIcon,
  ClockIcon,
  VariableIcon,
  BeakerIcon,
  EllipsisHorizontalIcon,
  ArrowDownOnSquareStackIcon,
  CalculatorIcon,
  CloudIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

import { lusitana } from '@/app/ui/fonts';

export function HistoryTab_icon1({
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
        <VariableIcon className="w-8 p-1" />
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <div className="mb-2 flex items-center ">
            {/* icon here */}
            <p>{title}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 border-b-2 pb-1">
            <div className="text-xs text-gray-500">
              <ClockIcon className="float-left w-3" />
              {time}
            </div>
            <div className="text-xs text-green-800">
              <CheckCircleIcon className="float-left w-3" />
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function HistoryTab_icon2({
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
        <BeakerIcon className="w-8 p-1" />
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <div className="mb-2 flex items-center">
            {/* icon here */}
            <p>{title}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 border-b-2 pb-1">
            <div className="text-xs text-gray-500">
              <ClockIcon className="float-left w-3" />
              {time}
            </div>
            <div className="text-xs text-red-800">
              <XCircleIcon className="float-left w-3" />
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function HistoryTab_icon3({
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
        <CalculatorIcon className="w-8 p-1" />
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <div className="mb-2 flex items-center">
            {/* icon here */}
            <p>{title}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 border-b-2 pb-1">
            <div className="text-xs text-gray-500">
              <ClockIcon className="float-left w-3" />
              {time}
            </div>
            <div className="text-xs text-red-800">
              <XCircleIcon className="float-left w-3" />
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export function TopicTab({
//   title,
//   time,
//   status,
// }: {
//   title: string;
//   time: string;
//   status: 'Online' | 'Offline';
// }) {
//   return (
//     <div className="mb-2 flex w-full gap-3 rounded-md bg-white p-3">
//       <p className="flex-none">
//         <ComputerDesktopIcon className="w-8 p-1" />
//       </p>
//       <div className="flex flex-1 items-center justify-between">
//         <div>
//           <div className="mb-2 flex items-center border-b">
//             {/* icon here */}
//             <p>{title}</p>
//           </div>
//           <div className="grid grid-cols-2 gap-1">
//             <div className="text-xs text-gray-500">{time}</div>
//             <div className="text-xs">{status}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export function TopicTab1({
  title,
  time,
  status,
}: {
  title: string;
  time: string;
  status: 'Online' | 'Offline';
}) {
  return (
    <div className="mb-2 flex w-full gap-3 rounded-md bg-white p-3 ">
      <p className="flex-none">
        <VariableIcon className="w-8 p-1" />
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <div className="mb-2 flex items-center">
            {/* icon here */}
            <p>{title}</p>
          </div>
          <div className="grid grid-cols-2 gap-12 border-b-2 pb-1">
            <div className="text-xs text-gray-500">
              <ClockIcon className="float-left w-3" />
              {time}
            </div>
            <div className="text-xs text-green-800">
              <CheckCircleIcon className="float-left w-3" />
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopicTab2({
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
        <CloudIcon className="w-8 p-1" />
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <div className="mb-2 flex items-center">
            {/* icon here */}
            <p>{title}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 border-b-2 pb-1">
            <div className="text-xs text-gray-500">
              <ClockIcon className="float-left w-3" />
              {time}
            </div>
            <div className="text-xs text-red-800">
              <XCircleIcon className="float-left w-3" />
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export function TopicTab3({
//   title,
//   time,
//   status,
// }: {
//   title: string;
//   time: string;
//   status: 'Online' | 'Offline';
// }) {
//   return (
//     <div className="mb-2 flex w-full gap-3 rounded-md bg-white p-3">
//       <p className="flex-none">
//         <ComputerDesktopIcon className="w-8 p-1" />
//       </p>
//       <div className="flex flex-1 items-center justify-between">
//         <div>
//           <div className="mb-2 flex items-center border-b">
//             {/* icon here */}
//             <p>{title}</p>
//           </div>
//           <div className="grid grid-cols-2 gap-1">
//             <div className="text-xs text-gray-500">{time}</div>
//             <div className="text-xs">{status}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export function History() {
  return (
    <div className="mb-3 rounded-xl bg-gray-100 p-2 shadow-sm">
      <div className="flex">
        <h1 className="flex-1 p-3 text-lg md:text-xl">History</h1>
        <button className="p-3">
          <EllipsisHorizontalIcon className="w-6 flex-initial" />
        </button>
      </div>

      <HistoryTab_icon1
        title="Calculus Homework"
        time="7 hours ago"
        status="Submitted"
      />
      <HistoryTab_icon2
        title="Science Homework"
        time="17 hours ago"
        status="Unsubmitted"
      />
      <HistoryTab_icon3
        title="Algorithm Homework"
        time="17 hours ago"
        status="Unsubmitted"
      />
    </div>
  );
}

export function Topic() {
  return (
    <div className="mb-3 rounded-xl bg-gray-100 p-2 shadow-sm">
      <div className="flex">
        <h1 className="flex-1 p-3 text-lg md:text-xl">Topics</h1>
        <button className="p-3">
          <EllipsisHorizontalIcon className="w-6 flex-initial" />
        </button>
      </div>
      <TopicTab1 title="Calculus Class" time="7 min left" status="Online" />
      <TopicTab2 title="Network Class" time="57 min left" status="Offline" />
      {/* <TopicTab title="Topic3" time="2 hours left" status="Online" />
      <TopicTab title="Topic4" time="59 min left" status="Online" /> */}
      <div className="grid grid-cols-1 place-items-center gap-4 ">
        <button className=" flex p-2 ">
          <h1 className="text-violet-800">Show All</h1>
          <ChevronDownIcon className=" ml-2 w-3" />
        </button>
      </div>
    </div>
  );
}
