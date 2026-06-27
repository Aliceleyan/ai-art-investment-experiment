const artworks = [
  {
    id: "A01",
    artist: "Mara Ellison",
    title: "Chromatic Index",
    year: "2021",
    medium: "Acrylic and pigment on linen",
    size: "90 × 70 cm",
    image: "assets/artwork-01.svg",
    meta: "Mara Ellison, Chromatic Index, 2021, acrylic and pigment on linen, 90 × 70 cm.",
    raw: {
      "Artist biography":
        "Mara Ellison is a London-based emerging painter whose work has appeared in two group exhibitions and one small gallery solo show. Her practice focuses on layered colour fields and coded urban maps.",
      "Exhibition history":
        "Group exhibitions at Northbank Project Space and Alder Gallery. Solo presentation at Finch Lane Projects in 2023.",
      "Gallery representation":
        "Represented by a mid-tier contemporary gallery with growing online collector visibility.",
      "Auction records":
        "Only three public auction records are available. Results range from £14,800 to £22,500, with one lot bought in.",
      "Comparable sales":
        "Recent works of similar scale by the artist have been offered between £18,000 and £24,000 in primary and secondary-market contexts.",
      Provenance:
        "Acquired from the artist's gallery by a private collector in 2022. No complex ownership history is reported.",
      "Condition notes":
        "Overall good condition, with minor surface abrasions visible under raking light.",
      "Signals and commentary":
        "The artist has received several critic mentions and increased social visibility, but there is limited museum acquisition evidence.",
      "Market trend notes":
        "Short-term demand has increased, particularly among younger collectors, although sales frequency remains low.",
      "Risk information":
        "Potential risks include limited auction history, uncertain resale liquidity and possible short-term attention effects."
    },
    ai: {
      lead:
        "This case presents moderate upside signals but limited resale evidence. AI filtering highlights market liquidity and artist reputation as the most decision-relevant areas.",
      modules: [
        ["Market knowledge", "high", "Comparable sales suggest a reference range between £18,000 and £24,000. However, sales frequency is low, indicating limited secondary-market liquidity."],
        ["Artist reputation knowledge", "medium", "The artist has growing gallery visibility and critic attention, but institutional validation remains early-stage."],
        ["Object-specific knowledge", "medium", "The size and medium are commercially favourable. Minor surface abrasions should be checked before purchase."],
        ["Risk knowledge", "high", "Key risks are limited auction history, one bought-in lot and possible overvaluation from recent short-term attention."],
        ["Social and expert signal knowledge", "medium", "Gallery representation and critic mentions are positive signals, but independent expert consensus is still limited."],
        ["Aesthetic and cultural knowledge", "low", "The work is stylistically coherent with the artist's mapped colour-field practice, but cultural significance remains interpretive."]
      ]
    }
  },
  {
    id: "A02",
    artist: "Theo Ramirez",
    title: "Quiet Ledger",
    year: "2017",
    medium: "Oil, wax and graphite on panel",
    size: "65 × 85 cm",
    image: "assets/artwork-02.svg",
    meta: "Theo Ramirez, Quiet Ledger, 2017, oil, wax and graphite on panel, 65 × 85 cm.",
    raw: {
      "Artist biography":
        "Theo Ramirez is a mid-career artist known for textured panel works exploring memory and industrial labour.",
      "Exhibition history":
        "Five gallery solo exhibitions since 2014 and inclusion in two regional museum group shows.",
      "Gallery representation":
        "Stable representation by a respected regional gallery, with periodic participation in international art fairs.",
      "Auction records":
        "Nine auction records since 2018. Most lots sold within estimate, with a narrow price range from £28,000 to £36,000.",
      "Comparable sales":
        "Comparable panel works from 2016-2019 have sold between £30,000 and £38,000.",
      Provenance:
        "Purchased from the artist's gallery by the current owner in 2018. Gallery invoice and exhibition documentation available.",
      "Condition notes":
        "Excellent condition. No visible structural issues or restoration history.",
      "Signals and commentary":
        "Several specialist critics identify Ramirez as a consistent mid-career painter, though broader international attention remains moderate.",
      "Market trend notes":
        "Prices show gradual growth rather than rapid speculation.",
      "Risk information":
        "Main risk is moderate liquidity rather than authenticity or condition."
    },
    ai: {
      lead:
        "This case has stronger evidence stability than short-term excitement. AI filtering prioritises comparables, condition and steady reputation signals.",
      modules: [
        ["Market knowledge", "high", "Comparable sales cluster around £30,000-£38,000, suggesting a relatively stable reference range."],
        ["Artist reputation knowledge", "medium", "The artist has consistent gallery and regional museum visibility, but limited international institutional presence."],
        ["Object-specific knowledge", "high", "The work belongs to a recognised period, has favourable condition notes and includes supporting gallery documentation."],
        ["Risk knowledge", "medium", "Risk appears moderate. Liquidity is not high, but price volatility and authenticity concerns are limited."],
        ["Social and expert signal knowledge", "medium", "Specialist critic support and gallery consistency are positive, while broader collector excitement is restrained."],
        ["Aesthetic and cultural knowledge", "low", "The work is representative of Ramirez's textured memory-led practice, but its symbolic value requires human interpretation."]
      ]
    }
  },
  {
    id: "A03",
    artist: "Lina Okafor",
    title: "Archive of Rain",
    year: "2012",
    medium: "Mixed media textile and ink",
    size: "120 × 95 cm",
    image: "assets/artwork-03.svg",
    meta: "Lina Okafor, Archive of Rain, 2012, mixed media textile and ink, 120 × 95 cm.",
    raw: {
      "Artist biography":
        "Lina Okafor is an established artist whose work addresses migration, textile memory and postcolonial archives.",
      "Exhibition history":
        "Included in major museum group exhibitions and a touring institutional survey in 2020.",
      "Gallery representation":
        "Represented by an internationally recognised gallery. Primary-market access is limited.",
      "Auction records":
        "Auction records are strong but infrequent. Similar textile works have sold between £70,000 and £95,000.",
      "Comparable sales":
        "Comparable works from 2010-2014 are rare. The strongest comparable sold for £92,000 in 2024.",
      Provenance:
        "Private collection since 2013; acquired through the artist's gallery. Exhibition loan record available.",
      "Condition notes":
        "Good condition, but textile works require conservation-sensitive handling and display.",
      "Signals and commentary":
        "Strong museum recognition and specialist curatorial attention. Collector base is smaller but committed.",
      "Market trend notes":
        "Institutional interest has increased, but works enter the secondary market infrequently.",
      "Risk information":
        "Low frequency of resale makes liquidity uncertain despite strong cultural and institutional signals."
    },
    ai: {
      lead:
        "This case shows strong institutional and cultural signals but low market liquidity. AI filtering separates value evidence from resale constraints.",
      modules: [
        ["Market knowledge", "medium", "Comparable sales are strong but sparse. The reference range is informative but based on limited transaction frequency."],
        ["Artist reputation knowledge", "high", "The artist has strong institutional recognition and international gallery representation."],
        ["Object-specific knowledge", "medium", "The work is from a valued period and has supporting provenance. Textile conservation requirements should be considered."],
        ["Risk knowledge", "high", "The main risk is liquidity: strong reputation does not guarantee easy resale because comparable works appear infrequently."],
        ["Social and expert signal knowledge", "high", "Museum exhibitions, curatorial attention and gallery representation provide strong expert and institutional signals."],
        ["Aesthetic and cultural knowledge", "medium", "Cultural significance appears high, but the depth of symbolic value depends on specialist interpretation."]
      ]
    }
  },
  {
    id: "A04",
    artist: "Elias Venn",
    title: "Signal Bloom",
    year: "2024",
    medium: "Digital print, resin and aluminium",
    size: "100 × 100 cm",
    image: "assets/artwork-04.svg",
    meta: "Elias Venn, Signal Bloom, 2024, digital print, resin and aluminium, 100 × 100 cm.",
    raw: {
      "Artist biography":
        "Elias Venn is a rapidly visible artist associated with post-digital abstraction and platform-based collector communities.",
      "Exhibition history":
        "Recent inclusion in two commercial group shows and a digital art fair presentation.",
      "Gallery representation":
        "No long-term gallery representation. Sales are mainly handled through limited drops and online intermediaries.",
      "Auction records":
        "Four auction appearances in the past year. Prices increased from £9,000 to £31,000 within ten months.",
      "Comparable sales":
        "Comparable works are difficult to verify because several sales occurred through private online channels.",
      Provenance:
        "Direct purchase from a limited online release. Certificate supplied by the artist's studio.",
      "Condition notes":
        "New work in excellent physical condition, but long-term conservation of resin and digital print materials is uncertain.",
      "Signals and commentary":
        "High online attention and collector discussion, but limited independent critical or institutional recognition.",
      "Market trend notes":
        "Rapid price acceleration suggests momentum but may also indicate speculative hype.",
      "Risk information":
        "Key risks include short market history, weak institutional validation, uncertain resale depth and media conservation uncertainty."
    },
    ai: {
      lead:
        "This case is momentum-heavy and evidence-light. AI filtering highlights hype risk, verification limits and the difference between social visibility and durable reputation.",
      modules: [
        ["Market knowledge", "high", "Recent prices rose quickly, but comparable sales are difficult to verify and the market history is very short."],
        ["Artist reputation knowledge", "medium", "The artist has high online visibility but limited gallery stability and little institutional recognition."],
        ["Object-specific knowledge", "medium", "The work is new and in good condition, but material longevity and certificate verification deserve attention."],
        ["Risk knowledge", "high", "Major risks include hype-driven overvaluation, uncertain resale depth and weak independent validation."],
        ["Social and expert signal knowledge", "medium", "Collector attention is strong online, but critical and institutional signals remain limited."],
        ["Aesthetic and cultural knowledge", "low", "The work aligns with post-digital abstraction, but cultural significance is not yet established."]
      ]
    }
  }
];

