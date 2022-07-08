function compara()  //Funçao que verifica o jogo - Se existe um vencedor ou se deu empate
   {
    //INICIO DO SET (Utilizado para que o processamento dos dados seja em 50 milisegundos
      setTimeout( ()=> 
      {
            var pos1 = document.getElementById("pos1").value;
            var pos2 = document.getElementById("pos2").value;   
            var pos3 = document.getElementById("pos3").value;
            var pos4 = document.getElementById("pos4").value;
            var pos5 = document.getElementById("pos5").value;
            var pos6 = document.getElementById("pos6").value;
            var pos7 = document.getElementById("pos7").value;
            var pos8 = document.getElementById("pos8").value;
            var pos9 = document.getElementById("pos9").value;
            
                /* ------------ PRIMEIRA LINHA ------------*/
                /*Compara a primeira linha e calula*/
                if(pos1 !="" && pos1 == pos2 && pos2 == pos3)
                {
                    window.alert(pos3 + " é o VENCEDOR" );
                    location.reload();
                }

                /* ------------ SEGUNDA LINHA ------------*/
                /*Compara a segunda linha e calula*/
                else if(pos4 !="" && pos4 == pos5 && pos5 == pos6)
                {
                    window.alert(pos6 + " é o VENCEDOR" );
                    location.reload();
                }

                /* ------------ TERCEIRA LINHA ------------*/
                /*Compara a terceira linha e calula o vencedor*/
                else if(pos7 !="" && pos7 == pos8 && pos8 == pos9)
                {
                    window.alert(pos9 + " é o VENCEDOR" );
                    location.reload();
                }

                /* ------------ PRIMEIRA COLUNA ------------*/
                 /*Compara a primeira coluna e calula*/
                else if(pos1 !="" && pos1 == pos4 && pos4 == pos7)
                {
                    window.alert(pos7 + " é o VENCEDOR" );
                    location.reload();
                }

                 /* ------------ SEGUNDA COLUNA ------------*/
                 /*Compara a segunda coluna e calula*/
                else if(pos2 !="" && pos2 == pos5 && pos5 == pos8)
                {
                    window.alert(pos8 + " é o VENCEDOR" );
                    location.reload();
                }
               
                /* ------------ TERCEIRA COLUNA ------------*/
                 /*Compara a terceira coluna e calula*/
                else if(pos3 !="" && pos3 == pos6 && pos6 == pos9)
                {
                    window.alert(pos9 + " é o VENCEDOR" );
                    location.reload();
                }

                /* ------------ 1ª DIAGONAL ------------*/
                
                else if(pos1 !="" && pos1 == pos5 && pos5 == pos9)
                {
                    window.alert(pos9 + " é o VENCEDOR" );
                    location.reload();
                }

                /* ------------ 2ª DIAGONAL ------------*/
                else if(pos3 !="" && pos3 == pos5 && pos5 == pos7)
                {
                    window.alert(pos7 + " é o VENCEDOR" );
                    location.reload();
                }

                else if (pos1 !="" &&
                         pos2 !="" &&
                         pos3 !="" &&
                         pos4 !="" &&
                         pos5 !="" &&
                         pos6 !="" &&
                         pos7 !="" &&
                         pos8 !="" &&
                         pos9 !="" )
                         {
                            window.alert("FIM DO JOGO : Deu Velha");
                            location.reload();
                        }
            }, 60);
    }