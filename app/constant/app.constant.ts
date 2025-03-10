import { IconDefinition, faFile, faChartSimple } from '@fortawesome/free-solid-svg-icons'

interface DashboardMenuItem {
  title: string;
  icon: IconDefinition;
  path: string;
}

export const MENU_ITEMS: DashboardMenuItem[] = [
  {
    title: 'Dashboard',
    icon: faChartSimple,
    path: '/dashboard'
  },
  {
    title: 'Data Object',
    icon: faFile,
    path: '/data-object'
  }
];