const scales = [
  ["risk", "How risky do you think this artwork is as an investment? / 您认为这件艺术品作为投资的风险有多高？", "Very low risk / 风险很低", "Very high risk / 风险很高"],
  ["intention", "How likely would you be to invest in this artwork? / 您投资这件艺术品的可能性有多高？", "Very unlikely / 非常不可能", "Very likely / 非常可能"],
  ["confidence", "How confident are you in your investment judgment? / 您对自己的投资判断有多大信心？", "Not confident at all / 完全没有信心", "Very confident / 非常有信心"],
  ["knowledgeQuality", "How would you rate the quality of the information or knowledge provided? / 您如何评价所提供信息或知识的质量？", "Very low quality / 质量很低", "Very high quality / 质量很高"],
  ["informationOverload", "To what extent did you feel overloaded by the amount or complexity of information? / 您在多大程度上感到信息数量或复杂度造成负担？", "Not overloaded / 没有负担", "Very overloaded / 负担很重"]
];

const trustScale = ["trustAI", "To what extent do you trust the AI-filtered knowledge presented in this case? / 您在多大程度上信任本案例中的 AI 过滤知识？", "Do not trust at all / 完全不信任", "Trust completely / 完全信任"];

const aiSuitabilityScales = [
  ["aiMarket", "Suitability of AI filtering: market records and comparable sales / AI 过滤市场记录和可比销售的适配度"],
  ["aiArtist", "Suitability of AI filtering: artist background and reputation / AI 过滤艺术家背景和声誉的适配度"],
  ["aiObject", "Suitability of AI filtering: artwork-specific information / AI 过滤作品自身信息的适配度"],
  ["aiRisk", "Suitability of AI filtering: risk signals / AI 过滤风险信号的适配度"],
  ["aiExpert", "Suitability of AI filtering: expert and institutional signals / AI 过滤专家与机构信号的适配度"],
  ["aiAesthetic", "Suitability of AI filtering: aesthetic and cultural value / AI 过滤审美与文化价值的适配度"]
];

