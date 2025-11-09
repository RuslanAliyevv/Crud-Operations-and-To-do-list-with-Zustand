export async function POST(req) {
  const { message } = await req.json();
  const lower = message.toLowerCase();

  // 1️⃣ Backenddə məhsul 
  const productInfo = {
    telefon: 799,
    noutbuk: 1899,
    saat: 299,
  };

  // 2️⃣ Cavab qaydaları 
  const rules = [
    { keywords: ["salam"], reply: "Salam! Necesiniz? 😊" },
    { keywords: ["yaxsi"], reply: "Yaxsiyam tesekkurler 😊" },
    { keywords: ["catdirilma"], reply: "Catdirilma movcuddur zehmet olmasa bizim elaqe saxliyin 😊" },
    { keywords: ["elaqe","əlaqə"], reply: "Elaqe nomresi : +994505335432 😊" },
    {
      keywords: ["qiymet", "necə", "neçəyə"],
      reply:
        "Qiymet mövzusunda hansını bilmək isteyirsiniz? (telefon, noutbuk, saat)",
    },
    { keywords: ["telefon"], reply: (p) => `Telefon ${p.telefon} AZN-dir 💰` },
    { keywords: ["notebook","notbuk","noutbuk","notebok"], reply: (p) => `Noutbuk ${p.noutbuk} AZN-dir 💻` },
    { keywords: ["saat"], reply: (p) => `Saat ${p.saat} AZN-dir ⌚` },
    {
      keywords: ["sagol", "saqol"],
      reply: "Sag olun, geceniz xeyre qalsın 🌙",
    },
    {
      keywords: ["tesekkur", "minnettaram"],
      reply: "Xosdur her zaman sohbet etmeye haziram 🌙",
    },
  ];

  // 3️⃣ Uyğun cavab
  const foundRule = rules.find((rule) =>
    rule.keywords.some((word) => lower.includes(word))
  );

  let reply;
  if (foundRule) {
    reply =
      typeof foundRule.reply === "function"
        ? foundRule.reply(productInfo)
        : foundRule.reply;
  } else {
    reply = "Bağışlayın, sualınızı başa düşmədim 😔";
  }

  return Response.json({ reply });
}
