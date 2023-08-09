
var parser, xmlDoc;
        var text = `<leaderboard>
            <player>
                <rank>1</rank>
                <FName>Paul</FName>
                <LName>Pogba</LName>
                <score>1500</score>                
            </player>
            <player>
                <rank>2</rank>
                <FName>Cristiano</FName>
                <LName>Namaldo</LName>
                <score>1200</score>                
            </player>
            <player>
                <rank>3</rank>
                <FName>Lionel</FName>
                <LName>Pessi</LName>
                <score>1100</score>               
            </player>
            <player>
                <rank>4</rank>
                <FName>Mohamed</FName>
                <LName>Salah</LName>
                <score>1050</score>                
            </player>
            <player>
                <rank>5</rank>
                <FName>Peymar</FName>
                <LName>Junior</LName>
                <score>900</score>                
            </player>
            <player>
                <rank>6</rank>
                <FName>Luis</FName>
                <LName>diaz</LName>
                <score>850</score>               
            </player>
            <player>
                <rank>7</rank>
                <FName>Jude</FName>
                <LName>Bellingham</LName>
                <score>700</score>             
            </player>
            <player>
                <rank>8</rank>
                <FName>Karim</FName>
                <LName>Benzema</LName>
                <score>580</score>              
            </player>
            <player>
                <rank>9</rank>
                <FName>Thiago</FName>
                <LName>Silva</LName>
                <score>520</score>              
            </player>
            <player>
                <rank>10</rank>
                <FName>Philippe</FName>
                <LName>Coutinho</LName>
                <score>350</score>                
            </player>           
            </leaderboard>`;
        parser = new DOMParser();

        xmlDoc = parser.parseFromString(text, "text/xml");



        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 4; j++) {
                let numStr = "d" + i.toString() + j.toString();
                let tag;
                if (j == 0) {
                    tag = "rank";
                } else if (j == 1) {
                    tag = "FName";
                } else if (j == 2) {
                    tag = "LName";
                } else {
                    tag = "score";
                }
                document.getElementById(numStr).innerHTML = xmlDoc.getElementsByTagName("player")[i].getElementsByTagName(tag)[0].childNodes[0].nodeValue;
            }
        }


        
