# ConectaGym


**Camila Melo Ferreira, strangerxgrimes@gmail.com**

**Luana Fleury, luana.fleury4@gmail.com**

**Rafael Ferraz Barra, rafafbarra@gmail.com**

**Samuel Lincoln de Oliveira Gomes, samuelincoln1@gmail.com**

**Victor de Souza Friche Passos, vicfriche@gmail.com**

---

Professores:

**Hugo Bastos de Paula**

**Eveline Alonso Veloso**

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. Escrever aqui o resumo. O resumo deve contextualizar rapidamente o trabalho, descrever seu objetivo e, ao final, 
mostrar algum resultado relevante do trabalho (até 10 linhas)._

---


## 1. Introdução


    1.1 Contextualização

  Cientificamente é comprovado a importância de se exercitar diariamente para o corpo e a mente, mas algumas pessoas não tem tempo e força de vontade pra começar.  

 É importante considerar também a dificuldade que algumas pessoas podem apresentar devido à distância presencial para marcar suas aulas, fazer suas fichas e contratar algum personal de sua escolha, sendo tarefas muito mais simples de se realizar online. 

Por isso decidimos criar um software que tem a finalidade de facilitar a programação dos personal trainers e alunos. Onde o aluno consegue pelo próprio celular realizar o cadastro, marcar aulas e montar a ficha, contribuindo para um melhor funcionamento do fluxo da academia.

    1.2 Problema

   Muitas pessoas enfrentam dificuldades ao tentar se exercitar e encontrar um personal trainer atualmente. Uma das maiores barreiras é o custo de frequentar uma academia e contratar um personal trainer experiente, o que pode desanimar muitas pessoas. 
    
   Outro problema é conseguir manter a motivação para se exercitar regularmente, especialmente quando se treina sozinho. Muitas vezes, as pessoas podem se sentir desanimadas ou desmotivadas. 
    
   Com isso, as restrições de tempo e horários de trabalho também podem ser um obstáculo para muitas pessoas. Encontrar tempo para se exercitar regularmente pode ser difícil, especialmente quando o trabalho e outros compromissos ocupam a maior parte do dia.
    
   Outra dificuldade é a falta de conhecimento e confiança em relação ao treinamento de musculação. Muitas pessoas podem não ter experiência anterior na academia, não saber como usar corretamente os equipamentos de treinamento ou criar um plano de treinamento eficaz. Isso pode prejudicar os resultados e levar a lesões. 
    
   Portanto, encontrar um personal trainer experiente, confiável e que encaixe no horário pode ser um desafio para muitas pessoas. Alguns personal trainers podem não estar disponíveis ou podem ser muito caros, o que pode tornar difícil encontrar alguém que se adapte às necessidades e objetivos de cada indivíduo.


    1.3 Objetivo geral

O objetivo geral deste trabalho é confeccionar um sistema a fim de facilitar a elaboração de treinos, montagem de fichas de academia e a distribuição dos alunos entre os personal trainers disponíveis. Dessa forma os problemas identificados podem ser solucionados por meio do software que será desenvolvido neste trabalho. 

        1.3.1 Objetivos específicos

Os objetivos específicos são:
- Desenvolver um site responsivo
- Elaborar um sistema de cadastro de alunos
- Elaborar um sistema de cadastro de personal trainers
- Desenvolver um sistema de login
- Desenvolver um sistema para montagem de treinos
- Desenvolver um sistema de criação de fichas de academia para cada aluno atribuído a um personal trainer

      1.4 Justificativa

Muitas pessoas que ingressam na academia possuem pouca ou nenhuma experiência com treinamentos físicos.Tendo isso em vista, os alunos encontram dificuldade em criar rotinas de exercícios eficazes sem a orientação de um personal trainer. Entretanto, esse serviço possui altas taxas e nem sempre é possível encontrar um personal competente e que atenda à suas necessidades. Nesse sentido, o software ConectaGym busca oferecer uma alternativa acessível conectando os alunos a personal trainers qualificados a um preço razoável.

Ademais, os personal trainers frequentemente têm dificuldade em encontrar novos alunos e estabelecer um negócio confiável. Nosso software resolve esse problema, oferecendo maior visibilidade e auxiliando na construção de uma base de alunos e de sua imagem profissional. Em suma, o sistema contribui para uma melhor experiência dos alunos e personal trainers na academia, aumentando a satisfação e fidelização dos alunos. 

Como contribuições do trabalho temos a possibilidade de redução de custos operacionais das academias, uma vez que o software automatiza vários processos, como criação de fichas de treino, agendamento de aulas e atualização de dados. Além disso, o software oferece uma experiência personalizada para cada aluno, levando em consideração suas necessidades e objetivos específicos. Isso pode aumentar a eficácia dos treinos, melhorando o resultado dos alunos e, consequentemente, a imagem da academia.


## 2. Participantes do processo

O desenvolvimento de um software para academia que conecta alunos inexperientes e personal trainers envolve diversos participantes que são fundamentais para o funcionamento dos processos. A seguir, são descritos os diferentes perfis dos participantes do processo. 

