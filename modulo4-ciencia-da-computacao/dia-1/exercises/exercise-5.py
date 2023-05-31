# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede (em m²).

def custo_tinta(area):
    lata_preco = 80
    litros_necessarios = area / 3
    latas_necessarias = litros_necessarios // 18
    if litros_necessarios % 18:
        latas_necessarias += 1
    return latas_necessarias, latas_necessarias * lata_preco