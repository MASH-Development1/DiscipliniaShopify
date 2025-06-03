import {Link} from '@remix-run/react';
import type {Product} from '@shopify/hydrogen/storefront-api-types';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export function ProductGrid({products, title}: ProductGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {title && (
        <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.handle}`}
            className="group"
          >
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
              {product.featuredImage?.url && (
                <img
                  src={product.featuredImage.url}
                  alt={product.featuredImage.altText || product.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
              )}
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {product.productType}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.priceRange?.minVariantPrice?.amount
                  ? new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: product.priceRange.minVariantPrice.currencyCode || 'USD',
                    }).format(parseFloat(product.priceRange.minVariantPrice.amount))
                  : 'Price unavailable'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 