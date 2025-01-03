import React from 'react';

import { Wifi, WifiOff, WrenchIcon } from 'lucide-react';
import type { ProjectStatus } from '../../types';

const statusConfig = {
  online: {
    icon: Wifi,
    text: 'Online',
    className: 'bg-green-100 text-green-700'
  },
  offline: {
    icon: WifiOff,
    text: 'Offline',
    className: 'bg-red-100 text-red-700'
  },
  maintenance: {
    icon: WrenchIcon,
    text: 'Maintenance',
    className: 'bg-yellow-100 text-yellow-700'
  }
};

interface StatusBadgeProps {
  status: ProjectStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.className}`}>
      <Icon size={12} />
      {config.text}
    </span>
  );
}