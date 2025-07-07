'use client';

import { updateEnquiryStatus } from '@/app/dashboard/actions';
import { useTransition } from 'react';

const EnquiryStatus = {
  PENDING: 'PENDING',
  WON: 'WON',
  LOST: 'LOST',
};

export default function EnquiryStatusSelector({ id, currentStatus }) {
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const newStatus = e.target.value;

    startTransition(() => {
      updateEnquiryStatus(id, newStatus);
    });
  };

  return (
    <select
      defaultValue={currentStatus}
      onChange={handleChange}
      className="border p-1 text-sm"
      disabled={isPending}
    >
      {Object.values(EnquiryStatus).map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}
