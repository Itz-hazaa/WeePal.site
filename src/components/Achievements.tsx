import { CheckCircle2 } from "lucide-react";

const achievements = [
  {
    number: "200+",
    label: "Students Reached",
    description: "Delivered robotics and academic workshops to 200+ students",
  },
  {
    number: "3+",
    label: "School Partners",
    description: "Partnered with 3 Hyderabad schools for events",
  },
  {
    number: "K-9",
    label: "Full Curriculum",
    description: "Built complete K9 curriculum (CBSE, ICSE, NIOS + NEP aligned)",
  },
  {
    number: "10+",
    label: "Expert Teachers",
    description: "Trained 10+ expert teachers from NIT's, IIt's, etc. in our methodology",
  },
  {
    number: "20+",
    label: "Robotics Bootcamp",
    description: "Conducted 10+ robotics bootcamp at schools",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
            What We've Done
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results, real impact. Here's what WeePal has accomplished so far.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={item.label}
              className="bg-card rounded-2xl p-6 shadow-warm hover:shadow-warm-lg transition-shadow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="text-3xl font-bold text-primary font-body mb-1 group-hover:text-accent transition-colors">
                    {item.number}
                  </div>
                  <h3 className="font-semibold text-foreground font-body text-lg mb-1">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
