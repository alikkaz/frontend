// app/@modal/(.)photos/[id]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Modal } from '@/components/modal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { photos } from '@/app/data/photos';

export default function InterceptedPhotoPage({ params }: { params: { id: string } }) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) {
    notFound(); // Renders Next.js 404 within the modal context if needed
  }

  return (
    <Modal>
      <ScrollArea className="max-h-[80vh] w-full">
        <Card className="border-none shadow-none"> {/* The card *inside* the modal */}
          <CardContent className="p-0">
            <Image
              src={photo.url}
              alt={photo.title}
              width={800}
              height={600}
              className="rounded-t-lg object-contain w-full max-h-[500px]"
            />
          </CardContent>
          <CardHeader className="p-4">
            <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">{photo.title}</CardTitle>
            <CardDescription className="text-base text-gray-700 dark:text-gray-300">{photo.description}</CardDescription>
            <p className="mt-2 text-sm text-green-600 dark:text-green-300 font-semibold">
              This is the **MODAL VIEW** over the gallery. (Visible on click)
            </p>
          </CardHeader>
        </Card>
      </ScrollArea>
    </Modal>
  );
}