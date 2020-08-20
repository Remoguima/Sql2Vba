        // JavaScript code to change 
        // the content of <textarea> 
    function changeContent(){
        var rawtext = document.querySelector('textarea#raw') //getting the original query
        var splittedImput = rawtext.value.split('\n'); //dividing the original query by row
        var convertedText = 'CSQL = " " \n' //initializing the converted query into a clean VBA variable

        for (var i=0; i<splittedImput.length; i++){ //initializing the loop
            var linha = splittedImput[i];
            
            convertedText =convertedText+ 'CSQL = CSQL & "  '+ linha + '  "\n' //putting the row content into the VBA var

            document.getElementById('converted').value 
                = convertedText; // "printing" the var into the output box

        }
    }