Em primeiro lugar, temos o próprio personal trainer, profissionais especializados em treinamento físico e seu objetivo principal no uso do software é oferecer orientações personalizadas e suporte aos alunos inexperientes. É o responsável por criar fichas de treino para seus alunos e atualizar as fichas. Seu perfil pode variar em idade, gênero e nível de experiência.  

Outro participante importante é o aluno. Ele deve fornecer informações sobre sua condição física atual, como idade, peso, altura, histórico de lesões e condições médicas, para que o personal trainer possa adaptar os treinos de acordo com as necessidades individuais de cada um. Seu objetivo no uso do software é ter acesso a um programa de treinamento personalizado e receber orientações do personal trainer para alcançar seus objetivos. O aluno é responsável por registrar seu progresso no treino, comunicando ao personal sobre qualquer problema e também pode marcar aulas. Seu perfil pode variar em idade, gênero e histórico de saúde. 



## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

Sistemas de academia que unem alunos a personal trainers costumam funcionar de forma integrada com softwares de gestão da academia e possuem processos bem definidos. O aluno conhece a academia e decide se matricular. Ele ganha sua primeira ficha de treinamento e todos seus dados são cadastrados no sistema. 

Ao entrar no sistema pela sua conta o aluno tem acesso a personal trainers disponíveis que atuam na academia. Ele pode escolher o profissional de acordo com seus objetivos e marcar sessões de treinamento em dias e horários que estão de acordo com o horário disponível por determinado personal e de acordo com o horário de funcionamento da academia. Caso o aluno escolha um personal, ele poderá solicitar suas fichas de treinamento e assim realizar seu primeiro treino com o personal escolhido. Por sua vez, o personal deverá montar as fichas e enviá-las ao aluno.

Ao entrar no sistema pela sua conta o personal trainer pode visualizar suas aulas agendadas, pagamento das aulas e criar fichas de treino para os alunos.

## 3.2. Descrição Geral da proposta

A proposta é desenvolver um sistema capaz de conectar alunos a personal trainers de forma que os alunos consigam encontrar profissionais capazes de suprir suas necessidades de treinamento e os personal trainers consigam encontrar e encaixar clientes em sua agenda facilmente. O diferencial do nosso sistema é que além de conectar alunos a personais o aluno poderá solicitar e visualizar fichas de treinamento e agendar horários, enquanto o personal poderá montar a ficha de treinamento para cada aluno, gerenciar sua agenda e acompanhar a evolução dos alunos.

Em termos de processos não computacionais, os processos que os sistemas implementam envolvem a interação entre os alunos e os personal trainers. Por exemplo, os alunos podem conversar com os personal trainers durante as sessões de treinamento para discutir suas metas, desafios e progresso. Os personal trainers, por sua vez, podem utilizar equipamentos e técnicas específicas para ajudar os alunos a alcançar seus objetivos. No entanto, a utilização de tecnologia computacional permite que essas interações sejam mais eficientes e eficazes. Por exemplo, ao utilizar um software, os personal trainers podem ter acesso a informações mais detalhadas sobre o desempenho de cada aluno, o que lhes permite ajustar o plano de treinamento de forma mais precisa. Da mesma forma, os alunos podem ter acesso a informações mais precisas sobre seu progresso e metas, o que pode motivá-los a continuar com seu treinamento.

## 3.3. Modelagem dos Processos

### 3.3.1 Processo 1 – Solicitação de aula

Processo em que o aluno solicita um horário de aula.

<img width="680" alt="image" src="https://user-images.githubusercontent.com/103442333/230775587-8ebb297a-5e25-4bd9-a6e6-8dd07de4daf5.png">


### 3.3.2 Processo 2 – Solicitação de ficha de treinamento

Processo em que o aluno solicita uma ficha de treinamento ao seu personal.

