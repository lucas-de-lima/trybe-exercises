def custo_tinta(area):
    lata_preco = 80
    litros_necessarios = area / 3
    latas_necessarias = litros_necessarios // 18
    if litros_necessarios % 18:
        latas_necessarias += 1
    return latas_necessarias, latas_necessarias * lata_preco