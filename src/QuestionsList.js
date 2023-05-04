const QuestionsList = [
    {
    question: "Wie finden Sie den neuen Kollegen?",
    answersList: [
        {answer: "Den finde ich sehr sympathisch.", isCorrect:true},
        {answer: "Sie finden ihn nicht freundlich." , isCorrect:false},  
        {answer: "Der gefällt ihnen.", isCorrect:false},
        ]  
    },
    {
    question: "Mit wem ist der Chef zur Konferenz gereist?",
    answersList: [
        {answer:"Mit den neuen Mitarbeiter.", isCorrect:false},
        {answer:"Mit der neuen Mitarbeiterin.", isCorrect:true},
        {answer:"Mit der neue Mitarbeiter.", isCorrect:false},
        ]   
    },
    {
    question: "Wer hat nach mir gefragt?",
    answersList:[
        {answer:"Einen neuen Praktikanten.", isCorrect:false},
        {answer:"Einer neuen Praktikantin.", isCorrect:false},
        {answer:"Ein neuer Praktikant.", isCorrect:true},
        ]
    },
    {question: "Wie war dein erster Arbeitstag?",
    answersList:[
        {answer: "Sie machte mir keinen Spaß.", isCorrect:false},
        {answer: "Er ist mir in guter Erinnerung geblieben.", isCorrect:true},
        {answer: "Er hatte eine schlechte Erinnerung.", isCorrect:false},
        ]
    },
    {question: "Besonders gut hat mir das Betriebsklima",
    answersList:[
        {answer:"gefallen.", isCorrect:true},
        {answer:"gewesen.", isCorrect:false},
        {answer:"gegeben.", isCorrect:false},  
        ]
    },    
    {question: "Die Arbeitskollegen waren",
    answersList:[
        {answer:"sehr hilfsbereit.", isCorrect:true},
        {answer:"in schlechter Erinnerung.", isCorrect:false},
        {answer:"praktisch.", isCorrect:false},  
        ]
    }, 
    {question: "Mein erster Arbeitstag war",
    answersList:[
        {answer:"enttäuscht.", isCorrect:false},
        {answer:"sehr zufrieden.", isCorrect:false},
        {answer:"sehr anstrengend.", isCorrect:true},  
        ]
    },
    {question: "Wir suchten eine Wohnung,",
    answersList:[
        {answer:"mit der Garage.", isCorrect:false},
        {answer:"die in der Stadtmitte lag.", isCorrect:true},
        {answer:"die in den Garten führte.", isCorrect:false},  
        ]
    },
    {question: "Das ist das Haus,",
    answersList:[
        {answer:"von dem ich dir erzählt hatte.", isCorrect:true},
        {answer:"das ich erzählt habe.", isCorrect:false},
        {answer:"dem ich es erzählt habe.", isCorrect:false},  
        ]
    },
    {question: "Wo wohnst du am liebsten?",
    answersList:[
        {answer:"Ins Stadtzentrum", isCorrect:false},
        {answer:"Mitten am Stadtrand", isCorrect:false},
        {answer:"Außerhalb der Stadt", isCorrect:true},  
        ]
    },



    {question: "Durch die Fenster blickt man",
    answersList:[
        {answer:"auf den Marktplatz.", isCorrect:true},
        {answer:"im Grünen.", isCorrect:false},
        {answer:"durch den Park.", isCorrect:false},  
        ]
    },
    {question: "Ein Drittel der Bevölkerung lebt",
    answersList:[
        {answer:"auf das Land.", isCorrect:false},
        {answer:"in Großstädten.", isCorrect:true},
        {answer:"in Haushalten.", isCorrect:false},  
        ]
    },
    {question: "Die Hälfte der Bewohner lebt",
    answersList:[
        {answer:"in der Kleinstadt.", isCorrect:false},
        {answer:"im Hochhaus.", isCorrect:false},
        {answer:"allein.", isCorrect:true},  
        ]
    },
    {question: "Sie haben die Heizung noch nicht repariert,",
    answersList:[
        {answer:"trotzdem ich es Ihnen gesagt habe.", isCorrect:false},
        {answer:"obwohl ich es Ihnen mehrmals gesagt habe.", isCorrect:true},
        {answer:"ich sagte es Ihnen trotzdem.", isCorrect:false},  
        ]
    },
    {question: "Ich habe es Ihnen schon oft erklärt.",
    answersList:[
        {answer:"Trotzdem haben Sie es nicht geändert.", isCorrect:true},
        {answer:"Obwohl Sie nichts geändert haben.", isCorrect:false},
        {answer:"obwohl Sie es nicht ändern.", isCorrect:false},  
        ]
    },
    {question: "Ihr Service hat mich enttäuscht.",
    answersList:[
        {answer:"Obwohl ich Sie weiter empfehle.", isCorrect:false},
        {answer:"Trotzdem ich Sie empfehle.", isCorrect:false},
        {answer:"Trotzdem werde ich Sie weiter empfehlen.", isCorrect:true},  
        ]
    },
    {question: "Wie sieht die Zukunft der Arbeit aus?",
    answersList:[
        {answer:"Digitale Medien werden immer unwichtiger.", isCorrect:false},
        {answer:"Es gibt keine Alternative zur Digitalisierung.", isCorrect:true},
        {answer:"Wir werden keine Teamarbeit mehr brauchen.", isCorrect:false},  
        ]
    },
    {question: "Sie wollten kein Fleisch bestellen,",
    answersList:[
        {answer:"weil Sie Vegetarierin sind.", isCorrect:true},
        {answer:"obwohl Sie Vegetarier sind.", isCorrect:false},
        {answer:"denn Sie Vegetarier sind.", isCorrect:false},  
        ]
    },
    {question: "Möchten Sie noch etwas von der Torte?",
    answersList:[
        {answer:"Nein, danke. Sie sieht lecker aus.", isCorrect:false},
        {answer:"Hm, ich kann mich entscheiden.", isCorrect:false},
        {answer:"Ja, gerne. Sie schmeckt sehr gut.", isCorrect:true},  
        ]
    },
    {question: "Ich wollte eigentlich noch einen Nachtisch",
    answersList:[
        {answer:"bestellen.", isCorrect:true},
        {answer:"vorstellen.", isCorrect:false},
        {answer:"vor dem Hauptgericht.", isCorrect:false},  
        ]
    },



    {question: "Darf ich Ihnen einen Aperitif",
    answersList:[
        {answer:"verbieten?", isCorrect:false},
        {answer:"anbieten?", isCorrect:true},
        {answer:"dazugeben?", isCorrect:false},  
        ]
    },
    {question: "Nehmen Sie Platz!",
    answersList:[
        {answer:"Fühlen Sie sich zuhause!", isCorrect:false},
        {answer:"Fühlen Sie sich wie im Haus!", isCorrect:false},
        {answer:"Fühlen Sie sich wie zuhause!", isCorrect:true},  
        ]
    },
    {question: "Es ist schon spät.",
    answersList:[
        {answer:"Wir müssen langsam gehen.", isCorrect:true},
        {answer:"Wir wollten langsam gehen.", isCorrect:false},
        {answer:"Wir mussten langsam gehen.", isCorrect:false},  
        ]
    },
    {question: "Ich würde Ihnen empfehlen,",
    answersList:[
        {answer:"zweimal wöchentlich Sport zu machen.", isCorrect:true},
        {answer:"zwei Wochen Sport machen.", isCorrect:false},
        {answer:"zweimal Sport machen.", isCorrect:false},  
        ]
    },
    {question: "Es ist meine Pflicht, Sie",
    answersList:[
        {answer:"informieren.", isCorrect:false},
        {answer:"darüber informieren.", isCorrect:false},
        {answer:"darüber zu informieren.", isCorrect:true},  
        ]
    },
    {question: "Vielen Dank für den Hinweis.",
    answersList:[
        {answer:"Jetzt weiß ich, was ich brauche.", isCorrect:true},
        {answer:"Weiß ich jetzt, was ich brauche?", isCorrect:false},
        {answer:"Ich weiß nicht, was ich brauche.", isCorrect:false},  
        ]
    },
    {question: "Melden Sie sich, wenn Sie sich entschieden haben.",
    answersList:[
        {answer:"Ja, das würde ich gern tun.", isCorrect:false},
        {answer:"Ja, das werde ich gern tun.", isCorrect:true},
        {answer:"Ja, das könnte ich entscheiden.", isCorrect:false},  
        ]
    },
    {question: "Vergessen Sie nicht,",
    answersList:[
        {answer:"den Kundendienst zu rufen.", isCorrect:false},
        {answer:"den Kundendienst rufen.", isCorrect:false},
        {answer:"den Kundendienst anzurufen.", isCorrect:true},  
        ]
    },
    {question: "Es ist nicht einfach,",
    answersList:[
        {answer:"eine Entscheidung zu treffen.", isCorrect:true},
        {answer:"eine Entscheidung treffen.", isCorrect:false},
        {answer:"eine Entscheidung zu finden.", isCorrect:false},  
        ]
    },
    {question: "Hast du Lust,",
    answersList:[
        {answer:"zu spazieren?", isCorrect:false},
        {answer:"einen Spaziergang zu machen?", isCorrect:true},
        {answer:"auf einen Spaziergang zu machen.", isCorrect:false},  
        ]
}
    
].sort(() => Math.random() - 0.5);

export default QuestionsList;