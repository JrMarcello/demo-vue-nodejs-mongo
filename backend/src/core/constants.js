export default {
  validations: {
    // E00xx
    INVALID_REQUEST_DATA: { code: 'E0000', message: 'Dados de requisição inválidos' },
    INVALID_DATA_FIELD: { code: 'E0001', message: 'Dado inválido' }
  },
  auth: {
    // E01xx
    error: {
      UNAUTHORIZED: { code: 'E0100', message: 'Acesso negado! Token inválido ou inexistente' }
    }
  },
  user: {
    // S02xx
    success: {
      CREATE: { code: 'S0200', message: 'Usuário criado com sucesso' },
      LOGIN: { code: 'S0201', message: 'Usuario logado' }
    },
    // E02xx
    error: {
      NOT_FOUND: { code: 'E0200', message: 'Erro ao buscar Usuário' },
      CREATE: { code: 'E0201', message: 'Erro ao criar o Usuário' },
      LOGIN: { code: 'E0202', message: 'Email e/ou Senha inválido(s)' }
    }
  },
  employee: {
    // S03xx
    success: {
      CREATE: { code: 'S0300', message: 'Funcionário criado com sucesso' },
      UPDATE: { code: 'S0301', message: 'Funcionário atualizado com sucesso' },
      REMOVE: { code: 'S0302', message: 'Funcionário removido com sucesso' }
    },
    // E03xx
    error: {
      NOT_FOUND: { code: 'E0300', message: 'Erro ao buscar Funcionário' },
      CREATE: { code: 'E0301', message: 'Erro ao criar o Funcionário' },
      UPDATE: { code: 'E0302', message: 'Erro ao atualizar o Funcionário' },
      REMOVE: { code: 'E0303', message: 'Erro ao remover o Funcionário' }
    }
  }
}
