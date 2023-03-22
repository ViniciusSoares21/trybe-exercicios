import math


# exercicios 1
def get_big_number(a, b):
    if a < b:
        return print(f"O numero {b} é maior que {a}")
    else:
        return print(f"O numero {a} é maior que {b}")


# get_big_number(30, 40)


# exercicio 2
def calculetor_media_aritimetica(a):
    soma = 0
    for number in a:
        soma += number
    print(f"A média aritmética é {soma / len(a)}")


# calculetor_media_aritimetica([3, 50, 9, 43])


# exercicio 3
def creator_square_by_length_number(n):
    if n > 1:
        for repit in range(n):
            print(n * "*")


# creator_square_by_length_number(5)


# exercicio 4
def get_big_Name(listName):
    big_name = ""
    for name in listName:
        if len(name) > len(big_name):
            big_name = name
    print(big_name)


# get_big_Name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])


# exercicio 5
def calculetor_qty_and_price_by_m2(m2):
    PRICE_TINTA = 80.00
    TINTA_QTY = 18

    litros_preciso = m2 / 3
    qty_latas = math.ceil(litros_preciso / TINTA_QTY)
    price_total = qty_latas * PRICE_TINTA

    compra = (qty_latas, price_total)

    return print(compra)


# calculetor_qty_and_price_by_m2(80)