const knowledgeTypes = [
  {
    value: "market",
    label: "Market knowledge / 市场知识",
    hint: "Information about prices, transactions and market demand, such as auction records, price trends, comparable sales, liquidity and collector demand. / 关于价格、交易和市场需求的信息，例如拍卖记录、价格趋势、可比销售、流动性和藏家需求。"
  },
  {
    value: "artist",
    label: "Artist reputation knowledge / 艺术家声誉知识",
    hint: "Information about the artist's career position and reputation, such as career stage, gallery representation, exhibitions and museum collections. / 关于艺术家职业位置和声誉的信息，例如职业阶段、画廊代理、展览经历和博物馆收藏。"
  },
  {
    value: "object",
    label: "Object-specific knowledge / 作品自身知识",
    hint: "Information about the specific artwork itself, such as medium, size, year, condition, provenance, rarity and authenticity risk. / 关于该件作品本身的信息，例如媒介、尺寸、年份、品相、来源、稀缺性和真伪风险。"
  },
  {
    value: "risk",
    label: "Risk knowledge / 风险知识",
    hint: "Information that helps assess investment uncertainty, such as price volatility, liquidity risk, overvaluation risk, authenticity risk and trend risk. / 帮助判断投资不确定性的信息，例如价格波动、流动性风险、高估风险、真伪风险和趋势风险。"
  },
  {
    value: "expert",
    label: "Social and expert signal knowledge / 社会与专家信号知识",
    hint: "Signals from experts, institutions and social attention, such as expert opinions, critic reviews, gallery endorsement, institutional backing and social visibility. / 来自专家、机构和社会关注度的信号，例如专家意见、评论文章、画廊背书、机构认可和社交可见度。"
  },
  {
    value: "aesthetic",
    label: "Aesthetic and cultural knowledge / 审美与文化知识",
    hint: "Interpretive knowledge about artistic and cultural meaning, such as style, aesthetic quality, cultural significance, symbolic value and art-historical relevance. / 关于艺术与文化意义的解释性知识，例如风格、审美质量、文化意义、象征价值和艺术史相关性。"
  }
];

