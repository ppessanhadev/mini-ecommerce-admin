const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
});

export function errorTreat(error: string) {
  switch (error) {
    case 'User not found.':
      return 'Usuário não encontrado';
    case 'Wrong password.':
      return 'Senha incorreta';
    default:
      return 'Error na API, tentar novamente';
  }
}

export function formatCurrency(value: number) {
  return formatter.format(value);
}
