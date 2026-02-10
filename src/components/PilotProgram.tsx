import { Rocket } from "lucide-react";

const PilotProgram = () => {
  return (
    <section id="pilot" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-gradient rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 text-primary-foreground shadow-warm-lg">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-accent p-2.5 rounded-xl">
              <Rocket className="w-6 h-6 text-accent-foreground" />
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold !text-primary-foreground">
              WeePal GrowEasy Program
            </h2>
          </div>
          <p className="text-accent font-bold text-lg mb-8 font-body">
            Start on the 25th of every month
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Details */}
            <div className="space-y-5">
              <div>
                <span className="text-accent font-bold text-sm uppercase tracking-wide">WHAT</span>
                <p className="mt-1 text-primary-foreground/90">
                  10-week LIVE online program (3x/week + 2x/week Real world skills, 45-min classes)
                </p>
              </div>
              <div>
                <span className="text-accent font-bold text-sm uppercase tracking-wide">WHO</span>
                <p className="mt-1 text-primary-foreground/90">
                  Ages 6-10 (Grade 1-5), max 10 kids/class
                </p>
              </div>
              <div>
                <span className="text-accent font-bold text-sm uppercase tracking-wide">COST</span>
               
                <p className="text-sm text-primary-foreground/70 mt-1">
                  Money-back if not thrilled
                </p>
              </div>

              <div className="pt-2">
                <span className="text-accent font-bold text-sm uppercase tracking-wide">INCLUDES</span>
                <ul className="mt-2 space-y-2">
                  {[
                    "Expert teacher + lesson plans",
                    "Interactive classes", 
                    "Parent progress reports",
                    "Recorded classes for review",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-primary-foreground/90">
                      <span className="text-accent mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Why Join */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 !text-primary-foreground">
                Why Join GrowEasy?
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    emoji: "🚀",
                    title: "Exclusive early access to our proven method",
                    desc: "Get early access to our unique blend of academics + real-world skills",
                  },
                  {
                    emoji: "💬",
                    title: "Personalized program tailored to your feedback",
                    desc: "Shape your child's perfect learning experience",
                  },
                  {
                    emoji: "⭐",
                    title: "Limited spots = priority access forever",
                    desc: "Priority enrollment for all future batches forever",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <h4 className="font-bold text-primary-foreground font-body">
                          {item.title}
                        </h4>
                        <p className="text-sm text-primary-foreground/75 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>              
              <a
  
                href="https://wa.me/message/WDZQSMTFKZDDE1?text=Hi!%20I%20want%20to%20reserve%20a%20Pilot%20Program%20spot%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-orange hover:opacity-90 transition-all active:scale-[0.98]"
              >
                 Reserve Program Spot →
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotProgram;
