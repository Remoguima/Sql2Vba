        // JavaScript code to change 
        // the content of <textarea> 
        function changeContent() { 
            var rawtext = document.querySelector('textarea#raw')

            if (rawtext.value.length === 0) {
                document.getElementById('converted').innerText = ""

                
            }
            else{
                document.getElementById('converted').innerText 
                = 'CSQL = CSQL &  "  ' + rawtext.value + '  "'; 
            }       
    } 