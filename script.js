
switch (window.location.host) {
    case 'nfe.sefaz.go.gov.br':
        console.log('nfe.sefaz.go.gov.br');

        // Pega o html do iframe
        var html = $(".iframe-danfe-nfce").contents().find("html").html();
        
        enviarHtml(html);
        
        break;

    case 'www4.fazenda.rj.gov.br':
        
        console.log('www4.fazenda.rj.gov.br');
        
        // Espera o Ajax carregar para disparar
        setTimeout( () => {
            
            var html =$("body").contents().html();
            enviarHtml(html);
        
        },4000);
        
        break;
    case false:
        console.log("Bem-vindo!");
}

function enviarHtml(html){


    var ifr = document.createElement('iframe');
    var frm = document.createElement('form');

    frm.setAttribute("action", "https://www.baseunica.com.br/action_html");
    frm.setAttribute("method", "post");

    var htmlInput = document.createElement('hidden');
    // Coloca o html no input 
    htmlInput.setAttribute("value", html);

    // append no form
    frm.appendChild(frm);

    // append no iframe
    ifr.appendChild(frm);

    // append no html
    document.body.appendChild(ifr);

    // dispara o post
    frm.submit();
}