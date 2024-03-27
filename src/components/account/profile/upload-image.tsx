"use client";

import { ChangeEvent, useCallback, useRef, useState } from "react";
import {
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/common";
import { UploadModel } from "@/types/models/upload";

interface IInput {
  image: File | null;
  error?: string;
}

interface IProps {
  onUpload: (file: UploadModel) => void;
  title: string;
}

export const UploadImage = ({ onUpload, title }: IProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState<IInput>({ image: null });
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const uploadMutation = useMutation({
    mutationKey: ["UPLOAD_IMAGE"],
    mutationFn: (formData: FormData) =>
      api.post<UploadModel>("/upload", formData, {
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            setProgress(
              () => (progressEvent.loaded / progressEvent.total!) * 50
            );
          }
        },
        onDownloadProgress: (progressEvent) => {
          if (progressEvent.total) {
            setProgress(
              () => 50 + (progressEvent.loaded / progressEvent.total!) * 50
            );
          }
        },
      }),
    onSuccess: ({ data }) => {
      if (!data.path) {
        data.path = `${process.env.NEXT_PUBLIC_API_URL}/upload/${data.id}`;
      }
      onClose();
      onUpload(data);
      setForm(() => ({ image: null }));
      setProgress(() => 0);
    },
  });

  const handelClick = useCallback(
    (image: File | null) => {
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        uploadMutation.mutate(formData);
      } else {
        setForm((prev) => ({ ...prev, error: "image is required" }));
      }
    },
    [uploadMutation]
  );

  return (
    <div>
      <Tooltip content={title} color="secondary">
        <Button size="lg" fullWidth onClick={onOpen} color="secondary">
          تصویر شاخص
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">
                آپلود عکس
              </ModalHeader>
              <ModalBody>
                <input
                  className="hidden"
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files?.length) {
                      setForm(() => ({ image: e.target.files![0] }));
                    }
                  }}
                  ref={inputRef}
                />
                <Button
                  fullWidth
                  color="default"
                  onClick={() => inputRef.current?.click()}
                >
                  انتخا عکس
                </Button>
                {form.image && (
                  <Image
                    width={400}
                    src={URL.createObjectURL(form.image)}
                    alt={form.image.name}
                  />
                )}
                {progress ? (
                  <Progress
                    size="sm"
                    aria-label="Loading..."
                    value={progress}
                  />
                ) : null}
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="flat" onClick={onClose}>
                  بستن
                </Button>
                <Button
                  color="primary"
                  type="button"
                  isLoading={uploadMutation.isPending}
                  onClick={() => handelClick(form.image)}
                >
                  آپلود
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