![Solicitação de ficha de treinamento](https://user-images.githubusercontent.com/104036970/229921314-a17adece-fd0c-4c89-aa0e-fefcd4646c74.png)

### 3.3.4 Processo 3 – Montagem de ficha de treinamento

O personal monta a ficha de treinamento solicitada pelo seu aluno.

![Montagem de ficha de treinamento](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti2-0924100-academia-tis-m/blob/44c750ebf219ac5866651578ab0d520d5641ba01/docs/imagens/absence-request.png)

### 3.3.5 Processo 4 – Cancelamento de treino pelo aluno

O aluno cancela uma aula agendada com o personal.

![Cancelamento do treino pelo aluno](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti2-0924100-academia-tis-m/blob/master/docs/imagens/Cancelar%20treino.png)

### 3.3.6 Processo 5 – Cancelamento de aula com aluno

Personal cancela aula com algum aluno

![Cancelamento de aula com aluno](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti2-0924100-academia-tis-m/assets/104329840/87f3f58e-fcd3-4b15-ac8f-4f44f4d97eac)

### 3.3.7 Processo 6 – Pagamento do personal trainer

Aluno paga o personal de acordo com seu plano.

![Pagamento do personal trainer](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti2-0924100-academia-tis-m/blob/65171435e879b9711fe1e7998e115ecd7c3dbfae/docs/imagens/absence-request%20(3).png)

### 3.3.8 Processo 7 – Avalição do personal trainer

 Aluno avalia personal depois de ter aulas com ele.

![Avaliação do personal trainer](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti2-0924100-academia-tis-m/blob/97dadbfe3048223ef0f9089cbf720b260f1c9975/docs/imagens/absence-request%20(1).png)



## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – Solicitação de aula

**Consultar horário e solicitar aula**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Datas disponíveis | Data | Estar logado como aluno |  |
| Horários disponíveis | Área de texto | Estar logado como aluno |  |

**Confirmar aula**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Data | Data | Estar logado como personal |  |
| Horário | Área de texto | Estar logado como personal |  |
| Aluno | Área de texto | Estar logado como personal |  |
| Confirmar aula | Seleção única | Estar logado como personal |  |

**Cancelar horário**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Data | Data | Estar logado como personal |  |
| Horário | Data | Estar logado como personal |  |
| Aluno | Área de texto | Estar logado como personal |  |
| Cancelar aula | Seleção única | Estar logado como personal |  |  |
|    |    |     |

**Notificar cancelamento/confirmação de aula**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Notificação | Caixa de texto | Somente após confirmação ou cancelamento da aula |  |
| Data | Data | Somente após confirmação ou cancelamento da aula |  |
| Horário | Área de texto | Somente após confirmação ou cancelamento da aula |  |

#### Processo 2 – Solicitação de ficha de treinamento

**Solicitar ficha**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Solicitar ficha  | Seleção única | Estar logado como aluno |   |

**Selecionar personal**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Grupo muscular  | Múltipla escolha  |  Aula marcada  |    |
| Confirmar solicitação de ficha | Seleção única | Aula marcada |  |

#### Processo 3– Montagem de ficha de treinamento

**Receber solicitação de ficha do aluno**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Receber solicitação do aluno | Seleção única | Personal logado na conta  |   |

**Elaborar programa de treinamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Montar ficha  | Seleção única | Personal logado na conta  |   |

**Documentar o programa de treinamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Documentar ficha |  Área de texto | Personal logado na conta  |  

**Enviar ficha de treinamento para o aluno**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Enviar a ficha | Seleção única | Personal logado na conta  |  




#### Processo 4 – Cancelamento de treino pelo aluno

**Selecionar aula agendada**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Selecionar aula | Seleção única | Estar logado como aluno, possuir aula agendada |   |

**Solicitar cancelamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Confirmar cancelamento | Seleção única | ter selecionado uma aula |   |


#### Processo 5 – Cancelamento de aula com aluno

**Escolher a aula que deseja cancelar **

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome do Aluno  | Seleção única | Estar logado como personal, ter um aluno vinculado à você |  |
| Data da Aula  | Seleção única | Estar logado como personal, ter uma aula com o aluno vinculado à você |  |

**Adicionar observação **

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Observação | Área de texto |  |  |

#### Processo 6 – **Pagamento do personal trainer**


**Selecionar aula**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
|Escolher aula |Seleção Única | Cliente logado|   |

**Selecionar a forma de pagamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Escolher forma de pagamento | Seleção Única | Cliente logado  |  |

**Efetuar pagamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Confirmar pagamento  | Seleção Única | Cliente logado  |  |

#### Processo 7– Avaliação do personal  trainer

**Avaliar o personal**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Selecionar personal | Seleção única  |  Cliente logado na conta  |  |


**Definir pontuação**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Definir pontuação |Seleção única | Cliente logado na conta  |  |


**Adicionar observação**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
|Adicionar observação | Área de texto |  Cliente logado na conta |  |


### 4.2. Tecnologias

- Ambiente de desenvolvimento: Visual Studio Code.
- Tecnologias: HTML, CSS, JavaScript, Node.js, React, MySQL.
- Bibliotecas e frameworks do Node.js: Express.js, nodemon, sequelize, mysql2, handlebars, express-session, connect-flash, bcryptjs, passportjs.

## 5. Modelo de dados

Apresente o modelo de dados por meio de um modelo relacional ou Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior. 


![Modelo de dados academia](https://user-images.githubusercontent.com/104036970/234410441-fe693db4-eb79-4874-8578-c758a432bc9e.png)


## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total atendimento |   | Tabela reclamações | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | ![\frac{\sum{atendidas}}{\sum{requisicoes}}100](https://latex.codecogs.com/svg.latex?\frac{\sum{atendidas}}{\sum{requisicoes}}100) | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7.Sistema desenvolvido

Faça aqui uma breve descrição do software e coloque as principais telas com uma explicação de como usar cada uma.

## 8. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

# REFERÊNCIAS

Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT.

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf


**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._



# APÊNDICES

**Colocar link:**

Do código (armazenado no repositório);

Dos artefatos (armazenado do repositório);

Da apresentação final (armazenado no repositório);

Do vídeo de apresentação (armazenado no repositório).




