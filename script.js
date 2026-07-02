function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
function checkMultiplePhrases() {
    let userInput = document.getElementById("userInput").value.toLowerCase().trim();
    let messageBox = document.getElementById("message");

    let responses = {
        "הלל": "יצאתי מדעתי, תכף אשוב",
        "הלל צור": "יצאתי מדעתי, תכף אשוב",
        "hillel": "putting the I in teamwork",
        "רננה": "you can't know that",
        "איתן": "ועכשיו?",
        "אמא": "gutten you!",
        "bill cipher": "reality is an illusion! the universe is a hologram! buy gold! byeeeeeeee",
        "alastor": "you're never fully dressed without a smile",
        "the dragon warrior": "skadoosh!",
        "gandalf": "you! cannot! paaaaaaas!",
        "darth vader": "no, i am your father",
        "terminator": "I'll be back",
        "dory": "just keep swimming",
        "vilhelm": "aaaaaaaaah!",
        "luke skywalker": "noooooo!",
        "buzz lightyear": "to infinity, and beyond!",
        "the godfather": "I'm gonna make him an offer he can't refuse",
        "don vito": "I'm gonna make him an offer he can't refuse",
        "joker": "Why so serious?",
        "dorothy": "there's no place like home",
        "master oogway": "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present",
        "edna mode": "I never look back, darling. It distracts from the now.",
        "kronk": "Oh, right. The poison. The poison for Kuzco, the poison chosen especially to kill Kuzco, Kuzco's poison. That poison?",
        "cheshire cat": "If you don't know where you are going, any road can take you there",
        "the cheshire cat": "If you don't know where you are going, any road can take you there",
        "rafiki": "Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it",
        "homer": "Here's to alcohol: the cause of, and solution to, all of life's problems",
        "homer simpson": "If you don't like your job, you don't strike. You just go in every day and do it really half-assed",
        "Frodo": "I will take the Ring, though I do not know the way",
        "the mad hatter": "We're all mad here",       
        "dumbledore": "It does not do to dwell on dreams and forget to live",
        "albus dumbledore": "To the well-organised mind, death is but the next great adventure",
        "bart simpson": "Soul? Come on, Milhouse, there is no such thing as a soul. It's just something they made up to scare kids..",
        "lisa simpson": "Better to remain silent and be thought a fool than to open your mouth and remove all doubt",
        "marge simpson": "I don't hate you for failing. I love you for trying",
        "idniana jones": "it belongs in a museum",
        "james bond": "my name is Bond. James Bond",
        "sirius black": "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are",
        "Albus Percival Wulfric Brian Dumbledore": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends",
        "Rubeus Hagrid": "What’s coming will come, and we’ll meet it when it does",
        "Hagrid": "What’s coming will come, and we’ll meet it when it does",
        "harry": "there's no need to call me 'sir' professor",
        "harry potter": "there's no need to call me 'sir' professor",
        "snape": "I can teach you how to bewitch the mind and ensnare the senses. I can teach you how to bottle fame, brew glory, and even put a stopper in death",
        "severus snape": "I can teach you how to bewitch the mind and ensnare the senses. I can teach you how to bottle fame, brew glory, and even put a stopper in death",
        "hermione": "Now, if you two don't mind, I'm going to bed. Before either of you come up with another clever idea to get us killed—or worse, expelled",
        "hermione granger": "Now, if you two don't mind, I'm going to bed. Before either of you come up with another clever idea to get us killed—or worse, expelled",
        "ron": "From now on, I don't care if my tea leaves spell, 'Die, Ron, die,' I'm chucking them in the bin",
        "ron weasley": "Bloody hell",
        "Ronald Bilius Weasley": "Why spiders? Why couldn't it be 'follow the butterflies'?",
        "po": "My old enemy... Stairs",
        "george and fred": "We know our names are Gred and Forge",
        "george weasley": "Saintlike. You see... I'm HOLEY, Fred.",
        "fred weasley": "The whole wide world of ear-related humor and you go for 'I'm holy'? That's pathetic",
        "lord voldemort": "Harry Potter, the Boy Who Lived... come to die",
        "tom riddle": "Voldemort is my past, present, and future",
        "voldemort": "There is no good and evil. There is only power, and those too weak to seek it!",
        "neville longbottom": "I won't let you do it, I'll — I'll fight you!",
        "mcgonagall": "You look in excellent health to me, Potter, so you will excuse me if I don’t let you off homework today. I assure you that if you die, you need not hand it in",
        "minerva mcgonagall": "Have a biscuit, Potter",
        "professor mcgonagall": "Perhaps it would be more useful if I were to Transfigure yourself and Mr Potter into a pocket watch? That way one of you might be on time",
        "draco": "Goyle, Honestly, if you were any slower, you'd be going backward",
        "malfoy": "Famous Harry Potter,Can't even go to a bookshop without making the front page",
        "draco malfoy": "Longbottom, if brains were gold, you'd be poorer than Weasley, and that's saying something",
        "remus lupin": "Eat. You'll feel better",
        "lupin": "Eat. You'll feel better",
        "batman": "I. Am. Batman",
        "groot": "I am groot",
        "thanos": "I am inevitable",
        "jack sparrow": "why is the rum gone?",
        "captain jack sparrow": "Me? I'm dishonest. And a dishonest man you can always trust to be dishonest. Honestly. It's the honest ones you want to watch out for, because you can never predict when they're going to do something incredibly... stupid",
        "yoda": "Choose or choose not. There is no try",
        "master yoda": "Patience you must have my young Padawan",
        "marty mcfly": "No wonder your president has to be an actor. He's gotta look good on television.",
        "bilbo baggins": "It's a dangerous business, Frodo, going out your door",
        "shrek": "better in than out I always say",
        "donkey": "I like that boulder. That is a nice boulder",
        "dobby": "Dobby never meant to kill. He only meant to maim, or seriously injure",
        "mickey mouse": "see ya real soon",
        "spiderman": "I can't be a friendly neighborhood Spider-Man if there's no neighborhood",
        "bugs bunny": "Of course, as you know, society is made up of—uh—well, mostly of people.",
        "bugs": "I knew I shoulda made a left turn at Albuquerque",
        "winnie the pooh": "Some people care too much. I think it's called love",
        "han solo": "Never tell me the odds!",
        "sherrif woody": "Reach for the sky!",
         "woody": "Reach for the sky!",
         "woody allen": "I'm not afraid of death; I just don't want to be there when it happens",
         "charlie":"I've developed a new philosophy. I only dread one day at a time",
         "charlie brown":"Sometimes I lie awake at night, and I ask, 'Where have I gone wrong?' Then a voice says to me, 'This is going to take more than one night",
         "chuck":"In the book of life, the answers aren't in the back",
         "brown":"Don't worry about the world coming to an end today. It's already tomorrow in Australia",
    };

    if (responses[userInput]) {
        messageBox.innerHTML = responses[userInput];
        messageBox.style.color = " cyan";
    } else {
        messageBox.innerHTML = " personality was not yet fed into the database.";
        messageBox.style.color = "red";
    }
}