const rawKnowledgeLabels = {
  "Artist biography": {
    label: "Artist biography / 艺术家简介",
    hint: "Basic background about the artist and their practice. / 关于艺术家及其创作实践的基本背景。"
  },
  "Exhibition history": {
    label: "Exhibition history / 展览历史",
    hint: "Where and how the artist or artwork has been exhibited. / 艺术家或作品曾在哪些机构、画廊或项目中展出。"
  },
  "Gallery representation": {
    label: "Gallery representation / 画廊代理",
    hint: "Whether a gallery represents or supports the artist's market. / 是否有画廊代理或支持艺术家的市场发展。"
  },
  "Auction records": {
    label: "Auction records / 拍卖记录",
    hint: "Past public auction results and bought-in records. / 过去公开拍卖成交结果及流拍记录。"
  },
  "Comparable sales": {
    label: "Comparable sales / 可比销售",
    hint: "Prices of similar works used as market references. / 可作为市场参考的相似作品销售价格。"
  },
  Provenance: {
    label: "Provenance / 来源记录",
    hint: "Ownership history and acquisition documentation. / 作品所有权历史和购买来源文件。"
  },
  "Condition notes": {
    label: "Condition notes / 品相说明",
    hint: "Information about physical condition, damage or conservation needs. / 关于作品品相、损伤或修复需求的信息。"
  },
  "Signals and commentary": {
    label: "Signals and commentary / 信号与评论",
    hint: "Critical, collector, gallery or institutional attention around the artist or work. / 围绕艺术家或作品的评论、藏家、画廊或机构关注。"
  },
  "Market trend notes": {
    label: "Market trend notes / 市场趋势说明",
    hint: "Recent direction of demand, attention and price movement. / 近期需求、关注度和价格变化方向。"
  },
  "Risk information": {
    label: "Risk information / 风险信息",
    hint: "Potential investment risks that may affect judgment. / 可能影响投资判断的潜在风险。"
  }
};

const moduleLabels = {
  "Market knowledge": knowledgeTypes[0],
  "Artist reputation knowledge": knowledgeTypes[1],
  "Object-specific knowledge": knowledgeTypes[2],
  "Risk knowledge": knowledgeTypes[3],
  "Social and expert signal knowledge": knowledgeTypes[4],
  "Aesthetic and cultural knowledge": knowledgeTypes[5]
};

const priorityLabels = {
  high: "High priority / 高优先级",
  medium: "Medium priority / 中等优先级",
  low: "Lower priority / 较低优先级"
};

