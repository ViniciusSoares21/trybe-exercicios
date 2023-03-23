import json
import csv


def count_categories():
    with open("arquivo.json") as file:
        content = json.load(file)
        qtyBooks = len(content)
        content_caunt = dict()
        for books in content:
            for cat in books["categories"]:
                if cat in content_caunt:
                    content_caunt[cat] += 1
                else:
                    content_caunt[cat] = 1
        return [content_caunt, qtyBooks]


def calcula_procentagem():
    categires_with_qty_and_books = count_categories()
    qtyBooks = categires_with_qty_and_books[1]
    content = []
    for categories in categires_with_qty_and_books[0]:
        div = categires_with_qty_and_books[0][categories] / qtyBooks
        porcentagem = div * 100
        content.append((categories, porcentagem))

    return content


def write_file_csv():
    content = calcula_procentagem()
    with open("cagoriesPorc.csv", "w") as file:
        writer = csv.writer(file)

        headers = [
            "categoria",
            "porcentagem",
        ]

        writer.writerow(headers)

        for cont, per in content:
            row = [
                cont,
                per,
            ]
            writer.writerow(row)


write_file_csv()
