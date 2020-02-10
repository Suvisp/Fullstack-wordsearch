    let word = document.getElementById('syote');
    //lähetetään palvelimen osoitteeseen:
    const osoite = 'http://localhost:3000/api/words';

    document.getElementById('nappi').onclick = () => {
        console.log("nappia painettu");
    
        //lähettää pyynnön palvelimelle osoitteeseen ../api/words + syote
        fetch(`${osoite}/${word.value}`)
            .then(res => res.json())
            //vastaanottaa serveriltä datamuselta saadun tiedon ja vie selaimelle
            //fetch osaa muokkaa tiedon jsonista takaisin
            .then(data => {
                let tulosta = "";
                for (let w of data) {
                    tulosta += `<p>${w.word}</p>`;
                }   
                document.getElementById("lista").innerHTML = tulosta;
                console.log(data)
            });
    }
