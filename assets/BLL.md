# Validação Campos de Formulário

## Secretaria

    #### Hospital
    - sigla
        - Tamanho:
            - max: 5
    - nome
        - Required
        - Tamanho
            - min: 5
            - max: 30
    - município
        - Required
        - Tamanho
            - min: 5
            - max: 30
    - telefone
        - Required
        - Formato
            - regex: ^((\()?(0)?([0-9]{2})(\))?)?((9)?(([1-9][0-9]{3})(-)?([0-9]{4})))$
            - descrição
                - DDD
                    - O DDD pode conter aspas
                    - O DDD tem 2 ou 3 dígitos
                    - Se tiver 3 dígitos, o primeiro é 0
                - Corpo
                    - O telefone pode conter o 9º digito
                    - O 9º digito sempre é 9
                    - O 8º digito deve estar entre [1-9]
                    - Os demais 7 digitos devem estar entre [0-9]
                    - Entre o 4º e o 5º digito pode haver um - (hifen)
            - exemplos
                - (015)95101-1111
                - 988091495
        - Tamanho
            - min: 9
            - max: 15
    - email
        - Required
        - Formato
            - regex: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        - Tamanho
            - min: 5
            - max: 254
        - Ser um email :)
    - usuario
        - [ ] Verificar demais validações referentes ao django
        - username
            - Obs
                - O tamanho difere no banco, deve ser ajustado através de alteração do modelo User do django
            - Tamanho
                - min: 8
                - max: 25
        - senha
            - Obs
                - O tamanho difere no banco, deve ser ajustado através de alteração do modelo User do django
            - Tamanho
                - min: 8
                - max: 25


    ### Capacidade
    - Total
        - Número
        - Pode ser 0
    - Covid
        - Número
        - Menor ou igual ao Total
        - Pode ser 0

## Paciente
    - Nome
        - Required
        - Tamanho
            - min: 3
            - max: 50
    - Data de Nascimento
        - Required
        - Data
        - Anterior ou igual ao dia atual
    - Data Internação
        - Required
        - Data
        - Anterior ou igual ao dia atual
    - Hora Internação
        - Regex: ^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$g
        - Required
        - Hora
        - Se Data Internação == hoje:
            - Anterior ou igual ao dia atual
    - Vias Aéreas
        - Required
        - Opções: 
            - VM: Ventilação Mecânica
            - AA: Ar Ambiente
            - VNI: Ventilação não Invasiva
        - Tamanho:
            - max: 4
    - Patologia
        - Required
        - Opções: 
            - S: Covid Suspeito
            - D: Covid Descartado
            - C: Covid Confirmado
            - O: Outras Patologias
        - Tamanho:
            - max: 4
    - CNS
        - Requirido
        - Tamanho:
            min: ?
            max: 30
    - Sisreg
        - Requirido
        - Tamanho:
            min: ?
            max: 30
    - Leito
        - Required
        - Opções: 
            - UA: UTI Adulto
            - UP: UTI Pediátrico
            - UN: UTI Néonatal
            - CA: Clínico Adulto
            - CP: Clínico Pediátrico
            - CN: Clínico Néonatal
            - VM: Simples com Ventilador Mecânico
        - Tamanho:
            - max: 3
    - Movimentação
        - Not Required
        - Opções: 
            - V: "" // Vazio
            - A: Alta
            - O: Óbito
            - M: MudançaMudança de Setor
        - Tamanho:
            - max: 4
    - Data Movimentação
        - Not Required
        - Data
        - Anterior ou igual ao dia atual
    - Hora Movimentação
        - Not Required
        - Hora
        - Se Data Internação == hoje:
            - Anterior ou igual ao dia atual
    - Aguardando UTI
        - Boolean

## Informe
    #### Hospital
        - Não é alterado
    #### Informante
        - informante
            - min: 5
            - max: 50
        - função
            - min: 2
            - max: 30
    #### Ocupação
    #### Pacientes
    #### Capacidade ?