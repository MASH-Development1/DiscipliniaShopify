interface ProductLabelProps {
  text: string;
  description?: string;
}

export function ProductLabel({text, description}: ProductLabelProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {text}
        </h2>
        {description && (
          <p className="mt-4 text-lg leading-6 text-gray-500">
            {description}
          </p>
        )}
      </div>
      <div className="mt-8 border-t border-gray-200" />
    </div>
  );
} 