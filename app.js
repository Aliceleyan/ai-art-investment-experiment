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
    metaZh: "Mara Ellison，《Chromatic Index》，2021，布面丙烯与颜料，90 × 70 厘米。",
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
    metaZh: "Theo Ramirez，《Quiet Ledger》，2017，板面油彩、蜡与石墨，65 × 85 厘米。",
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
    metaZh: "Lina Okafor，《Archive of Rain》，2012，混合媒介纺织与墨，120 × 95 厘米。",
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
    metaZh: "Elias Venn，《Signal Bloom》，2024，数字打印、树脂与铝，100 × 100 厘米。",
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
  ["intention", "How likely would you be to invest in this artwork? For example, would you seriously consider buying it if you had the budget? / 您投资这件艺术品的可能性有多高？例如，如果预算允许，您是否会认真考虑购买？", "Very unlikely / 非常不可能", "Very likely / 非常可能"],
  ["risk", "How risky do you think this artwork is as an investment? For example, consider resale difficulty, price uncertainty, authenticity or condition issues. / 您认为这件艺术品作为投资的风险有多高？例如，请考虑转售难度、价格不确定性、真伪或品相问题。", "Very low risk / 风险很低", "Very high risk / 风险很高"],
  ["valuationConfidence", "How confident are you in your valuation? For example, do you feel your price estimate is well supported by the information? / 您对自己的估值有多大信心？例如，您是否觉得自己的价格判断有足够信息支持？", "Not confident / 没有信心", "Very confident / 非常有信心"],
  ["investmentConfidence", "How confident are you about whether this artwork is worth investing in? For example, do you feel clear about whether it is attractive or too risky? / 您对这件作品是否值得投资的判断有多大信心？例如，您是否清楚它具有吸引力，还是风险过高？", "Not confident / 没有信心", "Very confident / 非常有信心"],
  ["judgementClarity", "I am clear about why I made my judgement. For example, I can point to the main reasons behind my decision. / 我清楚自己为什么作出这个判断。例如，我能说出支持我判断的主要原因。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["infoValueUnderstanding", "The information helped me understand the investment value of this artwork. For example, it helped me think about price level, demand, rarity, or future resale. / 这些信息帮助我理解这件艺术品的投资价值。例如，它帮助我思考价格水平、市场需求、稀缺性或未来转售。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["infoRelevant", "The information was relevant to my judgement. For example, it related to value, risk, market interest, provenance, condition, or artist reputation. / 这些信息与我的判断相关。例如，它涉及价值、风险、市场兴趣、来源、品相或艺术家声誉。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["infoClear", "The information was clear. For example, I could understand the main facts without needing to reread many times. / 这些信息清楚易懂。例如，我不需要反复阅读很多遍也能理解主要事实。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["infoGrounded", "The information made my judgement feel more grounded. For example, my decision felt based on evidence rather than guessing. / 这些信息让我觉得自己的判断更有依据。例如，我的决定更像是基于证据，而不是凭感觉猜测。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["infoMainPoints", "The information helped me see what mattered most. For example, it made price evidence, risk, reputation, or expert judgement stand out. / 这些信息帮助我看出哪些内容最重要。例如，它让我更容易看到价格证据、风险、声誉或专家判断等重点。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["tooMuchInfo", "There was too much information to process. For example, I felt there were too many details to consider at once. / 需要处理的信息太多。例如，我觉得一次要考虑的细节太多。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["effortMainPoints", "It took a lot of effort to find the main points. For example, I had to search carefully to identify what mattered most. / 找出重点需要花很多精力。例如，我需要很仔细地寻找，才能判断哪些内容最重要。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["hardTellImportance", "It was hard to tell which information mattered most. For example, I was unsure whether to focus on price, artist reputation, condition, or risk. / 很难判断哪些信息最重要。例如，我不确定应该重点看价格、艺术家声誉、品相还是风险。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["confusedAfterReading", "I felt a bit confused after reading the page. For example, I was not sure how to connect the different pieces of information. / 阅读页面后我有些困惑。例如，我不太确定如何把不同信息联系起来。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["separatedImportance", "This page separated important and less important information. For example, it made clear which points were central and which were only background details. / 这个页面区分了重要和相对不重要的信息。例如，它让我看出哪些是核心信息，哪些只是背景细节。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["explainedSignals", "This page helped me understand why certain pieces of information mattered for the investment decision, such as price history, exhibition record, condition, or resale risk. / 这个页面帮助我理解为什么某些信息会影响投资判断，例如价格历史、展览记录、品相或转售风险。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["expertBoundaryClear", "This page made it clear which points still needed human expert judgement. For example, authenticity, physical condition, restoration, or cultural meaning may need specialist review. / 这个页面说明了哪些地方仍需要人类专家判断。例如，真伪、实物品相、修复情况或文化意义可能需要专家进一步判断。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"]
];

const aiTrustScales = [
  ["aiUsefulHighlights", "I believe the AI highlighted useful information. For example, it drew attention to evidence or risks that were helpful for my decision. / 我认为 AI 标出了有用的信息。例如，它提示了对我判断有帮助的证据或风险。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["aiNoImportantOmission", "I believe the AI report included the key information I needed and did not leave out anything that would seriously change my judgement, such as major risks, price evidence, provenance, or condition issues. / 我认为 AI 报告包含了我需要的关键信息，没有遗漏会严重改变我判断的重要内容，例如重大风险、价格证据、来源记录或品相问题。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["aiRealReference", "I would use this AI report as one reference in a real investment decision. For example, I might compare it with advice from an art advisor, gallery, or auction specialist. / 在真实投资决策中，我会把这份 AI 报告作为参考之一。例如，我可能会把它与艺术顾问、画廊或拍卖专家的意见进行比较。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"],
  ["aiSourceEnough", "The AI report showed enough sources for me to judge whether it was reliable. For example, I could see whether a claim came from comparable sales, exhibition history, condition notes, or provenance. / AI 报告提供了足够来源，让我判断其是否可靠。例如，我能看出某个判断来自可比销售、展览历史、品相说明还是来源记录。", "Strongly disagree / 非常不同意", "Strongly agree / 非常同意"]
];

const aiSuitabilityScales = [
  ["aiPastPrices", "Past transaction prices, such as previous sale prices or price ranges. / 过往交易价格，例如以往成交价或价格区间。"],
  ["aiComparableSales", "Comparable sales, such as prices of similar works by the same or similar artists. / 可比销售，例如同一艺术家或相似艺术家类似作品的价格。"],
  ["aiArtistTrend", "Artist market trend, such as whether demand or prices seem to be rising or cooling. / 艺术家市场趋势，例如需求或价格似乎在上升还是降温。"],
  ["aiAuctionRecords", "Auction or platform records, such as sale frequency, bought-in records, or online platform results. / 拍卖或平台记录，例如销售频率、流拍记录或线上平台结果。"],
  ["aiProvenance", "Provenance and ownership records, such as gallery invoices, previous owners, or exhibition loans. / 来源与所有权记录，例如画廊发票、过往藏家或展览借展记录。"],
  ["aiConditionRisk", "Condition and authenticity risk signals, such as damage, restoration, certificate issues, or authenticity doubts. / 品相与真伪风险信号，例如损伤、修复、证书问题或真伪疑点。"],
  ["aiCareer", "Artist background and career trajectory, such as career stage, gallery support, exhibitions, or collections. / 艺术家背景与职业发展，例如职业阶段、画廊支持、展览或收藏情况。"],
  ["aiVisibility", "Media and institutional visibility, such as critic reviews, museum attention, gallery endorsement, or collector discussion. / 媒体与机构可见度，例如评论文章、博物馆关注、画廊背书或藏家讨论。"],
  ["aiVisualQuality", "Visual quality, such as composition, coherence, material execution, or visual distinctiveness. / 视觉质量，例如构图、一致性、材料处理或视觉辨识度。"],
  ["aiArtHistorical", "Art-historical significance, such as whether the work relates to an important movement, period, or art-historical conversation. / 艺术史意义，例如作品是否关联重要流派、时期或艺术史讨论。"],
  ["aiCulturalMeaning", "Cultural or symbolic meaning, such as social themes, identity, memory, migration, or symbolic value. / 文化或象征意义，例如社会主题、身份、记忆、迁移或象征价值。"],
  ["aiFutureValue", "Future collecting value, such as whether the work may remain desirable to collectors over time. / 未来收藏价值，例如作品未来是否可能持续受到藏家关注。"]
];

const knowledgeTypes = [
  {
    value: "market",
    label: "Market knowledge / 市场知识",
    hint: "Information about prices, transactions and market demand, such as auction records, price trends, comparable sales, liquidity and collector demand. / 与价格、交易和市场需求有关的信息，例如拍卖记录、价格趋势、可比销售、流动性和藏家需求。"
  },
  {
    value: "artist",
    label: "Artist reputation knowledge / 艺术家声誉知识",
    hint: "Information about the artist's career position and reputation, such as career stage, gallery representation, exhibitions and museum collections. / 与艺术家职业发展和市场声誉有关的信息，例如职业阶段、画廊代理、展览经历和博物馆收藏。"
  },
  {
    value: "object",
    label: "Object-specific knowledge / 作品自身知识",
    hint: "Information about the specific artwork itself, such as medium, size, year, condition, provenance, rarity and authenticity risk. / 与这件作品本身有关的信息，例如媒介、尺寸、年份、品相、来源、稀缺性和真伪风险。"
  },
  {
    value: "risk",
    label: "Risk knowledge / 风险知识",
    hint: "Information that helps assess investment uncertainty, such as price volatility, liquidity risk, overvaluation risk, authenticity risk and trend risk. / 用于判断投资不确定性的信息，例如价格波动、流动性风险、高估风险、真伪风险和趋势风险。"
  },
  {
    value: "expert",
    label: "Social and expert signal knowledge / 社会与专家信号知识",
    hint: "Signals from experts, institutions and social attention, such as expert opinions, critic reviews, gallery endorsement, institutional backing and social visibility. / 来自专家、机构和公众关注的信号，例如专家意见、评论文章、画廊背书、机构认可和社交可见度。"
  },
  {
    value: "aesthetic",
    label: "Aesthetic and cultural knowledge / 审美与文化知识",
    hint: "Interpretive knowledge about artistic and cultural meaning, such as style, aesthetic quality, cultural significance, symbolic value and art-historical relevance. / 与艺术和文化意义有关的解释性知识，例如风格、审美质量、文化意义、象征价值和艺术史相关性。"
  }
];

const rawKnowledgeLabels = {
  "Artist biography": {
    label: "Artist biography / 艺术家简介",
    hint: "Basic background about the artist and their practice. / 艺术家及其创作实践的基本背景。"
  },
  "Exhibition history": {
    label: "Exhibition history / 展览历史",
    hint: "Where and how the artist or artwork has been exhibited. / 艺术家或作品曾在哪些机构、画廊或项目中展出。"
  },
  "Gallery representation": {
    label: "Gallery representation / 画廊代理",
    hint: "Whether a gallery represents or supports the artist's market. / 艺术家是否有画廊代理，或是否得到画廊的市场支持。"
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
    hint: "Ownership history and acquisition documentation. / 作品的所有权历史和购买来源文件。"
  },
  "Condition notes": {
    label: "Condition notes / 品相说明",
    hint: "Information about physical condition, damage or conservation needs. / 关于作品品相、损伤或修复需求的信息。"
  },
  "Signals and commentary": {
    label: "Signals and commentary / 信号与评论",
    hint: "Critical, collector, gallery or institutional attention around the artist or work. / 艺术家或作品获得的评论、藏家、画廊或机构关注。"
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
  important: {
    label: "Most important signals / 最重要信号",
    hint: "Selected points that appear most relevant for this investment judgement. / 从全部资料中筛选出的、对本次投资判断最相关的信息。"
  },
  market: {
    label: "Market evidence / 市场证据",
    hint: "Comparable sales, price range, sales frequency, liquidity and recent market trend. / 可比销售、价格区间、销售频率、流动性和近期市场趋势。"
  },
  artist: {
    label: "Artist trajectory / 艺术家发展轨迹",
    hint: "Career stage, exhibition record, representation, institutional signals and visibility. / 职业阶段、展览记录、代理情况、机构信号和可见度。"
  },
  risk: {
    label: "Risk signals / 风险信号",
    hint: "Signals that may increase uncertainty, such as thin markets, hype, condition issues or provenance gaps. / 可能增加不确定性的信号，例如市场较薄、炒作、品相问题或来源缺口。"
  },
  aesthetic: {
    label: "Aesthetic and cultural interpretation / 审美与文化解释",
    hint: "A restrained interpretation of visual coherence, cultural meaning and art-historical relevance. / 对视觉一致性、文化意义和艺术史相关性的谨慎解释。"
  },
  expert: {
    label: "Needs human expert judgement / 需要专家判断",
    hint: "Points where AI should not be treated as a final authority. / AI 不应被视为最终权威、仍需要人类专家判断的部分。"
  },
  lower: {
    label: "Lower-priority information / 较低优先级信息",
    hint: "Details that may be interesting but appear less central to the current investment judgement. / 可能有趣、但对当前投资判断相对不那么核心的信息。"
  },
  source: {
    label: "Source and reasoning notes / 来源与推理说明",
    hint: "Short labels showing which source each major claim comes from. / 用简短标签说明主要判断来自哪些资料。"
  }
};

const priorityLabels = {
  high: "High priority / 高优先级",
  medium: "Medium priority / 中等优先级",
  low: "Lower priority / 较低优先级"
};

const moduleVisuals = {
  important: { code: "★", color: "blue" },
  market: { code: "£", color: "green" },
  artist: { code: "AR", color: "purple" },
  risk: { code: "!", color: "red" },
  aesthetic: { code: "AC", color: "teal" },
  expert: { code: "EX", color: "gold" },
  lower: { code: "LP", color: "gray" },
  source: { code: "SR", color: "blue" }
};

const textZh = {
  "Mara Ellison is a London-based emerging painter whose work has appeared in two group exhibitions and one small gallery solo show. Her practice focuses on layered colour fields and coded urban maps.":
    "Mara Ellison 是一位常驻伦敦的新兴画家。她曾参加两次群展和一次小型画廊个展，创作主要围绕层叠色域和编码化城市地图展开。",
  "Group exhibitions at Northbank Project Space and Alder Gallery. Solo presentation at Finch Lane Projects in 2023.":
    "曾在 Northbank Project Space 和 Alder Gallery 参加群展，并于 2023 年在 Finch Lane Projects 举办个人展示。",
  "Represented by a mid-tier contemporary gallery with growing online collector visibility.":
    "由一家中等规模的当代画廊代理，在网络藏家群体中的可见度正在上升。",
  "Only three public auction records are available. Results range from £14,800 to £22,500, with one lot bought in.":
    "目前仅有三条公开拍卖记录，成交结果在 14,800 英镑至 22,500 英镑之间，其中一件流拍。",
  "Recent works of similar scale by the artist have been offered between £18,000 and £24,000 in primary and secondary-market contexts.":
    "该艺术家近期相似尺寸作品在一级市场和二级市场中的报价大致为 18,000 至 24,000 英镑。",
  "Acquired from the artist's gallery by a private collector in 2022. No complex ownership history is reported.":
    "由私人藏家于 2022 年从艺术家代理画廊购得；目前未显示复杂所有权历史。",
  "Overall good condition, with minor surface abrasions visible under raking light.":
    "整体品相良好，但在侧光下可以看到轻微表面擦痕。",
  "The artist has received several critic mentions and increased social visibility, but there is limited museum acquisition evidence.":
    "该艺术家曾被若干评论文章提及，社交平台可见度也有所提升，但目前缺乏充分的博物馆收藏证据。",
  "Short-term demand has increased, particularly among younger collectors, although sales frequency remains low.":
    "短期需求有所上升，尤其受到年轻藏家关注，但销售频率仍然较低。",
  "Potential risks include limited auction history, uncertain resale liquidity and possible short-term attention effects.":
    "潜在风险包括拍卖历史较短、转售流动性不确定，以及短期关注可能带来的价格波动。",
  "This case presents moderate upside signals but limited resale evidence. AI filtering highlights market liquidity and artist reputation as the most decision-relevant areas.":
    "该案例显示出一定的上升潜力，但转售证据仍然有限。AI 过滤结果提示，市场流动性和艺术家声誉是本案例中最需要关注的决策信息。",
  "Comparable sales suggest a reference range between £18,000 and £24,000. However, sales frequency is low, indicating limited secondary-market liquidity.":
    "可比销售显示参考区间约为 18,000 英镑至 24,000 英镑。然而销售频率较低，说明二级市场流动性有限。",
  "The artist has growing gallery visibility and critic attention, but institutional validation remains early-stage.":
    "该艺术家的画廊可见度和评论关注度正在上升，但机构认可仍处于早期阶段。",
  "The size and medium are commercially favourable. Minor surface abrasions should be checked before purchase.":
    "作品的尺寸和媒介较符合市场偏好，但购买前仍应进一步检查表面擦痕。",
  "Key risks are limited auction history, one bought-in lot and possible overvaluation from recent short-term attention.":
    "主要风险包括拍卖历史有限、一件流拍记录，以及近期短期关注可能造成的高估。",
  "Gallery representation and critic mentions are positive signals, but independent expert consensus is still limited.":
    "画廊代理和评论提及是积极信号，但独立专家共识仍然有限。",
  "The work is stylistically coherent with the artist's mapped colour-field practice, but cultural significance remains interpretive.":
    "该作品在风格上延续了艺术家的地图化色域创作，但其文化意义仍需要结合专业语境进行判断。",

  "Theo Ramirez is a mid-career artist known for textured panel works exploring memory and industrial labour.":
    "Theo Ramirez 是一位中生代艺术家，以带有丰富肌理的板面作品见长，创作主题多围绕记忆与工业劳动展开。",
  "Five gallery solo exhibitions since 2014 and inclusion in two regional museum group shows.":
    "自 2014 年以来举办过五次画廊个展，并入选两次地区博物馆群展。",
  "Stable representation by a respected regional gallery, with periodic participation in international art fairs.":
    "由一家信誉较好的地区画廊稳定代理，并不定期参加国际艺术博览会。",
  "Nine auction records since 2018. Most lots sold within estimate, with a narrow price range from £28,000 to £36,000.":
    "自 2018 年以来共有九条拍卖记录。多数拍品在估价范围内成交，价格区间较集中，约为 28,000 至 36,000 英镑。",
  "Comparable panel works from 2016-2019 have sold between £30,000 and £38,000.":
    "2016 至 2019 年间的可比板面作品成交价在 30,000 英镑至 38,000 英镑之间。",
  "Purchased from the artist's gallery by the current owner in 2018. Gallery invoice and exhibition documentation available.":
    "现藏家于 2018 年从艺术家代理画廊购得，附有画廊发票和展览文件。",
  "Excellent condition. No visible structural issues or restoration history.":
    "品相极佳，未见明显结构问题或修复历史。",
  "Several specialist critics identify Ramirez as a consistent mid-career painter, though broader international attention remains moderate.":
    "多位专业评论者认为 Ramirez 是一位发展稳定的中生代画家，但其国际关注度仍属中等。",
  "Prices show gradual growth rather than rapid speculation.":
    "价格呈现渐进增长，而非快速投机性上涨。",
  "Main risk is moderate liquidity rather than authenticity or condition.":
    "主要风险是流动性中等，而非真伪或品相问题。",
  "This case has stronger evidence stability than short-term excitement. AI filtering prioritises comparables, condition and steady reputation signals.":
    "该案例的优势在于证据较稳定，而不是短期热度突出。AI 过滤结果优先呈现可比销售、品相和稳定的声誉信号。",
  "Comparable sales cluster around £30,000-£38,000, suggesting a relatively stable reference range.":
    "可比销售集中在 30,000 英镑至 38,000 英镑之间，显示相对稳定的参考区间。",
  "The artist has consistent gallery and regional museum visibility, but limited international institutional presence.":
    "该艺术家在画廊和地区博物馆层面具有稳定可见度，但国际机构认可仍然有限。",
  "The work belongs to a recognised period, has favourable condition notes and includes supporting gallery documentation.":
    "该作品属于艺术家较受认可的创作时期，品相说明良好，并有画廊文件作为支持。",
  "Risk appears moderate. Liquidity is not high, but price volatility and authenticity concerns are limited.":
    "整体风险为中等。流动性不高，但价格波动和真伪担忧较有限。",
  "Specialist critic support and gallery consistency are positive, while broader collector excitement is restrained.":
    "专业评论支持和稳定画廊代理是积极信号，但更广泛的藏家热度较为克制。",
  "The work is representative of Ramirez's textured memory-led practice, but its symbolic value requires human interpretation.":
    "该作品具有 Ramirez 以肌理和记忆为核心的典型特征，但其象征价值仍需要由人结合语境加以判断。",

  "Lina Okafor is an established artist whose work addresses migration, textile memory and postcolonial archives.":
    "Lina Okafor 是一位成熟艺术家，作品长期关注迁移、纺织记忆与后殖民档案。",
  "Included in major museum group exhibitions and a touring institutional survey in 2020.":
    "曾入选重要博物馆群展，并在 2020 年参加巡回机构研究展。",
  "Represented by an internationally recognised gallery. Primary-market access is limited.":
    "由一家国际知名画廊代理，一级市场购藏机会较少。",
  "Auction records are strong but infrequent. Similar textile works have sold between £70,000 and £95,000.":
    "拍卖记录表现较强，但出现频率不高。相似纺织作品成交价在 70,000 至 95,000 英镑之间。",
  "Comparable works from 2010-2014 are rare. The strongest comparable sold for £92,000 in 2024.":
    "2010 至 2014 年间的可比作品较少。其中最有参考价值的一件可比作品于 2024 年以 92,000 英镑成交。",
  "Private collection since 2013; acquired through the artist's gallery. Exhibition loan record available.":
    "自 2013 年起由私人收藏，最初经艺术家代理画廊购得，并有展览借展记录。",
  "Good condition, but textile works require conservation-sensitive handling and display.":
    "品相良好，但纺织类作品对保存、运输和展示条件较为敏感。",
  "Strong museum recognition and specialist curatorial attention. Collector base is smaller but committed.":
    "博物馆认可度和专业策展关注度较高。藏家群体规模不大，但较为稳定。",
  "Institutional interest has increased, but works enter the secondary market infrequently.":
    "机构关注度有所上升，但作品进入二级市场的频率较低。",
  "Low frequency of resale makes liquidity uncertain despite strong cultural and institutional signals.":
    "尽管文化价值和机构信号较强，但转售频率较低，因此流动性仍存在不确定性。",
  "This case shows strong institutional and cultural signals but low market liquidity. AI filtering separates value evidence from resale constraints.":
    "该案例具有较强的机构和文化信号，但市场流动性偏低。AI 过滤结果将价值支撑因素与转售限制区分开来。",
  "Comparable sales are strong but sparse. The reference range is informative but based on limited transaction frequency.":
    "可比销售价格较高，但样本数量有限。参考价格区间具有一定价值，但仍受到交易频率较低的限制。",
  "The artist has strong institutional recognition and international gallery representation.":
    "该艺术家具有较强的机构认可，并由国际画廊代理。",
  "The work is from a valued period and has supporting provenance. Textile conservation requirements should be considered.":
    "该作品来自较受重视的创作时期，并有来源记录支持；同时需要考虑纺织作品的保存要求。",
  "The main risk is liquidity: strong reputation does not guarantee easy resale because comparable works appear infrequently.":
    "主要风险在于流动性：声誉较强并不意味着容易转售，因为可比作品很少进入市场。",
  "Museum exhibitions, curatorial attention and gallery representation provide strong expert and institutional signals.":
    "博物馆展览、策展关注和画廊代理共同构成了较强的专家与机构信号。",
  "Cultural significance appears high, but the depth of symbolic value depends on specialist interpretation.":
    "该作品的文化意义较强，但其象征价值的深度仍需要专业解释。",

  "Elias Venn is a rapidly visible artist associated with post-digital abstraction and platform-based collector communities.":
    "Elias Venn 是一位近期迅速受到关注的艺术家，其作品与后数字抽象和平台化藏家社群有关。",
  "Recent inclusion in two commercial group shows and a digital art fair presentation.":
    "近期参加过两次商业群展，并在一次数字艺术博览会中展示。",
  "No long-term gallery representation. Sales are mainly handled through limited drops and online intermediaries.":
    "目前没有长期合作画廊，销售主要通过限量发售和线上中介完成。",
  "Four auction appearances in the past year. Prices increased from £9,000 to £31,000 within ten months.":
    "过去一年中有四次拍卖记录，价格在十个月内从 9,000 英镑上升至 31,000 英镑。",
  "Comparable works are difficult to verify because several sales occurred through private online channels.":
    "可比作品难以核实，因为部分销售通过私人线上渠道完成。",
  "Direct purchase from a limited online release. Certificate supplied by the artist's studio.":
    "通过限量线上发售直接购得，并由艺术家工作室提供证书。",
  "New work in excellent physical condition, but long-term conservation of resin and digital print materials is uncertain.":
    "作品较新，物理品相极佳，但树脂和数字打印材料的长期保存稳定性仍不确定。",
  "High online attention and collector discussion, but limited independent critical or institutional recognition.":
    "线上关注度和藏家讨论度较高，但独立评论和机构认可仍然有限。",
  "Rapid price acceleration suggests momentum but may also indicate speculative hype.":
    "价格快速上涨显示出市场动能，但也可能反映投机性炒作。",
  "Key risks include short market history, weak institutional validation, uncertain resale depth and media conservation uncertainty.":
    "主要风险包括市场历史较短、机构验证较弱、转售深度不明确，以及媒介保存稳定性不确定。",
  "This case is momentum-heavy and evidence-light. AI filtering highlights hype risk, verification limits and the difference between social visibility and durable reputation.":
    "该案例市场热度较高，但支撑证据相对不足。AI 过滤结果突出炒作风险、信息验证限制，以及社交可见度与长期声誉之间的区别。",
  "Recent prices rose quickly, but comparable sales are difficult to verify and the market history is very short.":
    "近期价格上涨很快，但可比销售难以核实，市场历史也较短。",
  "The artist has high online visibility but limited gallery stability and little institutional recognition.":
    "该艺术家线上可见度较高，但画廊支持不够稳定，机构认可也较少。",
  "The work is new and in good condition, but material longevity and certificate verification deserve attention.":
    "该作品较新且品相良好，但材料耐久性和证书核验仍需关注。",
  "Major risks include hype-driven overvaluation, uncertain resale depth and weak independent validation.":
    "主要风险包括炒作推高估值、转售市场深度不确定，以及独立验证不足。",
  "Collector attention is strong online, but critical and institutional signals remain limited.":
    "线上藏家关注度较高，但评论界和机构层面的信号仍然有限。",
  "The work aligns with post-digital abstraction, but cultural significance is not yet established.":
    "该作品符合后数字抽象的创作方向，但其文化意义尚未充分建立。"
};

function bilingual(text) {
  const zh = textZh[text];
  return zh ? `${text}<br /><span class="zh-text">${zh}</span>` : text;
}

const state = {
  participantId: "",
  submissionUuid: "",
  assignment: "",
  experienceGroup: "",
  background: {},
  taskOrder: [],
  taskIndex: 0,
  taskStart: null,
  instructionStart: null,
  instructionTimeMs: null,
  activeModuleStart: {},
  moduleStats: {},
  events: [],
  responses: [],
  reflection: {},
  completionStatus: "incomplete"
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function createParticipantId() {
  if (crypto.randomUUID) return `P-${crypto.randomUUID()}`;
  return `P-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
}

function createSubmissionUuid() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
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
  logEvent("screen_view", { screen: name });
}

function logEvent(eventType, details = {}) {
  state.events.push({
    participantId: state.participantId,
    eventType,
    timestamp: new Date().toISOString(),
    taskNumber: state.taskIndex + 1,
    artworkId: currentTask()?.artworkId || "",
    interface: currentTask()?.interface || "",
    ...details
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
  return background.artMarketTransactionExperience === "yes" || years >= 2 ? "experienced" : "non_experienced";
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

function moduleText(artwork, title) {
  return artwork.ai.modules.find((module) => module[0] === title)?.[2] || "";
}

function sourceTag(label) {
  return `<span class="source-tag">${label}</span>`;
}

function renderModulePoints(points) {
  return `<ul class="module-points">${points.map((point) => `<li>${point}</li>`).join("")}</ul>`;
}

function buildFilteredModules(artwork) {
  const market = moduleText(artwork, "Market knowledge");
  const artist = moduleText(artwork, "Artist reputation knowledge");
  const object = moduleText(artwork, "Object-specific knowledge");
  const risk = moduleText(artwork, "Risk knowledge");
  const social = moduleText(artwork, "Social and expert signal knowledge");
  const aesthetic = moduleText(artwork, "Aesthetic and cultural knowledge");
  return [
    {
      key: "important",
      priority: "high",
      html: renderModulePoints([
        `${bilingual(market)} ${sourceTag("Comparable sales / 可比销售")}`,
        `${bilingual(artist)} ${sourceTag("Exhibition history / 展览历史")}`,
        `${bilingual(risk)} ${sourceTag("Risk note / 风险说明")}`,
        `${bilingual(object)} ${sourceTag("Condition note / 品相说明")}`,
        `${bilingual(social)} ${sourceTag("Critic or institutional signal / 评论或机构信号")}`
      ])
    },
    {
      key: "market",
      priority: "high",
      html: renderModulePoints([
        `${bilingual(market)} ${sourceTag("Comparable sales / 可比销售")}`,
        `${bilingual(artwork.raw["Market trend notes"])} ${sourceTag("Market trend / 市场趋势")}`,
        `${bilingual(artwork.raw["Auction records"])} ${sourceTag("Auction record / 拍卖记录")}`
      ])
    },
    {
      key: "artist",
      priority: "medium",
      html: renderModulePoints([
        `${bilingual(artist)} ${sourceTag("Artist profile / 艺术家资料")}`,
        `${bilingual(artwork.raw["Exhibition history"])} ${sourceTag("Exhibition history / 展览历史")}`,
        `${bilingual(artwork.raw["Gallery representation"])} ${sourceTag("Representation / 代理情况")}`
      ])
    },
    {
      key: "risk",
      priority: "high",
      html: renderModulePoints([
        `${bilingual(risk)} ${sourceTag("Risk note / 风险说明")}`,
        `${bilingual(artwork.raw["Condition notes"])} ${sourceTag("Condition note / 品相说明")}`,
        `${bilingual(artwork.raw["Risk information"])} ${sourceTag("Risk information / 风险信息")}`
      ])
    },
    {
      key: "aesthetic",
      priority: "medium",
      html: renderModulePoints([
        `${bilingual(aesthetic)} ${sourceTag("Visual interpretation / 视觉解释")}`,
        "This judgement is interpretive and should not be treated as settled by market data alone.<br /><span class=\"zh-text\">这一判断具有解释性，不应仅凭市场数据视为定论。</span>"
      ])
    },
    {
      key: "expert",
      priority: "high",
      html: renderModulePoints([
        `${bilingual(artwork.raw["Condition notes"])} ${sourceTag("Condition note / 品相说明")}`,
        `${bilingual(artwork.raw.Provenance)} ${sourceTag("Provenance note / 来源记录")}`,
        "Physical condition, authenticity, conservation details and cultural meaning should still be checked by human experts.<br /><span class=\"zh-text\">作品实物品相、真伪、保存细节和文化意义仍应由人类专家进一步判断。</span>"
      ])
    },
    {
      key: "lower",
      priority: "low",
      html: renderModulePoints([
        "Some contextual details may be useful background but appear less central than market evidence, risk and expert-boundary issues for this task.<br /><span class=\"zh-text\">部分背景信息有助于理解作品，但在本次投资判断中，相比市场证据、风险和专家边界问题，重要性相对较低。</span>",
        `${bilingual(artwork.raw["Signals and commentary"])} ${sourceTag("Commentary / 评论信号")}`
      ])
    },
    {
      key: "source",
      priority: "medium",
      html: renderModulePoints([
        `${sourceTag("Comparable sales / 可比销售")} Price range and market reference. / 用于判断价格区间和市场参照。`,
        `${sourceTag("Exhibition history / 展览历史")} Career and visibility signal. / 用于判断职业发展和可见度。`,
        `${sourceTag("Condition note / 品相说明")} Object-level risk signal. / 用于判断作品层面的风险。`,
        `${sourceTag("Provenance note / 来源记录")} Ownership and documentation signal. / 用于判断来源和文件支持。`,
        `${sourceTag("Risk note / 风险说明")} Investment uncertainty signal. / 用于判断投资不确定性。`
      ])
    }
  ];
}

function renderRawDossier(artwork, title = "") {
  const narrative = Object.entries(artwork.raw)
    .map(([blockTitle, text]) => {
      const meta = rawKnowledgeLabels[blockTitle] || { label: blockTitle, hint: "" };
      return `
        <strong>${meta.label}:</strong> ${bilingual(text)}
      `;
    })
    .join(" ");
  const heading = title || "Conventional artwork dossier / 传统艺术品资料";
  return `
    <article class="narrative-dossier">
      <h3>${heading}</h3>
      <p>${narrative}</p>
    </article>
  `;
}

function renderInterface(task, artwork) {
  if (task.interface === "unfiltered") {
    return renderRawDossier(artwork);
  }

  const modules = buildFilteredModules(artwork)
    .map(({ key, priority, html }, index) => {
      const meta = moduleLabels[key] || { label: key, hint: "" };
      const visual = moduleVisuals[key] || { code: "KF", color: "blue" };
      return `
      <article class="knowledge-module visual-card" data-module="${key}">
        <button class="module-button" type="button" data-module-index="${index}">
          <span class="module-icon ${visual.color}">${visual.code}</span>
          <span class="module-title">${meta.label}</span>
          <span class="priority-dot ${priority}">${priorityLabels[priority] || priority}</span>
        </button>
        <div class="module-body">
          <p class="knowledge-hint">${meta.hint}</p>
          <div class="priority ${priority}">${priorityLabels[priority] || priority} decision relevance / 决策相关性</div>
          ${html}
        </div>
      </article>
    `;
    })
    .join("");

  return `
    <div class="ai-report">
      <div class="report-lead"><strong>AI-filtered knowledge report / AI 过滤知识报告：</strong> ${bilingual(artwork.ai.lead)}</div>
      <div class="visual-guide">
        <strong>Visual knowledge map / 可视化知识图：</strong>
        <span>Click a card to read details. / 点击卡片查看细节。</span>
      </div>
      <div class="module-grid">${modules}</div>
      <details class="source-dossier">
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
  logEvent("artwork_page_start", { artworkId: task.artworkId, interface: task.interface });

  $("#taskCount").textContent = `Task ${state.taskIndex + 1} of ${state.taskOrder.length} / 第 ${state.taskIndex + 1} 个任务，共 ${state.taskOrder.length} 个`;
  $("#artworkTitle").textContent = `${artwork.artist}: ${artwork.title}`;
  $("#interfaceBadge").textContent =
    task.interface === "ai_filtered" ? "AI knowledge filtering interface / AI 知识过滤界面" : "Unfiltered information interface / 未过滤信息界面";
  const completed = state.responses.reduce(
    (counts, response) => {
      counts[response.interface] += 1;
      return counts;
    },
    { unfiltered: 0, ai_filtered: 0 }
  );
  const currentIsAi = task.interface === "ai_filtered";
  const shownUnfiltered = completed.unfiltered + (currentIsAi ? 0 : 1);
  const shownAi = completed.ai_filtered + (currentIsAi ? 1 : 0);
  $("#conditionBalance").textContent =
    `Total: 4 cases = 2 regular dossier + 2 AI report. Current progress: regular dossier ${shownUnfiltered}/2, AI report ${shownAi}/2. / 总共 4 个案例 = 2 个普通资料页 + 2 个 AI 整理报告页。当前进度：普通资料页 ${shownUnfiltered}/2，AI 整理报告页 ${shownAi}/2。`;
  $("#artworkImage").src = artwork.image;
  $("#artworkImage").alt = `${artwork.title} by ${artwork.artist}`;
  $("#artworkMeta").innerHTML = `${artwork.meta}<br /><span class="zh-text">${artwork.metaZh}</span>`;
  $("#interfaceContent").innerHTML = renderInterface(task, artwork);

  const scaleSet = task.interface === "ai_filtered" ? [...scales, ...aiTrustScales] : [...scales];
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
      logEvent(open ? "module_expand" : "module_collapse", { moduleName: name });
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
  response.questionnaireSubmitTimeMs = response.taskTimeMs;
  response.moduleStats = JSON.stringify(state.moduleStats);
  response.openedRiskModule = Boolean(state.moduleStats.risk);
  response.openedSourceModule = Boolean(state.moduleStats.source);
  response.openedExpertModule = Boolean(state.moduleStats.expert);
  state.responses.push(response);
  logEvent("post_task_submit", {
    artworkId: task.artworkId,
    interface: task.interface,
    taskTimeMs: response.taskTimeMs
  });

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
  state.completionStatus = "complete";
  logEvent("experiment_complete", { completionStatus: state.completionStatus });
  const payload = buildPayload();
  localStorage.setItem(`kf_experiment_${state.participantId}`, JSON.stringify(payload));
  $("#summaryBox").textContent = JSON.stringify(payload, null, 2);
  saveToDatabase(payload);
  showScreen("complete");
}

async function saveToDatabase(payload) {
  const status = $("#databaseStatus");
  if (status) status.textContent = "Database status / 数据库状态：saving...";
  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    if (status) {
      status.textContent = `Database status / 数据库状态：saved as a new database record #${result.id}. No previous response was overwritten. / 已作为新的数据库记录 #${result.id} 保存；不会覆盖任何已有回答。`;
    }
  } catch (error) {
    if (status) {
      status.textContent = "Database status / 数据库状态：not connected. Data is still saved in this browser and can be downloaded. / 未连接数据库；数据仍已保存在浏览器中，可下载。";
    }
  }
}

function buildPayload() {
  return {
    participantId: state.participantId,
    submissionUuid: state.submissionUuid,
    assignment: state.assignment,
    experienceGroup: state.experienceGroup,
    background: state.background,
    taskOrder: state.taskOrder,
    conditionOrderGroup: state.assignment,
    instructionTimeMs: state.instructionTimeMs,
    events: state.events,
    responses: state.responses,
    reflection: state.reflection,
    completionStatus: state.completionStatus,
    completedAt: new Date().toISOString()
  };
}

function flattenRow(row) {
  const background = state.background;
  const reflection = state.reflection;
  return {
    participantId: row.participantId,
    assignment: row.assignment,
    conditionOrderGroup: state.assignment,
    experienceGroup: row.experienceGroup,
    artMarketTransactionExperience: background.artMarketTransactionExperience,
    yearsExperience: background.yearsExperience,
    pricingFamiliarity: background.pricingFamiliarity,
    artExpertise: background.artExpertise,
    investmentExperience: background.investmentExperience,
    aiFamiliarity: background.aiFamiliarity,
    aiUseFrequency: background.aiUseFrequency,
    riskPreference: background.riskPreference,
    artInterest: background.artInterest,
    categoryInterest: background.categoryInterest,
    ageGroup: background.ageGroup,
    education: background.education,
    instructionTimeMs: state.instructionTimeMs,
    completionStatus: state.completionStatus,
    taskNumber: row.taskNumber,
    artworkId: row.artworkId,
    artworkTitle: row.artworkTitle,
    artist: row.artist,
    interface: row.interface,
    valuation: row.valuation,
    wtp: row.wtp,
    taskTimeMs: row.taskTimeMs,
    questionnaireSubmitTimeMs: row.questionnaireSubmitTimeMs,
    openedRiskModule: row.openedRiskModule,
    openedSourceModule: row.openedSourceModule,
    openedExpertModule: row.openedExpertModule,
    moduleStats: row.moduleStats,
    ...row,
    preferredInterface: reflection.preferredInterface,
    trustedInterface: reflection.trustedInterface,
    aiSuitableTypes: reflection.aiSuitableTypes,
    aiSuitableNote: reflection.aiSuitableNote,
    humanExpertiseTypes: reflection.humanExpertiseTypes,
    humanExpertiseNote: reflection.humanExpertiseNote,
    realUse: reflection.realUse,
    ...reflection
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

function updateMoneyValidity(input) {
  const value = Number(input.value);
  if (input.value && value < 100) {
    input.setCustomValidity("Amount must be at least £100. / 金额不能低于 100 英镑。");
  } else {
    input.setCustomValidity("");
  }
}

$$('input[name="valuation"], input[name="wtp"]').forEach((input) => {
  input.addEventListener("input", () => updateMoneyValidity(input));
  input.addEventListener("invalid", () => updateMoneyValidity(input));
});

$("#consentCheck").addEventListener("change", (event) => {
  $("#startBtn").disabled = !event.target.checked;
});

$("#startBtn").addEventListener("click", () => {
  state.participantId = createParticipantId();
  state.submissionUuid = createSubmissionUuid();
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
  state.instructionStart = Date.now();
  showScreen("instructions");
});

$("#beginTasks").addEventListener("click", () => {
  if (state.instructionStart) state.instructionTimeMs = Date.now() - state.instructionStart;
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
