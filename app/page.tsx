"use client";

import { useState } from "react";

type CandidateProposal = {
  pages: string;
  headline: string;
  points: string[];
  attention: string;
  pdf: string;
};

type Topic = {
  id: string;
  label: string;
  eyebrow: string;
  question: string;
  renan: CandidateProposal;
  flavio: CandidateProposal;
};

const topics: Topic[] = [
  {
    id: "fiscal",
    label: "Economia",
    eyebrow: "Contas públicas e impostos",
    question: "Como cada plano pretende abrir espaço fiscal e estimular crescimento?",
    renan: {
      pages: "págs. 9–10",
      headline: "Ajuste imediato por mudança constitucional",
      points: [
        "PEC de transição para substituir o atual arcabouço fiscal.",
        "Desindexação de benefícios do salário mínimo e revisão dos pisos de saúde e educação.",
        "Reforma do funcionalismo, fim de supersalários e redução de renúncias fiscais.",
      ],
      attention:
        "O plano estima grande economia até 2031, mas depende de PEC, maioria no Congresso e detalhamento dos efeitos distributivos.",
      pdf: "/docs/plano-governo-renan-santos-2026.pdf#page=9",
    },
    flavio: {
      pages: "págs. 30–33 e 70–72",
      headline: "Menos carga sobre consumo com dívida em queda",
      points: [
        "Revisão da reforma tributária para reduzir o IVA e preservar a não cumulatividade.",
        "Superávits primários, limite a gastos discricionários e estabilização da relação dívida/PIB.",
        "Redução de encargos de energia, exceções tributárias e crédito subsidiado pelo Tesouro.",
      ],
      attention:
        "O plano associa juros e impostos menores ao equilíbrio fiscal, mas não apresenta cronograma fiscal consolidado para todas as medidas.",
      pdf: "/docs/plano-governo-flavio-bolsonaro-2026.pdf#page=30",
    },
  },
  {
    id: "security",
    label: "Segurança",
    eyebrow: "Crime organizado e sistema penal",
    question: "Quais poderes, punições e tecnologias cada candidatura propõe?",
    renan: {
      pages: "págs. 11–13",
      headline: "Regime excepcional contra facções",
      points: [
        "Adoção do chamado Direito Penal do Inimigo e de uma Lei Antifacção.",
        "Estados de Defesa sucessivos, federalização de casos e uso de GLO em áreas dominadas.",
        "Superpresídios inspirados no CECOT, reconhecimento facial, drones e confisco ampliado.",
      ],
      attention:
        "As medidas levantam questões constitucionais sobre devido processo, presunção de inocência, direitos civis e controles sobre o uso da força.",
      pdf: "/docs/plano-governo-renan-santos-2026.pdf#page=11",
    },
    flavio: {
      pages: "págs. 13–16",
      headline: "Expansão prisional e repressão federal",
      points: [
        "Classificação de facções e milícias como organizações narcoterroristas.",
        "Cinco novos presídios federais, 500 mil vagas estaduais e restrição à progressão em crimes hediondos.",
        "Redução da maioridade penal, monitoramento facial e um milhão de novas câmeras.",
      ],
      attention:
        "O plano não consolida custos, salvaguardas de privacidade nem critérios de auditoria para reconhecimento facial e expansão prisional.",
      pdf: "/docs/plano-governo-flavio-bolsonaro-2026.pdf#page=13",
    },
  },
  {
    id: "social",
    label: "Proteção social",
    eyebrow: "Renda, trabalho e cuidado",
    question: "O benefício social é mantido, substituído ou conectado ao emprego?",
    renan: {
      pages: "págs. 20–22",
      headline: "Bolsa Família substituído por frentes de trabalho",
      points: [
        "Criação das Frentes Cidadãs para beneficiários em idade ativa.",
        "Participação remunerada em projetos de interesse público e comunitário.",
        "Reformas microeconômicas e trabalhistas voltadas ao ganho de produtividade.",
      ],
      attention:
        "Faltam regras operacionais sobre exceções, remuneração, transição, cuidado não remunerado e proteção de pessoas sem capacidade laboral.",
      pdf: "/docs/plano-governo-renan-santos-2026.pdf#page=20",
    },
    flavio: {
      pages: "págs. 17–21 e 42–45",
      headline: "Manutenção com trilhas de autonomia",
      points: [
        "Manutenção de programas sociais com qualificação e retorno mais rápido ao emprego.",
        "Voucher-creche, rede de cuidado e apoio domiciliar a idosos e pessoas com deficiência.",
        "Orientação financeira, apoio ao negócio próprio e proibição de apostas com recursos sociais.",
      ],
      attention:
        "O plano reúne muitas portas de entrada, mas não apresenta custo total, metas anuais ou integração detalhada entre União e municípios.",
      pdf: "/docs/plano-governo-flavio-bolsonaro-2026.pdf#page=17",
    },
  },
  {
    id: "health",
    label: "Saúde",
    eyebrow: "Fila, dados e atendimento",
    question: "Como os planos pretendem reduzir a espera no SUS?",
    renan: {
      pages: "págs. 25–26",
      headline: "Fila nacional orientada por risco",
      points: [
        "ENER: priorização por gravidade, risco de progressão, impacto funcional e vulnerabilidade.",
        "PRONTO: prontuário interoperável entre atenção primária, hospitais, laboratórios e farmácias.",
        "Telemedicina, apoio diagnóstico por IA e repasses municipais condicionados a desempenho.",
      ],
      attention:
        "A centralização de dados clínicos e genômicos exige governança, consentimento, segurança e fiscalização compatíveis com a LGPD.",
      pdf: "/docs/plano-governo-renan-santos-2026.pdf#page=25",
    },
    flavio: {
      pages: "págs. 25–26 e 37–38",
      headline: "Prontuário único e capacidade ociosa",
      points: [
        "Prontuário eletrônico ligado ao CPF e integrado ao Gov.br, redes pública e privada.",
        "IA para agendamento e prevenção, telessaúde e entrega domiciliar de medicamentos.",
        "Contratação de exames na rede privada ociosa e correção da tabela SUS.",
      ],
      attention:
        "A integração público-privada precisa de regras de custo, interoperabilidade, consentimento e responsabilização por incidentes de dados.",
      pdf: "/docs/plano-governo-flavio-bolsonaro-2026.pdf#page=25",
    },
  },
  {
    id: "education",
    label: "Educação",
    eyebrow: "Aprendizagem, disciplina e ensino superior",
    question: "Onde os planos convergem e onde se afastam na educação?",
    renan: {
      pages: "págs. 30–32",
      headline: "Centralização, disciplina e foco em STEM",
      points: [
        "Método fônico, código nacional de conduta e ranking oficial de disciplina escolar.",
        "Escolas civis-militares temporárias em áreas críticas e mais competências para a União.",
        "Fim das cotas e substituição da autonomia universitária por alinhamento estratégico.",
      ],
      attention:
        "O plano exige debate constitucional e evidências sobre autonomia universitária, ações afirmativas, punição escolar e critérios de financiamento.",
      pdf: "/docs/plano-governo-renan-santos-2026.pdf#page=30",
    },
    flavio: {
      pages: "págs. 34–37",
      headline: "Resultados, vouchers e formação técnica",
      points: [
        "Método fônico, metas de proficiência e repasses vinculados a resultados.",
        "Expansão de escolas cívico-militares e voucher quando faltar vaga na rede pública.",
        "Ensino técnico com empresas e empréstimo estudantil pago conforme a renda.",
      ],
      attention:
        "O plano não quantifica expansão, custo dos vouchers nem salvaguardas para evitar seleção de alunos e aumento de desigualdades territoriais.",
      pdf: "/docs/plano-governo-flavio-bolsonaro-2026.pdf#page=34",
    },
  },
  {
    id: "infrastructure",
    label: "Infraestrutura",
    eyebrow: "Obras, energia e território",
    question: "Quais projetos estruturantes aparecem em cada programa?",
    renan: {
      pages: "págs. 23–24 e 34–43",
      headline: "Investimento de 4% do PIB e grandes corredores",
      points: [
        "Meta de 40 mil km de ferrovias, expansão de portos e conectividade aérea no Norte.",
        "Capital privado por concessões e PPPs, após ajuste fiscal e reforma administrativa.",
        "Angra 3, transmissão elétrica, hidrogênio verde e zonas econômicas especiais.",
      ],
      attention:
        "O portfólio é ambicioso e depende de priorização, estudos de viabilidade, licenciamento, capacidade técnica e fontes plurianuais de financiamento.",
      pdf: "/docs/plano-governo-renan-santos-2026.pdf#page=23",
    },
    flavio: {
      pages: "págs. 49–60",
      headline: "Concessões, corredores logísticos e integração regional",
      points: [
        "Corredores logísticos, ferrovias, mobilidade urbana e segurança hídrica.",
        "Expansão de armazenamento agrícola, transmissão elétrica e minerais críticos.",
        "Fiscalização ambiental por satélite, bioeconomia e renda vinculada à floresta preservada.",
      ],
      attention:
        "Faltam carteira priorizada, custo por projeto e critérios para conciliar velocidade de licenciamento, povos tradicionais e proteção ambiental.",
      pdf: "/docs/plano-governo-flavio-bolsonaro-2026.pdf#page=49",
    },
  },
  {
    id: "foreign",
    label: "Política externa",
    eyebrow: "Alianças, comércio e soberania",
    question: "Que lugar cada programa imagina para o Brasil no mundo?",
    renan: {
      pages: "págs. 44–47",
      headline: "Liderança regional e autonomia estratégica",
      points: [
        "Brasil como árbitro do Sul Global e liderança multilateral da América do Sul.",
        "Cesta de moedas regionais, real como reserva complementar e pragmatismo no BRICS+.",
        "Integração lusófona, indústria de defesa e domínio completo do ciclo nuclear.",
      ],
      attention:
        "Desdolarização, dissuasão nuclear e liderança regional têm alta complexidade diplomática, financeira e de governança internacional.",
      pdf: "/docs/plano-governo-renan-santos-2026.pdf#page=44",
    },
    flavio: {
      pages: "págs. 61–64",
      headline: "OCDE, abertura comercial e cadeias globais",
      points: [
        "Retomada da adesão à OCDE e redução gradual do IOF sobre câmbio.",
        "Abertura comercial com apoio à produtividade e inserção em cadeias globais.",
        "Relações pragmáticas com EUA, China, União Europeia, Israel e mercados asiáticos.",
      ],
      attention:
        "O plano precisa detalhar ritmo de abertura, proteção de setores sensíveis e estratégia para conflitos entre parceiros comerciais.",
      pdf: "/docs/plano-governo-flavio-bolsonaro-2026.pdf#page=61",
    },
  },
  {
    id: "institutions",
    label: "Instituições",
    eyebrow: "Federação, Justiça e gestão pública",
    question: "Que mudanças estruturais cada candidatura propõe para o Estado?",
    renan: {
      pages: "págs. 14–19",
      headline: "Consolidação municipal e metas políticas",
      points: [
        "Fusão de municípios considerados fiscalmente inviáveis e revisão do pacto federativo.",
        "Lei de Responsabilidade Gerencial com indicadores de saúde, educação, saneamento e emprego.",
        "Condicionamento de recursos partidários e elegibilidade ao cumprimento de metas.",
      ],
      attention:
        "As propostas alteram representação política e autonomia federativa; critérios, transição e compatibilidade constitucional precisam ser definidos.",
      pdf: "/docs/plano-governo-renan-santos-2026.pdf#page=14",
    },
    flavio: {
      pages: "págs. 65–72",
      headline: "Reforma do STF e gestão profissional",
      points: [
        "Limitação de decisões monocráticas e revisão de competências criminais originárias do STF.",
        "Fortalecimento da Lei das Estatais e recrutamento técnico para cargos de direção.",
        "Reforma política, avaliação de políticas públicas e retomada seletiva de desestatizações.",
      ],
      attention:
        "Mudanças no Judiciário e no equilíbrio entre Poderes exigem desenho constitucional preciso, freios recíprocos e ampla negociação legislativa.",
      pdf: "/docs/plano-governo-flavio-bolsonaro-2026.pdf#page=65",
    },
  },
];

