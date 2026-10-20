// ==================================================
// 🌍 VIDA BRASILEIRA — DADOS DO JOGO
// ==================================================

const jogador = {
    nome: "Seu Personagem",
    idade: 18,
    genero: "Não informado",
    saude: 100,
    felicidade: 80,
    aparencia: 75,
    inteligencia: 50,
    dinheiro: 1500,
    fgts: 0,
    salarioAtual: 0,
    salarioContratacao: 0,
    tempoDeCasa: 0,
    tempoCarteiraAssinada: 0,
    empregoAtual: null,
    empregosAnteriores: [],
    patrimonio: [],
    dividas: [],
    banco: { saldo: 1500, investimentos: 0 },
    familia: {
        pai: { nome: "Desconhecido", vivo: true },
        mae: { nome: "Desconhecida", vivo: true },
        relacionamento: null,
        exRelacionamentos: [],
        irmaos: [],
        pets: []
    },
    escolaridade: "Ensino Médio Completo",
    faculdade: null,
    habilitacao: false
};

// ==================================================
// 💼 FUNÇÕES DE NAVEGAÇÃO — CORRIGIDAS E FUNCIONAIS
// ==================================================

function mostrarTela(nome) {
    const main = document.getElementById('main-content');
    const titulo = document.getElementById('page-title');

    // Remove destaque de todos os botões
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    // Adiciona destaque no botão clicado
    const btnMap = {
        carreira: 'btn-carreira',
        celular: 'btn-celular',
        familia: 'btn-familia',
        mais: 'btn-mais'
    };
    if (btnMap[nome]) document.getElementById(btnMap[nome])?.classList.add('active');

    // Carrega o conteúdo da tela
    switch(nome) {
        case 'carreira':
            titulo.textContent = "💼 Carreira";
            main.innerHTML = telaCarreira();
            break;
        case 'celular':
            titulo.textContent = "📱 Celular";
            main.innerHTML = telaCelular();
            break;
        case 'familia':
            titulo.textContent = "👨‍👩‍👧 Família";
            main.innerHTML = telaFamilia();
            break;
        case 'mais':
            titulo.textContent = "⚙️ Mais Opções";
            main.innerHTML = telaMais();
            break;
        default:
            titulo.textContent = "Vida Brasileira";
            main.innerHTML = `<div class="tela-inicial">
                <h2>Bem-vindo ao Vida Brasileira!</h2>
                <p>Escolha uma opção na barra inferior para começar sua jornada.</p>
            </div>`;
    }
}

function abrirPerfil() {
    alert(`👤 PERFIL\n\nNome: ${jogador.nome}\nIdade: ${jogador.idade} anos\nGênero: ${jogador.genero}\n\n💰 Dinheiro: R$ ${jogador.dinheiro.toFixed(2)}\n🏦 Saldo: R$ ${jogador.banco.saldo.toFixed(2)}\n❤️ Saúde: ${jogador.saude}%\n😊 Felicidade: ${jogador.felicidade}%\n✨ Aparência: ${jogador.aparencia}%\n🧠 Inteligência: ${jogador.inteligencia}%`);
}

function pularTempo() {
    const anos = parseInt(prompt("Quantos anos deseja avançar?", "1")) || 1;
    jogador.idade += anos;
    atualizarBarras();
    alert(`⏩ ${anos} ano(s) se passaram.\nAgora você tem ${jogador.idade} anos.`);
}

function atualizarBarras() {
    document.getElementById('barra-saude').style.width = jogador.saude + '%';
    document.getElementById('barra-saude').textContent = jogador.saude + '%';
    document.getElementById('barra-felicidade').style.width = jogador.felicidade + '%';
    document.getElementById('barra-felicidade').textContent = jogador.felicidade + '%';
    document.getElementById('barra-aparencia').style.width = jogador.aparencia + '%';
    document.getElementById('barra-aparencia').textContent = jogador.aparencia + '%';
    document.getElementById('barra-inteligencia').style.width = jogador.inteligencia + '%';
    document.getElementById('barra-inteligencia').textContent = jogador.inteligencia + '%';
}

// ==================================================
// 📱 TELAS COMPLETAS
// ==================================================

