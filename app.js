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
          <p>${bilingual(text)}</p>
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
          <p>${bilingual(text)}</p>
        </div>
      </article>
    `;
    })
    .join("");

  return `
    <div class="ai-report">
      <div class="report-lead"><strong>AI-filtered knowledge report / AI 过滤知识报告：</strong> ${bilingual(artwork.ai.lead)}</div>
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
  $("#artworkMeta").innerHTML = `${artwork.meta}<br /><span class="zh-text">${artwork.metaZh}</span>`;
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
