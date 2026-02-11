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
              WeePal Foundation Program
            </h2>
          </div>
          <p className="text-accent font-bold text-lg mb-8 font-body">
            Starting March 25th 
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Details */}
            <div className="space-y-5">
              <div>
                <span className="text-accent font-bold text-sm uppercase tracking-wide">WHAT</span>
                <p className="mt-1 text-primary-foreground/90">
                  10-week LIVE online program (3x/week Academic + 2x/week Real world skills, 45-min classes)
                </p>
              </div>
              <div>
                <span className="text-accent font-bold text-sm uppercase tracking-wide">WHO</span>
                <p className="mt-1 text-primary-foreground/90">
                  Ages 6-14 (Grade 1-9), max 20 kids/class
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
              {/* <a
  
                href="https://wa.me/message/WDZQSMTFKZDDE1?text=Hi!%20I%20want%20to%20reserve%20a%20Pilot%20Program%20spot%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-orange hover:opacity-90 transition-all active:scale-[0.98]"
              >
                 Reserve Program Spot →
              </a> */}
             <a
  href="https://wa.me/message/WDZQSMTFKZDDE1?text=%2AWeePal%20Foundation%20Program%2A%0A%F0%9F%8C%B1%20Starting%20March%2025th%0A%0A%2AWHAT%3A%2A%2010-week%20LIVE%20online%20program%0A(3x%20Academic%20%2B%202x%20Real-world%20Skills%20per%20week%2C%2045-min%20classes)%0A%2AWHO%3A%2A%20Ages%206%E2%80%9314%20(Grades%201%E2%80%939)%2C%20max%2020%20kids%2Fclass%0A%2ACOST%3A%2A%20100%25%20money-back%20if%20not%20thrilled%0A%0A%2AINCLUDES%3A%2A%0A%E2%9C%93%20Expert%20teacher%20%26%20lesson%20plans%0A%E2%9C%93%20Interactive%20live%20classes%0A%E2%9C%93%20Parent%20progress%20reports%0A%E2%9C%93%20Class%20recordings%20for%20review%0A%0A%2AWhy%20Join%20Early%3F%2A%0A%F0%9F%9A%80%20Exclusive%20early%20access%20to%20our%20proven%20method%0A%F0%9F%92%AC%20Personalized%20program%20shaped%20by%20your%20feedback%0A%E2%AD%90%20Priority%20access%20for%20all%20future%20batches%0A%0AHi!%20I%E2%80%99d%20like%20to%20reserve%20a%20Pilot%20Program%20spot%20for%20my%20child."
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