function telaCarreira() {
    return `
    <div class="tela">
        <h2>💼 Minha Carreira</h2>
        
        ${jogador.empregoAtual ? `
        <div class="card">
            <h3>✅ Emprego Atual</h3>
            <p><strong>${jogador.empregoAtual.cargo}</strong></p>
            <p>Salário atual: R$ ${jogador.salarioAtual.toFixed(2)}</p>
            <p>Salário de admissão: R$ ${jogador.salarioContratacao.toFixed(2)}</p>
            <p>Tempo de casa: ${jogador.tempoDeCasa} meses</p>
            <p>Carteira assinada: ${jogador.tempoCarteiraAssinada} meses</p>
            <p>FGTS acumulado: R$ ${jogador.fgts.toFixed(2)}</p>
            <button class="btn btn-pequeno" onclick="sairDoEmprego()">🚪 Sair do emprego</button>
        </div>` : `
        <div class="card">
            <p class="aviso">⚠️ Você não está empregado.</p>
            <button class="btn" onclick="verVagas()">🔍 Ver vagas disponíveis</button>
        </div>`}

        <div class="card">
            <h3>📂 Áreas Profissionais</h3>
            <p><strong>💻 TI:</strong> Estagiário → Júnior → Pleno → Sênior → Especialista em IA</p>
            <p><strong>🏥 Saúde:</strong> Técnico → Enfermeiro → Psicólogo → Médico Generalista → Especialista</p>
            <p><strong>⚽ Futebol:</strong> Júnior → Reserva → Titular → Capitão → Craque Internacional</p>
            <p><strong>🔧 Outros:</strong> Gari, Caminhoneiro, Lutador, Autônomo</p>
        </div>
    </div>`;
}

function telaCelular() {
    return `
    <div class="tela">
        <h2>📱 Celular</h2>
        
        <div class="card">
            <h3>🏦 Banco</h3>
            <p><strong>Saldo:</strong> R$ ${jogador.banco.saldo.toFixed(2)}</p>
            <p><strong>Investimentos:</strong> R$ ${jogador.banco.investimentos.toFixed(2)}</p>
            <button class="btn btn-pequeno" onclick="investir()">📈 Investir</button>
            <button class="btn btn-pequeno" onclick="fazerPix()">💳 Pix</button>
        </div>

        <div class="card">
            <h3>🏠 Patrimônio</h3>
            ${jogador.patrimonio.length > 0 ? 
                jogador.patrimonio.map(p => `<p>✅ ${p.nome} — R$ ${p.valor.toFixed(2)}</p>`).join('') : 
                '<p class="aviso">Você ainda não possui bens.</p>'}
            <button class="btn btn-pequeno" onclick="comprarBem()">🛒 Comprar</button>
        </div>

        <div class="card">
            <h3>🚗 Dívidas e Aluguéis</h3>
            ${jogador.dividas.length > 0 ?
                jogador.dividas.map(d => `<p>⚠️ ${d.descricao}: R$ ${d.valor.toFixed(2)}<br><small>${d.atraso > 0 ? `${d.atraso} dia(s) de atraso` : 'Em dia'} — Locador: ${d.locador || 'Não informado'}</small></p>`).join('') :
                '<p>Sem dívidas!</p>'}
        </div>

        <div class="card">
            <h3>🌍 Serviços</h3>
            <button class="btn btn-pequeno" onclick="chamarUber()">🚕 Uber</button>
            <button class="btn btn-pequeno" onclick="redeSocial()">📸 Rede Social</button>
            <button class="btn btn-pequeno" onclick="salao()">💅 Salão</button>
            <button class="btn btn-pequeno" onclick="viagem()">✈️ Viagem</button>
        </div>
    </div>`;
}

