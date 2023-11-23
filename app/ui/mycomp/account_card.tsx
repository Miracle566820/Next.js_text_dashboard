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
import { classicNameResolver } from 'typescript';

export function Account_card() {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <h1 className={`${lusitana.className} text-lg md:text-xl border-b p-4`}>
            My account
        </h1>
        <Account_photo/>
        <Account_info
        type="Name"
        content="Howard Lei"
        />
        <Account_info
        type="Email address"
        content="leihow@gmail.com"
        />
        <Account_info
        type="Password"
        content="*********"
        />
    </div>
  );
}

export function Account_photo() {
    return (
      <main>
          <div className="p-6 border-b">
            <h1 className={`${lusitana.className} text-lg md:text-xl mb-4`}>
                Profile photo
            </h1>
            <div className='flex gap-4 '>
                <div className='flex-1'>
                    <Image
                        src="/howard_lei.jpg"
                        className="mr-2 rounded-full"
                        width={80}
                        height={80}
                        alt='Account_photo'
                    />
                </div>
                <div className='flex-initial pt-6'>
                    <button className="rounded-xl bg-gray-300 p-2 shadow-sm"> Remove photo </button>
                </div>
                <div className='flex-initial pt-6'>
                    <button className="rounded-xl bg-gray-300 p-2 shadow-sm"> Change photo </button>
                </div>
            </div>
          </div>
      </main>
    );
    }
    
export function Account_info({
    type,
    content,
  }: {
    type: string;
    content: string;
  }) {
    return (
        <main>
            <div className="p-6 border-b">
                <h1 className={`${lusitana.className} text-lg md:text-xl mb-4`}>
                    {type}
                </h1>
                <div className="flex gap-4">
                    <div className='flex-1'>
                        <h1 className={`text-md md:text-lg mb-4`}>
                            {content}
                        </h1>
                    </div>
                    <div className='flex-initial pt-6'>
                        <button className="rounded-xl bg-gray-300 p-2 shadow-sm"> Edit </button>
                    </div>
                </div>
            </div>
        </main>
    );
  }

