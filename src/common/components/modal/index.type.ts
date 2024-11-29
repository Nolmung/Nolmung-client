export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}
