import { MessageCircle, Phone } from "lucide-react";

const steps = [
  { step: "1", title: "Meet your teacher" },
  { step: "2", title: "See our teaching style" },
  { step: "3", title: "Experience 1 complete lesson" },
  { step: "4", title: "Q&A with parents" },
];

const DemoClasses = () => {
  return (
    <section id="demo" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
            Experience WeePal Risk-Free
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Free Demo Classes (60 mins) — see why parents love us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-center">
          {/* What happens */}
          <div>
            <h3 className="text-xl font-display font-bold text-primary mb-6">
              What Happens in a Demo:
            </h3>
            <div className="space-y-4">
              {steps.map((item) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold font-body flex-shrink-0">
                    {item.step}
                  </div>
                  <span className="text-foreground font-medium font-body text-lg">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-warm-lg text-center">
            <Phone className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-primary mb-2">
              Contact Us to Book Your Slot
            </h3>
            <a
              href="tel:+917842012006"
              className="text-2xl font-bold text-accent font-body hover:opacity-80 transition-opacity"
            >
              +91 78420 12006
            </a>
            <p className="text-muted-foreground text-sm mt-3 mb-6">
              Or reach us instantly on WhatsApp
            </p>
           <a
  href="https://wa.me/917842012006?text=Hi!%20Book%20FREE%2060-min%20WeePal%20demo%20class%20for%20my%20child."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 bg-[#25D366] text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-all active:scale-[0.98] w-full sm:w-auto justify-center"
>
  <MessageCircle className="w-6 h-6" />
  Book Demo on WhatsApp →
</a>


          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoClasses;
