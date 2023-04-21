const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
});

export function useCurrencyFormatter(value: number) {
  return formatter.format(value);
}
