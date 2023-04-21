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