const officialPlansUrl =
  "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/planos-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026";

function ProposalCard({
  candidate,
  accent,
  proposal,
}: {
  candidate: string;
  accent: "yellow" | "blue";
  proposal: CandidateProposal;
}) {
  return (
    <article className={`proposal-card proposal-card--${accent}`}>
      <div className="proposal-card__topline">
        <span>{candidate}</span>
        <span>{proposal.pages}</span>
      </div>
      <h3>{proposal.headline}</h3>
      <ul>
        {proposal.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="attention-box">
        <span>Ponto a esclarecer</span>
        <p>{proposal.attention}</p>
      </div>
      <a className="text-link" href={proposal.pdf} target="_blank" rel="noreferrer">
        Conferir no plano oficial <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function Home() {
  const [activeTopic, setActiveTopic] = useState(topics[0].id);
  const selectedTopic = topics.find((topic) => topic.id === activeTopic) ?? topics[0];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Voto Aberto 2026 — início">
          <span className="brand-mark" aria-hidden="true">VA</span>
          <span>Voto Aberto <strong>2026</strong></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#comparador">Comparador</a>
          <a href="#trajetorias">Trajetórias</a>
          <a href="#metodologia">Metodologia</a>
        </nav>
        <a className="header-source" href={officialPlansUrl} target="_blank" rel="noreferrer">
          Fonte TSE <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> ELEIÇÕES PRESIDENCIAIS · 1º TURNO</div>
          <h1>Dois projetos.<br /><em>Uma escolha informada.</em></h1>
          <p className="hero-lead">
            Uma leitura direta dos planos registrados no TSE — tema por tema,
            com página, fonte e perguntas que ainda precisam de resposta.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#comparador">Começar comparação</a>
            <a className="button button--ghost" href="#metodologia">Como analisamos</a>
          </div>
          <div className="trust-row" aria-label="Compromissos editoriais">
            <span>Sem ranking</span>
            <span>Sem indicação de voto</span>
            <span>Fontes abertas</span>
          </div>
        </div>

        <div className="hero-board" aria-label="Candidaturas comparadas">
          <div className="election-date">
            <span>1º turno</span>
            <strong>04 OUT</strong>
          </div>
          <div className="candidate-tile candidate-tile--renan">
            <div className="candidate-number">14</div>
            <div>
              <span>MISSÃO</span>
              <h2>Renan<br />Santos</h2>
              <p>Vice: Aroldo Medina</p>
            </div>
          </div>
          <div className="versus" aria-hidden="true"><span>comparar</span></div>
          <div className="candidate-tile candidate-tile--flavio">
            <div className="candidate-number">22</div>
            <div>
              <span>PL</span>
              <h2>Flávio<br />Bolsonaro</h2>
              <p>Vice: Alfredo Gaspar</p>
            </div>
          </div>
          <div className="board-note">Recorte editorial entre duas candidaturas registradas</div>
        </div>
      </section>

      <section className="fact-strip" aria-label="Informações da análise">
        <div><strong>127</strong><span>páginas analisadas</span></div>
        <div><strong>8</strong><span>temas comparáveis</span></div>
        <div><strong>30.09</strong><span>última revisão</span></div>
        <div><strong>TSE</strong><span>fonte eleitoral principal</span></div>
      </section>

      <section className="poll-section" aria-labelledby="poll-title">
        <div className="poll-heading">
          <div>
            <span className="section-number">PESQUISA</span>
            <p className="section-kicker">INTENÇÃO DE VOTO · 1º TURNO ESTIMULADO</p>
          </div>
          <div>
            <h2 id="poll-title">O que mostram as pesquisas<br />nacionais mais recentes.</h2>
            <p>Não são votos apurados. Cada painel representa uma pesquisa, com período de campo, amostra e metodologia próprios.</p>
          </div>
        </div>

        <div className="poll-panels">
          <div className="poll-panel">
          <div className="poll-meta">
            <div><span>Instituto</span><strong>Quaest</strong></div>
            <div><span>Campo</span><strong>24–27 set. 2026</strong></div>
            <div><span>Amostra</span><strong>2.004 eleitores</strong></div>
            <div><span>Margem</span><strong>± 2 p.p.</strong></div>
            <div><span>Registro TSE</span><strong>BR-06520/2026</strong></div>
          </div>

          <div className="poll-results">
            <article className="poll-result poll-result--flavio">
              <div className="poll-result__label">
                <div><span>22 · PL</span><h3>Flávio Bolsonaro</h3></div>
                <strong>34<small>%</small></strong>
              </div>
              <div className="poll-track" aria-label="Flávio Bolsonaro: 34 por cento">
                <span style={{ width: "34%" }} />
              </div>
            </article>

            <article className="poll-result poll-result--renan">
              <div className="poll-result__label">
                <div><span>14 · MISSÃO</span><h3>Renan Santos</h3></div>
                <strong>3<small>%</small></strong>
              </div>
              <div className="poll-track" aria-label="Renan Santos: 3 por cento">
                <span style={{ width: "3%" }} />
              </div>
            </article>
          </div>

          <div className="poll-context">
            <p><strong>Contexto do cenário:</strong> Lula 39% · Augusto Cury 4% · Ronaldo Caiado 4% · Romeu Zema 1% · demais candidatos 0% · brancos, nulos ou não vota 10% · indecisos 5%.</p>
            <p>Como arredondamentos podem ocorrer, a soma publicada pode não fechar exatamente em 100%.</p>
            <a className="text-link" href="https://www.redetv.uol.com.br/amp/redetvi-noticias/noticia/politica/quaest-lula-oscila-para-cima-e-abre-vantagem-fora-da-margem-de-erro" target="_blank" rel="noreferrer">
              Fonte Quaest <span aria-hidden="true">↗</span>
            </a>
          </div>
          </div>

          <div className="poll-panel">
            <div className="poll-meta">
              <div><span>Instituto</span><strong>Datafolha</strong></div>
              <div><span>Campo</span><strong>15–17 set. 2026</strong></div>
              <div><span>Amostra</span><strong>2.001 eleitores</strong></div>
              <div><span>Margem</span><strong>± 2 p.p.</strong></div>
              <div><span>Registro TSE</span><strong>BR-04029/2026</strong></div>
            </div>

            <div className="poll-results">
              <article className="poll-result poll-result--flavio">
                <div className="poll-result__label">
                  <div><span>22 · PL</span><h3>Flávio Bolsonaro</h3></div>
                  <strong>36<small>%</small></strong>
                </div>
                <div className="poll-track" aria-label="Flávio Bolsonaro: 36 por cento">
                  <span style={{ width: "36%" }} />
                </div>
              </article>

              <article className="poll-result poll-result--renan">
                <div className="poll-result__label">
                  <div><span>14 · MISSÃO</span><h3>Renan Santos</h3></div>
                  <strong>3<small>%</small></strong>
                </div>
                <div className="poll-track" aria-label="Renan Santos: 3 por cento">
                  <span style={{ width: "3%" }} />
                </div>
              </article>
            </div>

            <div className="poll-context">
              <p><strong>Contexto do cenário:</strong> Lula 39% · Augusto Cury 6% · Ronaldo Caiado 4% · Romeu Zema 2% · Samara 1% · Rui Costa Pimenta 1% · demais abaixo de 1% · brancos ou nulos 6% · indecisos 3%.</p>
              <p>Entrevistas presenciais em 125 municípios, com eleitores de 16 anos ou mais; nível de confiança de 95%.</p>
              <a className="text-link" href="https://datafolha.folha.uol.com.br/eleicoes/2026/09/lula-pt-e-flavio-bolsonaro-pl-empatam-no-1o-e-2o-turnos.shtml" target="_blank" rel="noreferrer">
                Fonte Datafolha <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-section" id="comparador">
        <div className="section-intro">
          <div>
            <span className="section-number">01</span>
            <p className="section-kicker">COMPARADOR DE PROPOSTAS</p>
          </div>
          <div>
            <h2>Escolha um assunto.<br />Leia os planos lado a lado.</h2>
            <p>Resumos editoriais fiéis ao texto. O link de cada coluna abre a página correspondente no documento original.</p>
          </div>
        </div>

        <div className="topic-tabs" role="tablist" aria-label="Temas do comparador">
          {topics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              role="tab"
              aria-selected={activeTopic === topic.id}
              className={activeTopic === topic.id ? "active" : ""}
              onClick={() => setActiveTopic(topic.id)}
            >
              {topic.label}
            </button>
          ))}
        </div>

        <div className="topic-heading" aria-live="polite">
          <span>{selectedTopic.eyebrow}</span>
          <h2>{selectedTopic.question}</h2>
        </div>

        <div className="proposal-grid">
          <ProposalCard candidate="RENAN SANTOS · 14" accent="yellow" proposal={selectedTopic.renan} />
          <ProposalCard candidate="FLÁVIO BOLSONARO · 22" accent="blue" proposal={selectedTopic.flavio} />
        </div>
      </section>

      <section className="contrast-section">
        <div className="section-intro section-intro--light">
          <div>
            <span className="section-number">02</span>
            <p className="section-kicker">LEITURA TRANSVERSAL</p>
          </div>
          <div>
            <h2>Onde os programas<br />mais se aproximam — e se afastam.</h2>
          </div>
        </div>
        <div className="contrast-grid">
          <article>
            <span className="contrast-index">A</span>
            <h3>Convergência digital</h3>
            <p>Ambos propõem prontuário nacional, telemedicina e uso de inteligência artificial na gestão pública.</p>
          </article>
          <article>
            <span className="contrast-index">B</span>
            <h3>Ruptura social</h3>
            <p>Renan propõe substituir o Bolsa Família por frentes de trabalho; Flávio declara manutenção dos programas com trilhas de autonomia.</p>
          </article>
          <article>
            <span className="contrast-index">C</span>
            <h3>Segurança de alta intensidade</h3>
            <p>Os dois endurecem penas e ampliam vigilância. Renan acrescenta regimes jurídicos excepcionais; Flávio prioriza expansão carcerária.</p>
          </article>
          <article>
            <span className="contrast-index">D</span>
            <h3>Duas projeções externas</h3>
            <p>Renan enfatiza liderança regional e autonomia monetária; Flávio prioriza OCDE, comércio e cadeias globais.</p>
          </article>
        </div>
      </section>

      <section className="profiles-section" id="trajetorias">
        <div className="section-intro">
          <div>
            <span className="section-number">03</span>
            <p className="section-kicker">TRAJETÓRIA PÚBLICA</p>
          </div>
          <div>
            <h2>Experiência também<br />faz parte da comparação.</h2>
            <p>Dados biográficos resumidos de fontes públicas. Eles contextualizam — não substituem — a leitura das propostas.</p>
          </div>
        </div>

        <div className="profile-grid">
          <article className="profile-card profile-card--renan">
            <div className="profile-monogram">RS</div>
            <div className="profile-content">
              <span>RENAN SANTOS · MISSÃO</span>
              <h3>Ativismo e criação partidária</h3>
              <p>Empresário, cofundador do MBL e primeiro presidente do Partido Missão. A candidatura presidencial de 2026 é sua estreia em uma eleição.</p>
              <a className="text-link" href="https://agenciabrasil.ebc.com.br/politica/noticia/2026-08/defensor-do-impeachment-em-2016-renan-santos-e-candidato-do-missao" target="_blank" rel="noreferrer">Fonte: Agência Brasil <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article className="profile-card profile-card--flavio">
            <div className="profile-monogram">FB</div>
            <div className="profile-content">
              <span>FLÁVIO BOLSONARO · PL</span>
              <h3>Mandatos legislativos</h3>
              <p>Senador pelo Rio de Janeiro desde 2019, após quatro mandatos como deputado estadual. No Senado, integra comissões como Segurança Pública e Transparência.</p>
              <a className="text-link" href="https://www25.senado.leg.br/web/senadores/senador/-/perfil/5894" target="_blank" rel="noreferrer">Fonte: Senado Federal <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>

        <div className="integrity-note">
          <div className="integrity-icon" aria-hidden="true">!</div>
          <div>
            <span>Sobre “escândalos” e processos</span>
            <h3>Rótulo não é evidência.</h3>
            <p>Esta versão não transforma alegações em fatos. Um futuro registro processual só deve entrar com número do caso, tribunal, papel da pessoa, situação atual e distinção explícita entre investigação, denúncia, condenação, absolvição ou arquivamento.</p>
          </div>
        </div>
      </section>

      <section className="method-section" id="metodologia">
        <div className="method-copy">
          <span className="section-number">04</span>
          <p className="section-kicker">MÉTODO E LIMITES</p>
          <h2>Transparência começa<br />pela forma de comparar.</h2>
          <p>Este é um recorte informativo, independente e sem vínculo com candidaturas, partidos ou com o TSE.</p>
          <a className="button button--light" href={officialPlansUrl} target="_blank" rel="noreferrer">Ver todos os planos no TSE</a>
        </div>
        <div className="method-list">
          <div><span>01</span><p><strong>Mesma régua</strong>Os dois documentos são lidos pelas mesmas oito categorias.</p></div>
          <div><span>02</span><p><strong>Fonte antes da síntese</strong>Cada resumo aponta para as páginas do plano usado.</p></div>
          <div><span>03</span><p><strong>Promessa não é resultado</strong>O site descreve o que foi proposto, sem afirmar que é viável ou será cumprido.</p></div>
          <div><span>04</span><p><strong>Sem pontuação oculta</strong>Não há nota, ranking, perfil ideológico calculado nem recomendação de voto.</p></div>
          <div><span>05</span><p><strong>Direito de correção</strong>Datas e status devem ser revistos quando as fontes oficiais mudarem.</p></div>
        </div>
      </section>

      <section className="sources-section">
        <div>
          <p className="section-kicker">FONTES PRIMÁRIAS</p>
          <h2>Leia por conta própria.</h2>
        </div>
        <div className="source-links">
          <a href="/docs/plano-governo-renan-santos-2026.pdf" target="_blank" rel="noreferrer">
            <span>PDF · 51 páginas</span><strong>Plano de Renan Santos</strong><em>Documento registrado no TSE ↗</em>
          </a>
          <a href="/docs/plano-governo-flavio-bolsonaro-2026.pdf" target="_blank" rel="noreferrer">
            <span>PDF · 76 páginas</span><strong>Plano de Flávio Bolsonaro</strong><em>Documento registrado no TSE ↗</em>
          </a>
          <a href={officialPlansUrl} target="_blank" rel="noreferrer">
            <span>PORTAL OFICIAL</span><strong>Todos os planos de 2026</strong><em>Tribunal Superior Eleitoral ↗</em>
          </a>
        </div>
      </section>

      <footer>
        <div className="brand brand--footer"><span className="brand-mark">VA</span><span>Voto Aberto <strong>2026</strong></span></div>
        <p>Informação para decidir. Nenhuma recomendação de voto.</p>
        <p>Atualizado em 30 de setembro de 2026.</p>
      </footer>
    </main>
  );
}