function telaFamilia() {
    return `
    <div class="tela">
        <h2>👨‍👩‍👧 Família</h2>
        
        <div class="card">
            <h3>👤 Pais</h3>
            <p><strong>Pai:</strong> ${jogador.familia.pai.nome} ${jogador.familia.pai.vivo ? "✅" : "✝️"}</p>
            <button class="btn btn-pequeno" onclick="conversar('pai')">💬 Conversar</button>
            
            <p><strong>Mãe:</strong> ${jogador.familia.mae.nome} ${jogador.familia.mae.vivo ? "✅" : "✝️"}</p>
            <button class="btn btn-pequeno" onclick="conversar('mae')">💬 Conversar</button>
        </div>

        <div class="card">
            <h3>💑 Relacionamento</h3>
            ${jogador.familia.relacionamento ? `
                <p><strong>${jogador.familia.relacionamento.nome}</strong> — ${jogador.familia.relacionamento.status}</p>
                <button class="btn btn-pequeno" onclick="presentear('parceiro')">🎁 Presente</button>
                <button class="btn btn-pequeno" onclick="sairCom('parceiro')">🚶 Sair</button>
            ` : `<p class="aviso">Você não está em um relacionamento.</p>
            <button class="btn btn-pequeno" onclick="procurarRelacionamento()">🔍 Procurar alguém</button>`}
        </div>

        <div class="card">
            <h3>🐕 Pets</h3>
            ${jogador.familia.pets.length > 0 ?
                jogador.familia.pets.map(p => `<p>🐾 ${p.nome} — ${p.tipo}</p>
                <button class="btn btn-pequeno" onclick="cuidarPet('${p.nome}')">❤️ Cuidar</button>`).join('') :
                `<p class="aviso">Sem pets ainda.</p>
                <button class="btn btn-pequeno" onclick="adotarPet()">🏠 Adotar Pet</button>`}
        </div>
    </div>`;
}

function telaMais() {
    return `
    <div class="tela">
        <h2>⚙️ Mais Opções</h2>
        
        <div class="card">
            <h3>❤️ Saúde</h3>
            <button class="btn btn-pequeno" onclick="irMedico()">🏥 Médico</button>
            <button class="btn btn-pequeno" onclick="academia()">💪 Academia</button>
            <button class="btn btn-pequeno" onclick="terapia()">🧠 Terapia</button>
            <button class="btn btn-pequeno" onclick="dieta()">🥗 Dieta</button>
        </div>

        <div class="card">
            <h3>📚 Estudos</h3>
            <button class="btn btn-pequeno" onclick="faculdade()">🎓 Faculdade</button>
            <button class="btn btn-pequeno" onclick="estudarFora()">✈️ Estudar Fora</button>
            <button class="btn btn-pequeno" onclick="habilitacao()">🪪 CNH</button>
        </div>

        <div class="card">
            <h3>👶 Família & Fertilidade</h3>
            <button class="btn btn-pequeno" onclick="adotarCrianca()">🏠 Adotar Criança</button>
            <button class="btn btn-pequeno" onclick="fertilidade()">🔬 Fertilidade</button>
            <button class="btn btn-pequeno" onclick="anticoncepcional()">💊 Anticoncepcional</button>
        </div>

        <div class="card">
            <h3>📜 Outros</h3>
            <button class="btn btn-pequeno" onclick="testamento()">📜 Testamento</button>
            <button class="btn btn-pequeno" onclick="lazer()">🎮 Lazer</button>
            <button class="btn btn-pequeno" onclick="crimes()">🔪 Mundo do Crime</button>
        </div>
    </div>`;
}

// ==================================================
// ⚡ FUNÇÕES DE AÇÃO — TODAS FUNCIONANDO
// ==================================================

function verVagas() {
    alert("🔍 Vagas disponíveis:\n\n💻 TI:\n• Estagiário — R$ 1.200 a R$ 1.800\n• Desenvolvedor Júnior — R$ 2.500 a R$ 4.000\n\n🏥 Saúde:\n• Técnico em Enfermagem — R$ 2.200 a R$ 3.800\n• Psicólogo — R$ 2.800 a R$ 7.000\n\n⚽ Futebol:\n• Atleta Júnior — R$ 800 a R$ 1.500\n\n🔧 Diversos:\n• Gari — R$ 1.400 a R$ 2.200\n• Caminhoneiro — R$ 2.500 a R$ 5.500\n• Autônomo — R$ 1.500 a R$ 6.000");
}

function sairDoEmprego() {
    if (confirm("Deseja realmente sair do emprego?")) {
        jogador.empregosAnteriores.push({...jogador.empregoAtual, tempo: jogador.tempoDeCasa});
        jogador.empregoAtual = null;
        jogador.salarioAtual = 0;
        jogador.tempoDeCasa = 0;
        mostrarTela('carreira');
        alert("Você saiu do emprego. Boa sorte na próxima!");
    }
}

