**API de Gerenciamento de Influenciadores**

Esta é a versão 1.0.0 da nossa API, e ela foi gerada automaticamente pelo módulo **swagger-autogen**. A API está hospedada em `localhost:3001` e usa o protocolo `http`.
**Deploy**
https://influencersapi.onrender.com/api-docs/
**Rotas**

**1. /auth/login (POST)**

Autentica um usuário com base no corpo da solicitação que contém um objeto com "email" e "password".

**Respostas possíveis**:

- 200: OK
- 401: Não autorizado
- 404: Não encontrado
- 500: Erro de servidor interno

**2. /auth/register (POST)**

Registra um novo usuário com base no corpo da solicitação que contém um objeto com "name", "username", "email", "password" e "photo".

**Respostas possíveis**:

- 201: Criado
- 400: Solicitação inválida
- 409: Conflito
- 500: Erro de servidor interno

**3. /influencers/search (GET)**

Busca influenciadores com base no nome passado como query parameter.

**Respostas possíveis**:

- 200: OK
- 401: Não autorizado
- 404: Não encontrado
- 500: Erro de servidor interno

**4. /influencers/create (POST)**

Cria um novo influenciador com base no corpo da solicitação que contém um objeto com "userId", "name", "imageUrl", "bio", "socialMediaHandles", "followers" e "categories".

**Respostas possíveis**:

- 201: Criado
- 400: Solicitação inválida
- 401: Não autorizado
- 500: Erro de servidor interno

**5. /influencers/ (GET)**

Obtém todos os influenciadores.

**Respostas possíveis**:

- 200: OK
- 401: Não autorizado
- 404: Não encontrado
- 500: Erro de servidor interno

**6. /influencers/find/{id} (GET)**

Busca um influenciador específico com base no ID passado como parâmetro na rota.

**Respostas possíveis**:

- 200: OK
- 401: Não autorizado
- 404: Não encontrado
- 500: Erro de servidor interno

**7. /influencers/update/{id} (PUT)**

Atualiza um influenciador específico com base no ID passado como parâmetro na rota e no corpo da solicitação que contém um objeto com "name", "imageUrl", "bio", "socialMediaHandles", "followers" e "categories".

**Respostas possíveis**:

- 200: OK
- 401: Não autorizado
- 404: Não encontrado
- 500: Erro de servidor interno

**8. /influencers/delete/{id} (DELETE)**

Exclui um influenciador específico com base no ID passado como parâmetro na rota.

**Respostas possíveis**:

- 200: OK
- 401: Não autorizado
- 404: Não encontrado
- 500: Erro de servidor interno

**9. /users/create (POST)**

Registra um novo usuário com base no corpo da solicitação que contém um objeto com "name", "username", "email", "password" e "photo".

**Respostas possíveis**:

- 201: Criado
- 400: Solicitação inválida
- 409: Conflito
- 500: Erro de servidor interno

**10. /users/ (GET)**

Obtém todos os usuários.

**Respostas possíveis**:

- 200: OK
- 401: Não autorizado
- 404: Não encontrado
- 500: Erro de servidor interno

**11. /api-docs/ (GET)**

Mostra a documentação da API.
