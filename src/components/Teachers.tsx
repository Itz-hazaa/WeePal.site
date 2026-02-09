import teacherImg1 from "@/assets/teacher-1.jpg";
import teacherImg2 from "@/assets/teacher-2.jpg";
import teacherImg3 from "@/assets/teacher-3.jpg";
import { ShieldCheck } from "lucide-react";

const qualifications = [
  "From top NITs, IITs, etc.,",
  "7+ years teaching experience",
  "Background checked + WeePal trained",
  "Robotics, coding, academics specialists",
  "Weekly parent feedback tracked",
];

const teacherImages = [
  { src: teacherImg1, alt: "WeePal teacher helping student with robotics" },
  { src: teacherImg2, alt: "WeePal teacher teaching coding to students" },
  { src: teacherImg3, alt: "WeePal teacher guiding kids with electronics" },
];

const Teachers = () => {
  return (
    <section id="teachers" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
            Your Child's Expert Guides
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Carefully selected and trained educators who make learning magical
          </p>
        </div>

        {/* Teacher images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {teacherImages.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 sm:h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Qualifications */}
        <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-warm max-w-3xl mx-auto">
          <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-accent" />
            Our Teachers
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {qualifications.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-foreground/85"
              >
                <span className="text-accent font-bold">✓</span>
                <span className="font-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