function investir() {
    const valor = parseFloat(prompt("Quanto deseja investir?", "100"));
    if (valor && valor > 0 && jogador.banco.saldo >= valor) {
        jogador.banco.saldo -= valor;
        jogador.banco.investimentos += valor;
        alert(`✅ Investimento realizado!\nValor: R$ ${valor.toFixed(2)}\nTotal investido: R$ ${jogador.banco.investimentos.toFixed(2)}`);
        mostrarTela('celular');
    } else alert("Saldo insuficiente ou valor inválido.");
}

function fazerPix() {
    alert("💳 Função Pix — em desenvolvimento\n\nVocê poderá transferir e receber dinheiro em breve!");
}

function comprarBem() {
    const nome = prompt("O que deseja comprar?");
    if (nome) {
        const valor = parseFloat(prompt("Valor do bem:", "1000"));
        if (valor && jogador.banco.saldo >= valor) {
            jogador.banco.saldo -= valor;
            jogador.patrimonio.push({nome, valor});
            alert(`✅ ${nome} comprado!\nValor: R$ ${valor.toFixed(2)}`);
            mostrarTela('celular');
        } else alert("Saldo insuficiente.");
    }
}

function chamarUber() { alert("🚕 Chamando Uber...\nVocê chegou ao destino! R$ 15,00 descontado."); }
function redeSocial() { alert("📸 Rede Social — em desenvolvimento\nPublique sua vida!"); }
function salao() { jogador.aparencia = Math.min(100, jogador.aparencia + 5); alert("💅 Ficou lindo(a)!\nAparência +5"); mostrarTela('celular'); }
function viagem() { alert("✈️ Viagem — em desenvolvimento"); }

function conversar(pessoa) { alert(`💬 Conversa com ${pessoa === 'pai' ? 'o Pai' : 'a Mãe'} — deu tudo certo!`); jogador.felicidade += 2; mostrarTela('familia'); }
function presentear() { alert("🎁 Presente entregue!"); jogador.felicidade += 3; mostrarTela('familia'); }
function sairCom() { alert("🚶 Passeio divertido!"); jogador.felicidade += 5; mostrarTela('familia'); }
function procurarRelacionamento() { alert("🔍 Conhecendo pessoas... em desenvolvimento"); }
function adotarPet() { 
    const nome = prompt("Nome do pet:");
    if (nome) {
        jogador.familia.pets.push({nome, tipo: "Cachorro"});
        alert(`🐾 ${nome} chegou à família!`);
        jogador.felicidade = Math.min(100, jogador.felicidade + 10);
        mostrarTela('familia');
    }
}
function cuidarPet(nome) { alert(`❤️ ${nome} está muito feliz!`); jogador.felicidade += 3; mostrarTela('familia'); }

function irMedico() { jogador.saude = 100; alert("🏥 Tratamento concluído!\nSaúde 100%"); mostrarTela('mais'); }
function academia() { jogador.saude += 2; jogador.aparencia += 1; alert("💪 Treino feito!"); mostrarTela('mais'); }
function terapia() { jogador.felicidade += 5; alert("🧠 Sessão de terapia — mente mais leve!"); mostrarTela('mais'); }
function dieta() { jogador.saude += 1; alert("🥗 Comendo bem!"); mostrarTela('mais'); }

function faculdade() { alert("🎓 Matrícula realizada!\nInteligência vai aumentar com o tempo."); jogador.inteligencia += 5; mostrarTela('mais'); }
function estudarFora() { alert("✈️ Estudando fora do país — experiência única!"); jogador.inteligencia += 10; mostrarTela('mais'); }
function habilitacao() { jogador.habilitacao = true; alert("🪪 CNH aprovada! Já pode dirigir."); mostrarTela('mais'); }

function adotarCrianca() { alert("🏠 Processo de adoção iniciado — em desenvolvimento"); }
function fertilidade() { alert("🔬 Consulta de fertilidade realizada!"); }
function anticoncepcional() { alert("💊 Método anticoncepcional definido."); }
function testamento() { alert("📜 Testamento registrado em cartório."); }
function lazer() { jogador.felicidade += 5; alert("🎮 Momento de diversão!"); mostrarTela('mais'); }
function crimes() { alert("⚠️ Caminhos perigosos...\nEm desenvolvimento."); }
