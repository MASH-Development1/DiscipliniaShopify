export interface Shop {
  name?: string;
  description?: string;
}

export interface Layout {
  shop?: Shop;
}

export interface LayoutProps {
  children?: React.ReactNode;
  layout?: Layout;
} 