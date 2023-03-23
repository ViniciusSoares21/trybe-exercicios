import random


def scrambled_word_game():
    random_word = random.choice(["Banana", "Maça", "Uva", "Manga"])
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    print(scrambled_word)
    tentativa = 3
    user_words = []
    for repit in range(tentativa):
        word = input("Qual é a palavra: ")
        user_words.append(word)

    for cheks in user_words:
        if cheks != random_word:
            return print("você perdeu :(")
        else:
            return print("você ACERTOOU!!!!")


if __name__ == "__main__":
    scrambled_word_game()
