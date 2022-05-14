$(document).ready(function(){
    
    let loremInfo = [
        name = "Stephen Strange",
    ]

    let quotes = [
       "They really should put the warnings before this spell.",
       "What is this? My mantra?",
       "Any late fees I should know about? A maiming perhaps?",
       "Unlike everyone else in your life, I don't work for you.",
       "I'm fluent in Google Translate.",
       "I do not believe in fairy tales about chakras or energy or the power of belief.",
       "I'll tell the guys at the Deli. Maybe they'll make you a metaphysical ham on rye.",
       "Wong. Just Wong? Like Adele? Or Aristotle, Drake, Bono... Eminem.",
       "We’re in the endgame now.",
       "I went forward in time, to view alternate futures. To see all the possible outcomes of the coming conflict.",
       "If I tell you what happens, it won't happen.",
       "Don't shut me out. I haven't got anywhere else to go...Thank you.",
       "Dormammu, I've come to bargain.",
       "This is the part where you leave.",
       "What's in that tea? Psilocybin? LSD?",
       "I control it by surrendering control? That doesn't make any sense."

   ];
    
    // Generate Paragraph
    
    function generateLorem(){
        
        var paragraph = "";
        
        for(i=0; i<5; i++){
            var n = Math.floor((Math.random() * quotes.length) + 0);
            paragraph += " " + quotes[n] + ".";
        }
        
        $("#loremcontent").append("<p>" + paragraph + "</p>");
    }
    
    $("#trigger_lorem_p").click(generateLorem);
    
    // Rich paragraph
    
    function generatePro(){
        
        var paragraph = "";
        
        for(i=0; i<5; i++){
            
            switch(i){
                case 1:
                    var n = Math.floor((Math.random() * quotes.length) + 0);
                    var text = quotes[n];
                    var link = '<a href="https://rafafields.com" target="_blank">' + text + "</a>";
                    
                    paragraph += " " + link + ".";
                break;
                case 3:
                    var n = Math.floor((Math.random() * quotes.length) + 0);
                    paragraph += " <strong>" + quotes[n] + "</strong>.";
                break;
                default:
                    var n = Math.floor((Math.random() * quotes.length) + 0);
                    paragraph += " " + quotes[n] + ".";
            }
        }
        
        $("#loremcontent").append("<p>" + paragraph + "</p>");
    }
    
    $("#trigger_lorem_pro").click(generatePro);
    
    // Generate Title
    
    function generateTitle(h){
        
        return function(e){
        
            var title = "";
            var n = Math.floor((Math.random() * quotes.length) + 0);
            title += " " + quotes[n];
            
            $("#loremcontent").append("<h" + h + ">" + title + "</" + h + "h>");
            
        }
        
    }
    
    $("#trigger_lorem_h1").click( generateTitle(1) );
    $("#trigger_lorem_h2").click( generateTitle(2) );
    $("#trigger_lorem_h3").click( generateTitle(3) );
    $("#trigger_lorem_h4").click( generateTitle(4) );
    $("#trigger_lorem_h5").click( generateTitle(5) );
    $("#trigger_lorem_h6").click( generateTitle(6) );
    
    // Generate Quote
    
    function generateQuote(){
        
        var quote = "";
        var n = Math.floor((Math.random() * quotes.length) + 0);
        quote += " " + quotes[n];

        $("#loremcontent").append("<blockquote><p>" + quote + "</p><cite>" + loremInfo[0] + "</cite>" + "</blockquote>");
        
    }
    
    $("#trigger_lorem_quote").click( generateQuote );

});