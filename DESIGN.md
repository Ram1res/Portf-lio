# Design do portfólio

## Objetivo e percurso

Portfólio profissional de Víctor Ramires em português brasileiro, direcionado a agências e recrutadores. Apresenta uma prática audiovisual experiente junto à trajetória em comunicação, design e direção criativa, com contato direto por e-mail e WhatsApp.

A página única começa pela apresentação pessoal, segue por cinco projetos audiovisuais, uma seleção do portfólio de design, perfil, especialidades e experiência, e termina no contato. Não há barra de navegação no topo: os capítulos aparecem no fim da abertura.

## Direção visual

Uma publicação editorial numerada, minimalista e cinematográfica, que alterna páginas de fundo preto e branco. Tipografia, retratos, filmes, peças gráficas e legendas conduzem a narrativa; a composição prioriza mídia real e sequências assimétricas, não cards genéricos. O roxo aparece com parcimônia em pontos de ênfase, navegação, foco e interação.

Na abertura, a assinatura tipográfica de Víctor e uma apresentação curta estabelecem a identidade, sem retrato ou menu no topo. A foto recortada e sem fundo ocupa um espaço maior na seção “Sobre”. Os projetos variam o arranjo do título, contexto e mídia de acordo com cada trabalho.

### Tipografia e cor

- Gilroy local, nos pesos 300, 400, 500, 600, 700, 800 e 900, definida em `assets/fonts/` e declarada em `assets/css/style.css`.
- As superfícies principais usam preto `#09090b` e branco `#f7f7f8`; texto, linhas e mídias usam neutros de alto contraste. Os acentos roxos são `#6938c7` e `#c8b7ff`.
- Tamanhos tipográficos e margens usam valores fluidos com `clamp()`.

## Estrutura e conteúdo

1. Abertura e navegação por capítulos: Audiovisual, Design, Sobre, Trajetória e Contato.
2. Projetos audiovisuais: Comunicação Comunitária — ComCom; The Garage — Formula SAE UnB; Apuama Experience; Recanto das Flores; e Diego Zaka.
3. Seleção de seis peças do portfólio de design, com acesso ao PDF completo.
4. Perfil, ferramentas e especialidades, experiência profissional, contato e rodapé.

Rainha Seguros e Galeria Karla Osório permanecem apenas como passagens da experiência profissional; não têm apresentação visual de projeto. Redes sociais e espaços reservados para perfis sociais não são exibidos.

## Layout responsivo

Em telas largas, a abertura combina texto e retrato, e os projetos usam uma composição editorial de 12 colunas. Em até 900 px as colunas e margens se ajustam; até 680 px os projetos empilham, as galerias são reorganizadas e a navegação por capítulos passa a rolar horizontalmente; até 380 px tipografia e algumas grades se adaptam a telas estreitas.

## Interação e acessibilidade

- Links da abertura, dos capítulos e do rodapé navegam por âncoras.
- A assinatura da abertura entra em uma sequência curta; retratos e imagens surgem em recortes editoriais quando entram na área visível.
- Fotografias e peças de direção de arte abrem em um visualizador de tela cheia. A navegação avança apenas dentro da galeria atual, por botões, setas do teclado ou gesto horizontal no celular; Escape e o botão de fechar encerram a visualização.
- Revelações de conteúdo são discretas e não impedem a leitura sem `IntersectionObserver`; animações respeitam `prefers-reduced-motion`.
- Vídeos locais usam controles nativos, `preload="none"` e reprodução mediante ação explícita. Erros anunciam uma alternativa para abrir o arquivo.
- The Garage usa um `iframe` do YouTube com título e carregamento adiado. Os filmes Apuama também oferecem links para suas versões no YouTube.
- A página mantém estrutura semântica, link para pular ao conteúdo, foco visível, textos alternativos, rótulos de mídia e navegação por teclado.

## Ativos

- `assets/images/victor-cutout.png`: retrato recortado, sem fundo, usado na seção “Sobre”.
- `assets/images/recanto-01.jpg`–`recanto-03.jpg` e `assets/images/diego-01.jpg`–`diego-03.jpg`: fotografias dos projetos Recanto das Flores e Diego Zaka.
- `assets/images/design/portfolio-page-04.jpg`–`portfolio-page-09.jpg`: imagens derivadas das páginas 4–9 do PDF original de design.
- Os vídeos locais da raiz incluem o documentário ComCom e dois filmes Apuama. Os caminhos relativos e codificados no HTML dependem de os arquivos originais permanecerem no lugar.

Preserve os arquivos originais. Ao substituir ou adicionar mídia, atualize caminhos, descrições alternativas e legendas para corresponder ao material real. Não invente créditos, links, imagens ou resultados; só substitua placeholders quando o material estiver confirmado.
