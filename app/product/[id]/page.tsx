'use server';
import WhatsAppShareButton from './WhatsAppButton';

interface Params {
  id: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

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

export default async function ProductPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const product = await fetchProduct(resolvedParams.id);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} width={300} height={300} />
      
      {/* زرار واتساب يشير للرابط نفسه */}
      <WhatsAppShareButton id={product.id.toString()} />
    </div>
  );
}
