export function sign(value: number): number {
  return value < 0 ? -1 : value > 0 ? 1 : 0;
}
