import React from 'react'
import { House } from 'lucide-react'
// import { TSidebarItem } from './types'
import { SidebarItem } from './(components)/sidebar-item'
import { URLS } from '@/src/lib/URLS'

const sidebarData: {
  name: string
  icon: iconType
  href: string
}[] = [
  {
    name: 'Dashboard',
    icon: 'House',
    href: URLS.dashboardHome
  }

  // { name: 'Salaries', icon: 'Landmark', href: URLS.salaries },
  // { name: 'Settings', icon: 'Settings', href: URLS.settings }
]
type iconType = 'House'

const IconComponent = ({ iconName }: { iconName: iconType }) => {
  const IconMap = {
    House
  }
  const Icon = IconMap[iconName]
  return Icon ? <Icon /> : null
}

export const SideBar = () => {
  return (
    <div className="w-60 p-3 bg-gray-100/50 rounded-tl-xl border-r relative">
      <div className="w-48 flex flex-col gap-2.5 flex-1">
        {sidebarData.map((item, index) => (
          <SidebarItem
            key={index}
            data={{
              ...item,
              icon: <IconComponent iconName={item.icon} />
            }}
          />
        ))}
      </div>
    </div>
  )
}
