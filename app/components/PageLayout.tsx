import {MainHeader} from './Header';
import type {LayoutProps} from '~/lib/types';

export function PageLayout({children, layout}: LayoutProps) {
  if (!layout) {
    return <div className="flex flex-col min-h-screen bg-white">{children}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MainHeader />
      <main className="flex-grow pt-16">{children}</main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                About {layout.shop?.name || 'Our Store'}
              </h3>
              <p className="mt-4 text-base text-gray-500">
                {layout.shop?.description || 'Premium athletic and lifestyle apparel.'}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Customer Service
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/policies/shipping-policy" className="text-base text-gray-500 hover:text-gray-900">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="/policies/refund-policy" className="text-base text-gray-500 hover:text-gray-900">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="/policies/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Connect
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="https://instagram.com" className="text-base text-gray-500 hover:text-gray-900">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="text-base text-gray-500 hover:text-gray-900">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" className="text-base text-gray-500 hover:text-gray-900">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © {new Date().getFullYear()} {layout.shop?.name || 'Our Store'}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
