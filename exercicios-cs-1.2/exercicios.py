def remove_last_letter_of_word(word: str):
    modificaWord = word
    while len(modificaWord) != 0:
        print(modificaWord)
        # modificaWord = modificaWord.replace(modificaWord[-1], "")
        modificaWord = modificaWord[:-1]


if __name__ == "__main__":
    word = input("Digite uma palavra: ")
    remove_last_letter_of_word(word)
