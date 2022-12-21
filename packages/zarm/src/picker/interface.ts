import { MountContainer } from '../utils/dom';
import type { BasePickerViewProps, PickerColumnItem, PickerValue } from '../picker-view/interface';

export interface BasePickerContainerProps {
  title?: string;
  confirmText?: string;
  cancelText?: string;
  visible?: boolean;
  maskClosable?: boolean;
  forceRender?: boolean;
  destroy?: boolean;
  mountContainer?: MountContainer;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  afterOpen?: () => void;
  afterClose?: () => void;
  children?: React.ReactNode;
}

export interface BasePickerProps
  extends Omit<BasePickerContainerProps, 'onConfirm'>,
    Omit<BasePickerViewProps, 'onChange'> {
  onChange?: (value: PickerValue[], items: PickerColumnItem[], level: number) => void;
  onConfirm?: (value: PickerValue[], items: PickerColumnItem[]) => void;
  onCancel?: () => void;
}