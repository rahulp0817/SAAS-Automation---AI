import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-providers";

import React from "react";

type Props = {
  title: string;
  subheading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

function CustomModal({ children, subheading, title, defaultOpen }: Props) {
  const { isOpen, setClose } = useModal();
  const handleclose = () => setClose();
  return (
    <Drawer open={isOpen} onClose={handleclose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">{title}</DrawerTitle>
          <DrawerDescription className="text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
            {subheading}
            {children}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col gap-4 bg-white border-t-[1px] border-t-muted">
          <DrawerClose>
            <Button variant="ghost" className="w-full bg-blue-500 text-white hover:bg-blue-700 hover:text-white" onClick={handleclose}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CustomModal;
