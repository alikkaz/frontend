// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { photos } from '@/app/data/photos'; // Your mock data

export default function GalleryPage() {
  return (
    <main className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Our Photo Gallery</h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-10">
        Click an image to view in a modal. Refresh or access directly to see the full page.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <Link key={photo.id} href={`/photos/${photo.id}`} className="group block">
            <Card className="hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-0">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                />
              </CardContent>
              <CardHeader className="p-4">
                <CardTitle className="text-lg text-gray-700 dark:text-gray-300">{photo.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}