const state = {
  participantId: "",
  assignment: "",
  experienceGroup: "",
  background: {},
  taskOrder: [],
  taskIndex: 0,
  taskStart: null,
  activeModuleStart: {},
  moduleStats: {},
  responses: [],
  reflection: {}
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function createParticipantId() {
  return `P-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function assignmentFromId(id) {
  const value = id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return value % 2 === 0 ? "A" : "B";
}

function buildTaskOrder() {
  const patternA = ["unfiltered", "ai_filtered", "ai_filtered", "unfiltered"];
  const patternB = ["ai_filtered", "unfiltered", "unfiltered", "ai_filtered"];
  const pattern = state.assignment === "A" ? patternA : patternB;
  const paired = artworks.map((artwork, index) => ({
    artworkId: artwork.id,
    interface: pattern[index]
  }));
  state.taskOrder = shuffle(paired);
}

function showScreen(name) {
  $$(".screen").forEach((screen) => screen.classList.remove("active"));
  $(`#screen-${name}`).classList.add("active");
  $$("#progressSteps li").forEach((step) => {
    step.classList.toggle("active", step.dataset.step === name || (name === "tasks" && step.dataset.step === "tasks"));
  });
}

function formToObject(form) {
  const data = {};
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    if (key in data) {
      data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value];
    } else {
      data[key] = value;
    }
  }
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) data[key] = data[key].join("|");
  });
  return data;
}

function classifyExperience(background) {
  const years = Number(background.yearsExperience || 0);
  const roleExperienced = !["", "none"].includes(background.artExperience);
  return roleExperienced || years >= 2 ? "experienced" : "non_experienced";
}

function renderScale([name, prompt, low, high]) {
  const options = Array.from({ length: 7 }, (_, index) => {
    const value = index + 1;
    return `<label><input type="radio" name="${name}" value="${value}" required />${value}</label>`;
  }).join("");
  return `
    <div class="scale-item">
      <strong>${prompt}</strong>
      <div class="scale-options">${options}</div>
      <div class="scale-anchors"><span>1 = ${low}</span><span>7 = ${high}</span></div>
    </div>
  `;
}

function renderSuitabilityScales() {
  $("#suitabilityScales").innerHTML = aiSuitabilityScales
    .map(([name, prompt]) => renderScale([name, prompt, "Not suitable at all / 完全不适合", "Very suitable / 非常适合"]))
    .join("");
}

function renderKnowledgeChoices(targetId, name) {
  $(`#${targetId}`).innerHTML = knowledgeTypes
    .map(
      (type) => `
        <label class="knowledge-choice">
          <input type="checkbox" name="${name}" value="${type.value}" />
          <span>
            <strong>${type.label}</strong>
            <small>${type.hint}</small>
          </span>
        </label>
      `
    )
    .join("");
}

function renderRawDossier(artwork, title = "") {
  const blocks = Object.entries(artwork.raw)
    .map(([blockTitle, text]) => {
      const meta = rawKnowledgeLabels[blockTitle] || { label: blockTitle, hint: "" };
      return `
        <article class="info-block">
          <h4>${meta.label}</h4>
          ${meta.hint ? `<p class="knowledge-hint">${meta.hint}</p>` : ""}
          <p>${text}</p>
        </article>
      `;
    })
    .join("");
  const heading = title ? `<h3 class="section-label">${title}</h3>` : "";
  return `<div class="raw-dossier">${heading}${blocks}</div>`;
}

function renderInterface(task, artwork) {
  if (task.interface === "unfiltered") {
    return renderRawDossier(artwork);
  }

  const modules = artwork.ai.modules
    .map(([title, priority, text], index) => {
      const meta = moduleLabels[title] || { label: title, hint: "" };
      return `
      <article class="knowledge-module" data-module="${title}">
        <button class="module-button" type="button" data-module-index="${index}">
          <span class="module-title">${meta.label}</span>
          <span>${priorityLabels[priority] || priority}</span>
        </button>
        <div class="module-body">
          <p class="knowledge-hint">${meta.hint}</p>
          <div class="priority ${priority}">${priorityLabels[priority] || priority} decision relevance / 决策相关性</div>
          <p>${text}</p>
        </div>
      </article>
    `;
    })
    .join("");

  return `
    <div class="ai-report">
      <div class="report-lead"><strong>AI-filtered knowledge report / AI 过滤知识报告：</strong> ${artwork.ai.lead}</div>
      ${modules}
      <details class="source-dossier" open>
        <summary>Original artwork information / 原始艺术品资料</summary>
        ${renderRawDossier(artwork, "Same underlying information / 相同原始信息")}
      </details>
    </div>
  `;
}

