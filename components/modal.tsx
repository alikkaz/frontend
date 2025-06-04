// components/modal.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const router = useRouter();

  const onOpenChange = (open: boolean) => {
    if (!open) {
      router.back(); // Navigate back to close the modal
    }
  };

  return (
    <Dialog open={true} defaultOpen={true} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden **border-4 border-green-500 shadow-xl**"> {/* Added distinct border to the modal itself */}
        {children}
      </DialogContent>
    </Dialog>
  );
}