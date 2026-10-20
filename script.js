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
// 💼 BANCO DE DADOS — CARREIRAS E VAGAS
// ==================================================

const vagas = {
    ti: [
        {cargo:"Estagiário de TI", salarioMin:1200, salarioMax:1800, vinculo:"Temporário", experiencia:0},
        {cargo:"Desenvolvedor Júnior", salarioMin:2500, salarioMax:4000, vinculo:"CLT", experiencia:3},
        {cargo:"Desenvolvedor Pleno", salarioMin:5000, salarioMax:8500, vinculo:"CLT/Freelancer", experiencia:3},
        {cargo:"Desenvolvedor Sênior", salarioMin:9000, salarioMax:15000, vinculo:"CLT/Freelancer", experiencia:3},
        {cargo:"Analista de Dados", salarioMin:4500, salarioMax:9000, vinculo:"CLT/Concursado", experiencia:3},
        {cargo:"Especialista em IA", salarioMin:12000, salarioMax:25000, vinculo:"CLT/Freelancer", experiencia:3}
    ],
    saude: [
        {cargo:"Técnico em Enfermagem", salarioMin:2200, salarioMax:3800, vinculo:"CLT/Concursado", experiencia:3},
        {cargo:"Enfermeiro", salarioMin:3500, salarioMax:6500, vinculo:"CLT/Concursado", experiencia:3},
        {cargo:"Fisioterapeuta", salarioMin:3000, salarioMax:5500, vinculo:"CLT/Autônomo", experiencia:3},
        {cargo:"Psicólogo", salarioMin:2800, salarioMax:7000, vinculo:"CLT/Autônomo/Concursado", experiencia:3},
        {cargo:"Farmacêutico", salarioMin:3200, salarioMax:6000, vinculo:"CLT/Própria Farmácia", experiencia:3},
        {cargo:"Médico Generalista", salarioMin:8000, salarioMax:15000, vinculo:"CLT/Concursado/Plantão", experiencia:3},
        {cargo:"Médico Especialista", salarioMin:15000, salarioMax:30000, vinculo:"Autônomo/CLT", experiencia:3}
    ],
    engenharia: 
