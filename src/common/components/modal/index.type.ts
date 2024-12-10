export interface ModalProps {
  width: string;
  height: string;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}
