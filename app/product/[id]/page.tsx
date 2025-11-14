'use server';
import WhatsAppShareButton from './WhatsAppShareButton';
import FacebookShareButton from './FacebookShareButton';
import TwitterShareButton from './TwitterShareButton';

interface Params { id: string; }
interface Product { id: number; name: string; description: string; image: string; }

// جلب بيانات المنتج
async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    id: user.id,
    name: user.name,
    description: `Email: ${user.email} - شركة: ${user.company?.name || 'غير متوفر'}`,
    image: `https://i.pravatar.cc/300?img=${user.id}`,
  };
}

// OG لكل صفحة
export async function generateMetadata({ params }: { params: Params }) {
  const resolvedParams = await params;
  const product = await fetchProduct(resolvedParams.id);
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

// توليد كل المسارات الديناميكية
export async function generateStaticParams() {
  const ids = [1, 2, 3, 4, 5]; // ممكن تجيبهم من API
  return ids.map(id => ({ id: id.toString() }));
}

// صفحة المنتج
export default async function ProductPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const product = await fetchProduct(resolvedParams.id);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <img src={product.image} alt={product.name} width={300} height={300} className="rounded shadow mb-4" />

      {/* Client Components */}
      <div className="flex gap-4">
        <WhatsAppShareButton id={product.id.toString()} />
        <FacebookShareButton id={product.id.toString()} />
        <TwitterShareButton id={product.id.toString()} />
      </div>
    </div>
  );
}
