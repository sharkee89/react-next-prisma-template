'use client';

import { redirect } from 'next/navigation';
import { DASHBOARD_ITEMS } from '@/app/constant/app.constant';

const DashboardMenuCard = () => {

  const handleNavigation = (path: string) => {
    redirect(path);
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {DASHBOARD_ITEMS.map((item, index) => (
        <div key={index} className="flex flex-col items-center pb-10 pt-10 hover:shadow-lg cursor-pointer" onClick={() => handleNavigation(item.path)}>
          <div className="text-7xl mb-5">{index + 1}</div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.title}</h5>
        </div>
      ))}
    </div>
  )
}

export default DashboardMenuCard;