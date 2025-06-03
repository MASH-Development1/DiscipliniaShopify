import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {ProductGrid} from '~/components/ProductGrid';
import {ProductLabel} from '~/components/ProductLabel';

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;

  const featuredProducts = await storefront.query(`
    query FeaturedProducts {
      products(first: 6) {
        nodes {
          id
          title
          handle
          productType
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
          }
        }
      }
    }
  `);

  const newArrivals = await storefront.query(`
    query NewArrivals {
      products(first: 3, sortKey: CREATED_AT, reverse: true) {
        nodes {
          id
          title
          handle
          productType
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
          }
        }
      }
    }
  `);

  return json({
    featuredProducts: featuredProducts.products.nodes,
    newArrivals: newArrivals.products.nodes,
  });
}

export default function Index() {
  const {featuredProducts, newArrivals} = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/hero_banner.jpg"
            alt="Hero Banner"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
        <div className="relative h-full flex items-center justify-start text-left pl-16">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6">
              All Mountain
              <br />
              All Season
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8">
              The All New Hydrogen Snowboard Exclusively
              <br />
              From Shopify
            </p>
            <a
              href="/collections/all"
              className="inline-block bg-black text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black border border-black transition-colors duration-300"
            >
              Shop Now →
            </a>
          </div>
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section className="relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          <div className="relative h-[600px] group overflow-hidden">
            <img
              src="/banner-men.jpg"
              alt="Men's Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-bold text-white mb-4">Men's Collection</h3>
              <a
                href="/collections/mens"
                className="inline-block bg-white text-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Shop Men
              </a>
            </div>
          </div>
          <div className="relative h-[600px] group overflow-hidden">
            <img
              src="/banner_women.jpg"
              alt="Women's Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-bold text-white mb-4">Women's Collection</h3>
              <a
                href="/collections/womens"
                className="inline-block bg-white text-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Shop Women
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <div>
        <ProductLabel
          text="New Arrivals"
          description="Latest additions to our collection"
        />
        <ProductGrid products={newArrivals} />
      </div>

      {/* Featured Products Section */}
      <div>
        <ProductLabel
          text="Featured Collection"
          description="Curated selection of our best sellers"
        />
        <ProductGrid products={featuredProducts} />
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Philosophy
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              We believe in creating premium athletic apparel that combines
              innovative design, superior materials, and exceptional craftsmanship.
              Every piece is engineered to enhance your performance and elevate
              your style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 