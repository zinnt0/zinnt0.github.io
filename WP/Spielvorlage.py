# Ein einfaches Text-Adventure mit if/else

# Einführung
print("Willkommen zu deinem ersten Text-Adventure!")
print("Du befindest dich in einem geheimen Wald. Vor dir führen zwei Wege in unterschiedliche Richtungen.")

# Entscheidung: Welchen Weg gehst du?
richtung = input("Möchtest du nach links oder nach rechts gehen? (links/rechts): ").lower()

if richtung == "links":
    # Weg links
    print("\nDu gehst nach links und erreichst ein mysteriöses Haus.")
    print("Es sieht aus, als ob jemand drinnen ist.")
    
    # Entscheidung: Betrittst du das Haus?
    haus = input("Möchtest du das Haus betreten? (ja/nein): ").lower()
    
    if haus == "ja":
        print("\nDu betrittst das Haus und findest einen Schatz!")
        print("Herzlichen Glückwunsch, du hast das Abenteuer gewonnen!")
    elif haus == "nein":
        print("\nDu gehst weiter und das Abenteuer endet hier.")
        print("GAME OVER")
    else:
        print("Das hast du nicht verstanden. Bitte gib 'ja' oder 'nein' ein.")
    
elif richtung == "rechts":
    # Weg rechts
# Und so weiter....
