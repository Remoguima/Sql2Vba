        // JavaScript code to change 
        // the content of <textarea> 
    function changeContent(){
        var rawtext = document.querySelector('textarea#raw') //getting the original query
        var splittedImput = rawtext.value.split('\n'); //dividing the original query by row
        var convertedText = 'CSQL = " " \n' //initializing the converted query into a clean VBA variable

        if (rawtext.value.length>0) {
            for (var i=0; i<splittedImput.length; i++){ //initializing the loop
                var linha = splittedImput[i];
                
                convertedText =convertedText+ 'CSQL = CSQL & "  '+ linha + '  "\n' //putting the row content into the VBA var
    
                document.getElementById('converted').value = convertedText; // "printing" the var into the output box
    
            }   
        }
    };

    function clearContent(){
        document.getElementById('raw').value = ""
        document.getElementById('converted').value = ""
        

    };

    function copyToClipboard(){
        // Get the text field
        var copyText = document.getElementById("converted");

        // Select the text field
        copyText.select();
        
        // Copy the text inside the text field
        document.execCommand("copy");
        
        // Alert the copied text
        alert("Copied to the clipboard.")
    };