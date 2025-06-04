// app/photos/[id]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { photos } from '@/app/data/photos';

export default function PhotoDetailPage({ params }: { params: { id: string } }) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) {
    notFound(); // Renders Next.js 404 page
  }

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-[calc(100vh-64px)] **bg-blue-100 dark:bg-blue-950**">
      <Card className="w-full max-w-2xl **shadow-2xl border-4 border-blue-600**">
        <CardContent className="p-0">
          <Image
            src={photo.url}
            alt={photo.title}
            width={800}
            height={600}
            className="rounded-t-lg object-contain w-full max-h-[600px]"
            priority
          />
        </CardContent>
        <CardHeader className="p-6">
          <CardTitle className="text-3xl mb-2 text-blue-800 dark:text-blue-200">{photo.title}</CardTitle>
          <CardDescription className="text-base text-gray-700 dark:text-gray-300">{photo.description}</CardDescription>
          <p className="mt-4 text-sm text-blue-600 dark:text-blue-300 font-semibold">
            This is the **FULL PAGE VIEW** for the image. (Visible on direct access or refresh)
          </p>
        </CardHeader>
      </Card>
    </div>
  );
}