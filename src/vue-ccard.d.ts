import { DefineComponent } from 'vue';

export type CardBrand =
  | 'visa'
  | 'mastercard'
  | 'amex'
  | 'discover'
  | 'jcb'
  | 'diners'
  | 'elo'
  | 'hipercard'
  | 'aura'
  | null;

export interface VueCCardProps {
  number?: string;
  holder?: string;
  exp?: string;
  cvc?: string;
  isTypingCvc?: boolean;
}

declare const VueCCard: DefineComponent<VueCCardProps>;

export default VueCCard;