function currentTask() {
  return state.taskOrder[state.taskIndex];
}

function renderTask() {
  const task = currentTask();
  const artwork = artworks.find((item) => item.id === task.artworkId);
  state.taskStart = Date.now();
  state.moduleStats = {};
  state.activeModuleStart = {};

  $("#taskCount").textContent = `Task ${state.taskIndex + 1} of ${state.taskOrder.length} / 第 ${state.taskIndex + 1} 个任务，共 ${state.taskOrder.length} 个`;
  $("#artworkTitle").textContent = `${artwork.artist}: ${artwork.title}`;
  $("#interfaceBadge").textContent =
    task.interface === "ai_filtered" ? "AI knowledge filtering interface / AI 知识过滤界面" : "Unfiltered information interface / 未过滤信息界面";
  $("#artworkImage").src = artwork.image;
  $("#artworkImage").alt = `${artwork.title} by ${artwork.artist}`;
  $("#artworkMeta").textContent = artwork.meta;
  $("#interfaceContent").innerHTML = renderInterface(task, artwork);

  const scaleSet = task.interface === "ai_filtered" ? [...scales, trustScale] : [...scales];
  $("#scaleItems").innerHTML = `<div class="scale-list">${scaleSet.map(renderScale).join("")}</div>`;
  $("#taskForm").reset();
  updateTimer();

  $$(".module-button").forEach((button) => {
    button.addEventListener("click", () => {
      const module = button.closest(".knowledge-module");
      const name = module.dataset.module;
      const open = module.classList.toggle("open");
      const now = Date.now();
      state.moduleStats[name] ||= { clicks: 0, timeMs: 0 };
      state.moduleStats[name].clicks += 1;
      if (open) {
        state.activeModuleStart[name] = now;
      } else if (state.activeModuleStart[name]) {
        state.moduleStats[name].timeMs += now - state.activeModuleStart[name];
        delete state.activeModuleStart[name];
      }
    });
  });
}

function updateTimer() {
  if (!$("#screen-tasks").classList.contains("active") || !state.taskStart) return;
  const elapsed = Math.floor((Date.now() - state.taskStart) / 1000);
  const mins = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const secs = String(elapsed % 60).padStart(2, "0");
  $("#taskTimer").textContent = `${mins}:${secs}`;
  requestAnimationFrame(updateTimer);
}

function closeOpenModuleTimers() {
  const now = Date.now();
  Object.entries(state.activeModuleStart).forEach(([name, started]) => {
    state.moduleStats[name] ||= { clicks: 0, timeMs: 0 };
    state.moduleStats[name].timeMs += now - started;
  });
  state.activeModuleStart = {};
}

function submitTask() {
  const form = $("#taskForm");
  if (!form.reportValidity()) return;
  closeOpenModuleTimers();
  const task = currentTask();
  const artwork = artworks.find((item) => item.id === task.artworkId);
  const response = formToObject(form);
  response.participantId = state.participantId;
  response.assignment = state.assignment;
  response.experienceGroup = state.experienceGroup;
  response.artworkId = task.artworkId;
  response.artworkTitle = artwork.title;
  response.artist = artwork.artist;
  response.interface = task.interface;
  response.taskNumber = state.taskIndex + 1;
  response.taskTimeMs = Date.now() - state.taskStart;
  response.moduleStats = JSON.stringify(state.moduleStats);
  state.responses.push(response);

  state.taskIndex += 1;
  if (state.taskIndex >= state.taskOrder.length) {
    showScreen("reflection");
  } else {
    renderTask();
  }
}

function finishStudy() {
  const form = $("#reflectionForm");
  if (!form.reportValidity()) return;
  state.reflection = formToObject(form);
  if (!state.reflection.aiSuitableTypes || !state.reflection.humanExpertiseTypes) {
    alert("Please select at least one knowledge type in each checkbox question. / 请在两个知识类型选择题中各至少选择一项。");
    return;
  }
  const payload = buildPayload();
  localStorage.setItem(`kf_experiment_${state.participantId}`, JSON.stringify(payload));
  $("#summaryBox").textContent = JSON.stringify(payload, null, 2);
  showScreen("complete");
}

