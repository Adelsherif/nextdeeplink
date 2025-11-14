import Link from 'next/link';

export default function HomePage() {
  const productIds = [1, 2, 3];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">الصفحة الرئيسية</h1>
      <ul>
        {productIds.map(id => (
          <li key={id} className="mb-2">
            <Link href={`/product/${id}`} className="text-blue-500">
              شقة {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
