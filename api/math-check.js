// BS Radar — Math Check backend.
// Takes a specific AI-money claim, asks an LLM to pull out the concrete
// number and check it against realistic benchmarks, returns a structured
// verdict. Runs on xAI's grok-4-fast (cheap tier) — see brand-voice.md
// "backend offer" section for the product decision behind this.

const XAI_URL = "https://api.x.ai/v1/chat/completions";
const MODEL = "grok-build-0.1";
const MAX_CLAIM_LEN = 2000;

const SYSTEM_PROMPT = `You are the math-check engine behind "BS Radar," a free tool on StratCatAI (a YouTube channel that tests AI money-making claims with honest numbers, no hype).

A visitor pastes a specific money-making claim (a guru pitch, course promise, video title, etc). Your only job: find the concrete, checkable number in it (income, growth rate, timeline, conversion rate, subscriber count, whatever), and judge whether it's realistic against real-world benchmarks you know.

Rules:
- If there's no concrete checkable number, say so plainly — don't invent one.
- Be honest and specific about *why* a number is or isn't realistic (cite the kind of benchmark you're comparing against — e.g. typical creator conversion rates, typical ad account costs, typical time-to-first-dollar for that method).
- Do not fabricate statistics, studies, or sources you don't actually have grounded general knowledge of. If you're estimating, say you're estimating.
- Keep the tone plain, skeptical, no hype — matching a "respect real effort, puncture inflated claims" voice.
- Respond with ONLY a JSON object, no other text, in exactly this shape:

{
  "hasNumber": true or false,
  "claimedNumber": "the specific number/claim as stated, or null",
  "category": "short category label, e.g. 'monthly income', 'subscriber growth rate', 'conversion rate', or null",
  "verdict": one of "checks_out", "stretch", "unrealistic", "no_number_found",
  "realisticBenchmark": "plain-English realistic range/comparison, or null",
  "explanation": "2-3 sentences, plain English, explaining the verdict"
}`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const claim = (req.body && req.body.claim ? String(req.body.claim) : "").trim();

  if (!claim) {
    return res.status(400).json({ error: "Paste a claim to check." });
  }
  if (claim.length > MAX_CLAIM_LEN) {
    return res.status(400).json({ error: `Claim is too long (max ${MAX_CLAIM_LEN} characters).` });
  }

  const apiKey = process.env.XAI_API_KEY1 || process.env.xai_api_key1 || process.env.XAI_API_KEY;
  if (!apiKey) {
    console.error("No xAI API key found in environment (checked XAI_API_KEY1, xai_api_key1, XAI_API_KEY).");
    return res.status(500).json({ error: "Math-check isn't configured yet. Try again later." });
  }

  try {
    const upstream = await fetch(XAI_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: claim },
        ],
        temperature: 0.2,
        max_tokens: 500,
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text();
      console.error("xAI API error:", upstream.status, errText);
      return res.status(502).json({ error: "Math-check service is temporarily unavailable. Try again in a bit." });
    }

    const data = await upstream.json();
    const content = data?.choices?.[0]?.message?.content || "";

    let parsed = null;
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
    } catch {
      parsed = null;
    }

    if (!parsed || typeof parsed.verdict !== "string") {
      return res.status(200).json({
        hasNumber: null,
        claimedNumber: null,
        category: null,
        verdict: "no_number_found",
        realisticBenchmark: null,
        explanation: "Couldn't parse a clean verdict for this one — try rephrasing the claim to include the specific number more clearly.",
      });
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error("math-check handler error:", err);
    return res.status(500).json({ error: "Something went wrong running the check. Try again." });
  }
}
