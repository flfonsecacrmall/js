
switch (window.location.host) {
    case 'www.fazenda.pr.gov.br':
        console.log('www.fazenda.pr.gov.br');

        // Pega o html do iframe
        var html = $(".iframe-danfe-nfce").contents().find("html").html();
        
        enviarHtml(html);
        
        break;

    case 'www4.fazenda.rj.gov.br':
        
        console.log('www4.fazenda.rj.gov.br');
        
        // Espera o Ajax carregar para capturar html e disparar
        setTimeout( () => {
            
            var html =$("body").contents().html();
            enviarHtml(html);
        
        },4000);
        
        break;
    default:
        console.log("host desconhecido");
}

function enviarHtml(html){

    console.log("✅ Enviando HTML 👇");

    console.log(html);

    var target = "iframe_name";

    var ifr = document.createElement('iframe');

    // Coloca o nome para fazer o post
    ifr.setAttribute("name", target);

    var frm = document.createElement('form');

    frm.setAttribute("action", "https://www.baseunica.com.br/action_html");
    frm.setAttribute("method", "post");

    // Define o target no iframe
    frm.setAttribute("target", target);

    var htmlInput = document.createElement('hidden');
    // Coloca o html no input 
    htmlInput.setAttribute("value", html);

    // append no form
    frm.appendChild(htmlInput);

    // append no iframe
    document.body.appendChild(frm);

    // append no html
    document.body.appendChild(ifr);

    // dispara o post
    frm.submit();

    console.log("✅ HTML Enviado 👆 para 🔗 ", frm.getAttribute("action"));
}
/*

Para testes no Browser colar o conteúdo acima no console do Browser

⚠️ Firefox - usar essa extensão - https://addons.mozilla.org/pt-BR/firefox/addon/ignore-x-frame-options-header/

// Exemplo de embed (Não funcion pois precisa mudar o header para text/javascript)
// var script = document.createElement("script");script.type="text/javascript";
// script.src="https://raw.githubusercontent.com/flfonsecacrmall/js/main/script.js?" + (Math.random() + 1).toString(36).substring(7);
// document.getElementsByTagName('head')[0].appendChild(script);

*/