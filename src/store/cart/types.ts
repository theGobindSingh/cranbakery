export type CartLines = Record<string, number>; // "cat/item/size" -> qty

export interface CartState {
  lines: CartLines;
}
