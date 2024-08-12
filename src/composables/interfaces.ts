export interface IMenuItem {
  label: string;
  icon: string;
  items?: IMenuItem[];
  to?: string;
  visible?: boolean;
  class?: string;
  url?: string;
  target?: string;
  level?: number;
}
export interface IMenuAppItem {
  name: string;
  status: boolean;
  to: string;
  icon: string;
}
