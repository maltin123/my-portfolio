import { motion } from "framer-motion";

const testimonials = [
  {
    name: "သီဟထက်",
    role: "CEO, TechStart",
    text: "Man နဲ့အလုပ်လုပ်ရတာ တကယ်ကောင်းတယ်။ သူ့ရဲ့ Design တွေက ကျွန်တော်တို့ Product ကို အများကြီးပြောင်းလဲသွားစေတယ်။ အသေးစိတ်ကို သေချာဂရုစိုက်တယ်။",
  },
  {
    name: "နွယ်နီဝင်း",
    role: "Product Lead, DesignLab",
    text: "Man က User Experience ကို တကယ်နားလည်တယ်။ သူ Design လုပ်ပေးတဲ့အလုပ်တွေက ကျွန်တော်တို့မျှော်လင့်ထားတာထက်ကို ပိုကောင်းနေတယ်။",
  },
  {
    name: "ရဲမင်းအောင်",
    role: "Founder, WebCraft",
    text: "Man ရဲ့ Creativity နဲ့ Technical Skill တွေက ကျွန်တော်တို့ Website ကို တခြားနဲ့မတူအောင် ထူးခြားစေတယ်။ ပထမနေ့ကနေ နောက်ဆုံးနေ့အထိ အတူတူအလုပ်လုပ်ရတာ ပျော်စရာကြီး။",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden min-h-screen bg-body text-body px-8 py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-muted blur-[160px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-accent uppercase tracking-[8px] mb-6"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          What People <span className="text-accent">Say.</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 rounded-2xl border border-subtle bg-glass backdrop-blur-md transition-all duration-500 hover:border-accent hover:shadow-accent-glow"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--accent)]/20 via-transparent to-[var(--accent)]/20 opacity-0 blur-xl group-hover:opacity-100 transition duration-700" />
              <svg className="relative z-10 w-8 h-8 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="relative z-10 text-muted leading-relaxed mb-6">{t.text}</p>
              <div className="relative z-10">
                <p className="font-semibold text-body">{t.name}</p>
                <p className="text-sm text-muted-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