function buildPayload() {
  return {
    participantId: state.participantId,
    assignment: state.assignment,
    experienceGroup: state.experienceGroup,
    background: state.background,
    taskOrder: state.taskOrder,
    responses: state.responses,
    reflection: state.reflection,
    completedAt: new Date().toISOString()
  };
}

function flattenRow(row) {
  const background = state.background;
  const reflection = state.reflection;
  return {
    participantId: row.participantId,
    assignment: row.assignment,
    experienceGroup: row.experienceGroup,
    artExperience: background.artExperience,
    yearsExperience: background.yearsExperience,
    investmentExperience: background.investmentExperience,
    aiFamiliarity: background.aiFamiliarity,
    riskPreference: background.riskPreference,
    artInterest: background.artInterest,
    ageGroup: background.ageGroup,
    education: background.education,
    taskNumber: row.taskNumber,
    artworkId: row.artworkId,
    artworkTitle: row.artworkTitle,
    artist: row.artist,
    interface: row.interface,
    valuation: row.valuation,
    wtp: row.wtp,
    risk: row.risk,
    intention: row.intention,
    confidence: row.confidence,
    knowledgeQuality: row.knowledgeQuality,
    informationOverload: row.informationOverload,
    trustAI: row.trustAI || "",
    taskTimeMs: row.taskTimeMs,
    moduleStats: row.moduleStats,
    preferredInterface: reflection.preferredInterface,
    aiSuitableTypes: reflection.aiSuitableTypes,
    aiSuitableNote: reflection.aiSuitableNote,
    humanExpertiseTypes: reflection.humanExpertiseTypes,
    humanExpertiseNote: reflection.humanExpertiseNote,
    realUse: reflection.realUse,
    aiMarket: reflection.aiMarket,
    aiArtist: reflection.aiArtist,
    aiObject: reflection.aiObject,
    aiRisk: reflection.aiRisk,
    aiExpert: reflection.aiExpert,
    aiAesthetic: reflection.aiAesthetic
  };
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function downloadCsv() {
  const rows = state.responses.map(flattenRow);
  const headers = Object.keys(rows[0] || {});
  const csv = [headers.join(","), ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(","))].join("\n");
  download(`${state.participantId}_art_investment_experiment.csv`, csv, "text/csv;charset=utf-8");
}

function downloadJson() {
  download(
    `${state.participantId}_art_investment_experiment.json`,
    JSON.stringify(buildPayload(), null, 2),
    "application/json;charset=utf-8"
  );
}

function resetStudy() {
  window.location.reload();
}

$("#consentCheck").addEventListener("change", (event) => {
  $("#startBtn").disabled = !event.target.checked;
});

$("#startBtn").addEventListener("click", () => {
  state.participantId = createParticipantId();
  state.assignment = assignmentFromId(state.participantId);
  buildTaskOrder();
  $("#participantId").textContent = state.participantId;
  $("#assignmentLabel").textContent = `Counterbalancing assignment ${state.assignment}. / 平衡分配组别 ${state.assignment}。`;
  showScreen("background");
});

$("#backgroundNext").addEventListener("click", () => {
  const form = $("#backgroundForm");
  if (!form.reportValidity()) return;
  state.background = formToObject(form);
  state.experienceGroup = classifyExperience(state.background);
  $("#assignmentLabel").textContent = `Assignment ${state.assignment}; ${state.experienceGroup.replace("_", "-")} group. / 组别 ${state.assignment}；${state.experienceGroup.replace("_", "-")} 经验组。`;
  showScreen("instructions");
});

$("#beginTasks").addEventListener("click", () => {
  state.taskIndex = 0;
  showScreen("tasks");
  renderTask();
});

$("#nextTask").addEventListener("click", submitTask);
$("#finishStudy").addEventListener("click", finishStudy);
$("#downloadCsv").addEventListener("click", downloadCsv);
$("#downloadJson").addEventListener("click", downloadJson);
$("#resetStudy").addEventListener("click", resetStudy);

$$("[data-back]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.back));
});

renderSuitabilityScales();
renderKnowledgeChoices("aiSuitableChoices", "aiSuitableTypes");
renderKnowledgeChoices("humanExpertiseChoices", "humanExpertiseTypes");
