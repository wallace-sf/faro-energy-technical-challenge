### Desafio Técnico de Frontend Faro Energy:

#### 1. **Configuração do Projeto:**
   - Crie um novo aplicativo React utilizando `create-react-app` ou configure o projeto de acordo com suas preferências.
   - Certifique-se de incluir um arquivo `.gitignore` para evitar o versionamento de arquivos desnecessários.

#### 2. **Dashboard e Detalhes da Usina:**
   - Desenvolva uma página de dashboard que exiba informações gerais sobre várias usinas solares, apresente os dados da forma que achar mais adequadas (Tabela, Cards, lista, etc).
   - Implemente uma página de detalhes da usina que permita a visualização detalhada das informações, incluindo gráficos de produção de energia e irradiação ao longo do tempo.
   - Mantenha a navegação entre essas páginas fluida e intuitiva.

#### 3. **Componentes React:**
   - Crie, no mínimo, os seguintes componentes:
     - `Dashboard` (componente principal para exibir informações gerais).
     - `PowerPlantDetails` (componente para exibir informações detalhadas da usina).
     - Utilize componentes adicionais conforme necessário para manter uma estrutura organizada.
   - Certifique-se de seguir as melhores práticas de nomenclatura e estruturação de componentes.

#### 4. **Integração de Gráficos:**
   - Utilize uma biblioteca de gráficos (por exemplo, Chart.js, D3.js, Echarts, Apexcharts) para representar visualmente os dados de produção de energia e irradiação.
   - Os gráficos devem ser interativos e permitir a seleção de intervalos de data.
   - Garanta que os gráficos sejam visualmente atraentes e de fácil compreensão.

#### 5. **Estado Global:**
   - Caso precise, utilize gerenciamento de estado global (por exemplo, React Context API ou Redux) para manter o estado da aplicação de forma eficiente.
   - Demonstre um entendimento claro de quando e por que o estado global é necessário.

#### 6. **Responsividade:**
   - Certifique-se de que a aplicação seja totalmente responsiva, proporcionando uma experiência de usuário consistente em dispositivos desktop e móveis.
   - Considere a usabilidade em diferentes tamanhos de tela e orientações.

#### 7. **Tratamento de Erros:**
   - Implemente tratamento de erros para situações como falhas na obtenção de dados ou interações do usuário inválidas.
   - Forneça feedback adequado ao usuário em caso de erros.

#### 8. **Documentação:**
   - Escreva comentários no código conforme necessário para explicar a lógica e o propósito dos componentes e funções.
   - Inclua um README.md com instruções detalhadas sobre como instalar, executar e acessar a aplicação.
   - Forneça informações sobre as dependências e bibliotecas utilizadas.

#### Dados
   Utilize dados mock do arquivo `data/mock.json` como fonte de dados para as telas.

#### Submissão:
   - Compartilhe o código-fonte por meio de um repositório Git (GitHub, GitLab, Bitbucket).
   - Envie um link para o repositório ou compartilhe um arquivo comprimido do projeto.

#### Critérios de Avaliação:
   1. Qualidade e organização do código.
   2. Uso adequado de componentes React e gerenciamento de estado global, caso utilizado.
   3. Design da interface do usuário, responsividade e usabilidade.
   4. Implementação eficiente dos gráficos de produção de energia.
   5. Tratamento de erros e validação de dados.
   6. Legibilidade do código e documentação adequada no README.md.
