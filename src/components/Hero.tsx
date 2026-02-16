// import { useState } from "react";
// import heroImage from "@/assets/hero-kids.jpg";

// const Hero = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     grade: "",
//     time: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Redirect to WhatsApp with form data
//     const message = `Hi! I'd like to book a FREE demo class for my child.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nChild's Grade: ${formData.grade}\nBest Time: ${formData.time}`;
//     window.open(
//       `https://wa.me/917842012006?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

//   return (
//     <section className="relative min-h-screen flex items-center pt-20" id="hero">
//       {/* Background image with overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="Happy kids learning robotics and coding at WeePal"
//           className="w-full h-full object-cover"
//           loading="eager"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/85 to-primary/70" />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           {/* Left: Text */}
//           <div className="text-primary-foreground space-y-6 animate-fade-in-up">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight !text-primary-foreground">
//               WeePal: Where Kids Learn to{" "}
//               <span className="text-accent">THINK</span>,{" "}
//               <span className="text-accent">CREATE</span>, and{" "}
//               <span className="text-accent">THRIVE</span>
//               <span className="text-accent">™</span>
//             </h1>

//             <p className="text-lg sm:text-xl font-body opacity-90 max-w-lg">
//               Blending Strong Academics with Real-World Skills
//               <br />
//               for Ages 6-16
//             </p>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-6 pt-4">
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
//                   200+
//                 </div>
//                 <div className="text-sm opacity-80">Kids Transformed</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
//                   3+
//                 </div>
//                 <div className="text-sm opacity-80">Schools Partnered</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
//                   95%
//                 </div>
//                 <div className="text-sm opacity-80">Parent Satisfaction</div>
//               </div>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div
//             id="hero-form"
//             className="bg-card rounded-2xl p-6 sm:p-8 shadow-warm-lg animate-fade-in-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             <h2 className="text-xl sm:text-2xl font-display font-bold text-primary mb-1">
//               Book Your Child's FREE Demo Class Today
//             </h2>
//             <p className="text-muted-foreground text-sm mb-6">
//               30-minute risk-free session with our expert teachers
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">
//                   Parent / Child Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1 block">
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   type="tel"
//                   required
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   placeholder="+91 XXXXX XXXXX"
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="grade" className="text-sm font-medium text-foreground mb-1 block">
//                   Child's Grade
//                 </label>
//                 <select
//                   id="grade"
//                   required
//                   value={formData.grade}
//                   onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 >
//                   <option value="">Select grade</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={`Grade ${i + 1}`}>
//                       Grade {i + 1}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="time" className="text-sm font-medium text-foreground mb-1 block">
//                   Best Time to Call
//                 </label>
//                 <select
//                   id="time"
//                   required
//                   value={formData.time}
//                   onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 >
//                   <option value="">Select time</option>
//                   <option value="Morning (9-12)">Morning (9 AM - 12 PM)</option>
//                   <option value="Afternoon (12-3)">Afternoon (12 - 3 PM)</option>
//                   <option value="Evening (3-6)">Evening (3 - 6 PM)</option>
//                   <option value="Night (6-9)">Night (6 - 9 PM)</option>
//                 </select>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-bold text-lg shadow-orange hover:opacity-90 transition-all active:scale-[0.98]"
//               >
//                 Book FREE Demo →
//               </button>
//               <p className="text-xs text-center text-muted-foreground">
//                 No spam. We'll reach out via WhatsApp to confirm.
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import { useState } from "react";
// import heroImage from "@/assets/hero-kids.jpg";

// const Hero = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     grade: "",
//     time: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Append form data to the provided WhatsApp link
//     const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nChild's Grade: ${formData.grade}\nBest Time: ${formData.time}`;
//     const fullUrl = `https://wa.me/message/WDZQSMTFKZDDE1?text=${encodeURIComponent(message)}`;
//     window.open(fullUrl, "_blank");
//   };

//   return (
//     <section className="relative min-h-screen flex items-center pt-20" id="hero">
//       {/* Background image with overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="Happy kids learning and coding at WeePal"
//           className="w-full h-full object-cover"
//           loading="eager"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/85 to-primary/70" />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           {/* Left: Text */}
//           <div className="text-primary-foreground space-y-6 animate-fade-in-up">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight !text-primary-foreground">
//               WeePal: Where Kids Learn to{" "}
//               <span className="text-accent">THINK</span>,{" "}
//               <span className="text-accent">CREATE</span>, and{" "}
//               <span className="text-accent">THRIVE</span>
//               <span className="text-accent">™</span>
//             </h1>

//             <p className="text-lg sm:text-xl font-body opacity-90 max-w-lg">
//               Blending Strong Academics with Real-World Skills
//               <br />
//               for Ages 6-16
//             </p>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-6 pt-4">
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
//                   200+
//                 </div>
//                 <div className="text-sm opacity-80">Kids Transformed</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
//                   3+
//                 </div>
//                 <div className="text-sm opacity-80">Schools Partnered</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
//                   95%
//                 </div>
//                 <div className="text-sm opacity-80">Parent Satisfaction</div>
//               </div>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div
//             id="hero-form"
//             className="bg-card rounded-2xl p-6 sm:p-8 shadow-warm-lg animate-fade-in-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             <h2 className="text-xl sm:text-2xl font-display font-bold text-primary mb-1">
//               Book Your Child's FREE Demo Class Today
//             </h2>
//             <p className="text-muted-foreground text-sm mb-6">
//               60-minute risk-free session with our expert teachers
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">
//                   Parent / Child Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1 block">
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   type="tel"
//                   required
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   placeholder="+91 XXXXX XXXXX"
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="grade" className="text-sm font-medium text-foreground mb-1 block">
//                   Child's Grade
//                 </label>
//                 <select
//                   id="grade"
//                   required
//                   value={formData.grade}
//                   onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 >
//                   <option value="">Select grade</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={`Grade ${i + 1}`}>
//                       Grade {i + 1}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="time" className="text-sm font-medium text-foreground mb-1 block">
//                   Best Time to Call
//                 </label>
//                 <select
//                   id="time"
//                   required
//                   value={formData.time}
//                   onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 >
//                   <option value="">Select time</option>
//                   <option value="Morning (9-12)">Morning (9 AM - 12 PM)</option>
//                   <option value="Afternoon (12-3)">Afternoon (12 - 3 PM)</option>
//                   <option value="Evening (3-6)">Evening (3 - 6 PM)</option>
//                   <option value="Night (6-9)">Night (6 - 9 PM)</option>
//                 </select>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-bold text-lg shadow-orange hover:opacity-90 transition-all active:scale-[0.98]"
//               >
//                 Book FREE Demo →
//               </button>
//               <p className="text-xs text-center text-muted-foreground">
//                 No spam. We'll reach out via WhatsApp to confirm.
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





// import { useState } from "react";
// import heroImage from "@/assets/hero-kids.jpg";

// const Hero = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     grade: "",
//     time: "",
//   });

//   // 🔥 PASTE YOUR GOOGLE APPS SCRIPT URL HERE (ONLY CHANGE THIS LINE)
//   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJVoRCAue7yrdMg7OWpv-HJu5PTBs3KRXY-gRGEbFeYlOztDOuMidIkN-Z0BoJePWahw/exec";

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // SAVE TO GOOGLE SHEET FIRST (invisible)
//     const formDataToSend = new FormData();
//     formDataToSend.append("Name", formData.name);
//     formDataToSend.append("Phone", formData.phone);
//     formDataToSend.append("Grade", formData.grade);
//     formDataToSend.append("Time", formData.time);

//     fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: formDataToSend })
//       .then(() => console.log("✅ Saved to Sheet"))
//       .catch((err) => console.error("Sheet error:", err));

//     // ORIGINAL WHATSAPP (unchanged)
//     const message = `Name: ${formData.name}\\nPhone: ${formData.phone}\\nChild's Grade: ${formData.grade}\\nBest Time: ${formData.time}`;
//     const fullUrl = `https://wa.me/message/WDZQSMTFKZDDE1?text=${encodeURIComponent(message)}`;
//     window.open(fullUrl, "_blank");
//   };

//   return (
//     <section className="relative min-h-screen flex items-center pt-20" id="hero">
//       {/* Background image with overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="Happy kids learning and coding at WeePal"
//           className="w-full h-full object-cover"
//           loading="eager"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/85 to-primary/70" />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           {/* Left: Text */}
//           <div className="text-primary-foreground space-y-6 animate-fade-in-up">
//             {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight !text-primary-foreground">
//               WeePal: Where Kids Learn to{" "}
//               <span className="text-accent">THINK</span>,{" "}
//               <span className="text-accent">CREATE</span>, and{" "}
//               <span className="text-accent">THRIVE</span>
//               <span className="text-accent">™</span>
//             </h1> */}
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight !text-primary-foreground drop-shadow-2xl lg:drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
//   WeePal: Where Kids Learn to{" "}
//   <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">THINK</span>,{" "}
//   <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">CREATE</span>, and{" "}
//   <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">THRIVE</span>
//   <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">™</span>
// </h1>



//             <p className="text-lg sm:text-xl font-body opacity-90 max-w-lg">
//               Blending Strong Academics with Real-World Skills
//               <br />
//               for Ages 6-14
//             </p>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-6 pt-4">
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
//                   200+
//                 </div>
//                 <div className="text-sm opacity-80">Kids Transformed</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
//                   3+
//                 </div>
//                 <div className="text-sm opacity-80">Schools Partnered</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
//                   95%
//                 </div>
//                 <div className="text-sm opacity-80">Parent Satisfaction</div>
//               </div>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div
//             id="hero-form"
//             className="bg-card rounded-2xl p-6 sm:p-8 shadow-warm-lg animate-fade-in-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             <h2 className="text-xl sm:text-2xl font-display font-bold text-primary mb-1">
//               Book Your Child's FREE Demo Class Today
//             </h2>
//             <p className="text-muted-foreground text-sm mb-6">
//               60-minute risk-free session with our expert teachers
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">
//                   Parent / Child Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1 block">
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   type="tel"
//                   required
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   placeholder="+91 XXXXX XXXXX"
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="grade" className="text-sm font-medium text-foreground mb-1 block">
//                   Child's Grade
//                 </label>
//                 <select
//                   id="grade"
//                   required
//                   value={formData.grade}
//                   onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 >
//                   <option value="">Select grade</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={`Grade ${i + 1}`}>
//                       Grade {i + 1}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="time" className="text-sm font-medium text-foreground mb-1 block">
//                   Best Time to Call
//                 </label>
//                 <select
//                   id="time"
//                   required
//                   value={formData.time}
//                   onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
//                 >
//                   <option value="">Select time</option>
//                   <option value="Morning (9-12)">Morning (9 AM - 12 PM)</option>
//                   <option value="Afternoon (12-3)">Afternoon (12 - 3 PM)</option>
//                   <option value="Evening (3-6)">Evening (3 - 6 PM)</option>
//                   <option value="Night (6-9)">Night (6 - 9 PM)</option>
//                 </select>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-bold text-lg shadow-orange hover:opacity-90 transition-all active:scale-[0.98]"
//               >
//                 Book FREE Demo →
//               </button>
//               <p className="text-xs text-center text-muted-foreground">
//                 No spam. We'll reach out via WhatsApp to confirm.
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { useState } from "react";
import heroImage from "@/assets/hero-kids.jpg";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "",
    time: "",
  });

  // 🔥 PASTE YOUR GOOGLE APPS SCRIPT URL HERE (ONLY CHANGE THIS LINE)
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJVoRCAue7yrdMg7OWpv-HJu5PTBs3KRXY-gRGEbFeYlOztDOuMidIkN-Z0BoJePWahw/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // SAVE TO GOOGLE SHEET FIRST (invisible)
    const formDataToSend = new FormData();
    formDataToSend.append("Name", formData.name);
    formDataToSend.append("Phone", formData.phone);
    formDataToSend.append("Grade", formData.grade);
    formDataToSend.append("Time", formData.time);

    fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: formDataToSend })
      .then(() => console.log("✅ Saved to Sheet"))
      .catch((err) => console.error("Sheet error:", err));

    // UPDATED WHATSAPP MESSAGE - includes name, grade, and "I want to know more"
    const message = `Hi! I'm ${formData.name} (parent of Grade ${formData.grade} child) I want to know more about the WeePal Foundation Program! Best time to call: ${formData.time}`;
    
    // ✅ FIXED: Use standard wa.me format with YOUR PHONE NUMBER
    const fullUrl = `https://wa.me/917842012006?text=${encodeURIComponent(message)}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20" id="hero">
      {/* Background image with overlay */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Happy kids learning and coding at WeePal"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/85 to-primary/70" />
      </div> */}

<div className="absolute inset-0 z-0">
  <img
    src={heroImage}
    alt="Happy kids learning and coding at WeePal"
    className="w-full h-full object-cover brightness-70"
    loading="eager"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/88 to-primary/85" />
  <div className="absolute inset-0 bg-black/25" />
</div>




      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
           {/* <div className="text-primary-foreground space-y-6 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight !text-primary-foreground drop-shadow-2xl lg:drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
              WeePal: Where Kids Learn to{" "}
              <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">THINK</span>,{" "}
              <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">CREATE</span>, and{" "}
              <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">THRIVE</span>
              <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">™</span>
            </h1>

            <p className="text-lg sm:text-xl font-body opacity-90 max-w-lg">
              Blending Strong Academics with Real-World Skills
              <br />
              for Ages 6-14
            </p> 
   */}
            <div className="text-primary-foreground space-y-6 animate-fade-in-up">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight !text-primary-foreground drop-shadow-2xl lg:drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
    WeePal: We don't offer courses; we deliver the{" "}
    <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">ultimate learning ecosystem</span>
    <span className="text-accent drop-shadow-[0_20px_40px_rgba(255,165,0,0.8)] lg:drop-shadow-[0_30px_60px_rgba(255,165,0,0.9)]">™</span>
  </h1>

  <p className="text-lg sm:text-xl font-body opacity-90 max-w-lg">
    Beyond courses: The premier ecosystem blending strong academics with real-world skills
    <br />
    for everyone
  </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
                  200+
                </div>
                <div className="text-sm opacity-80">Kids Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
                  3+
                </div>
                <div className="text-sm opacity-80">Schools Partnered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent font-body animate-count-up">
                  95%
                </div>
                <div className="text-sm opacity-80">Parent Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            id="hero-form"
            className="bg-card rounded-2xl p-6 sm:p-8 shadow-warm-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-xl sm:text-2xl font-display font-bold text-primary mb-1">
              Book Your Child's FREE Demo Class Today
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              60-minute risk-free session with our expert teachers
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">
                  Parent / Child Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1 block">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="grade" className="text-sm font-medium text-foreground mb-1 block">
                  Child's Grade
                </label>
                <select
                  id="grade"
                  required
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                >
                  <option value="">Select grade</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={`Grade ${i + 1}`}>
                      Grade {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="time" className="text-sm font-medium text-foreground mb-1 block">
                  Best Time to Call
                </label>
                <select
                  id="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                >
                  <option value="">Select time</option>
                  <option value="Morning (9-12)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12-3)">Afternoon (12 - 3 PM)</option>
                  <option value="Evening (3-6)">Evening (3 - 6 PM)</option>
                  <option value="Night (6-9)">Night (6 - 9 PM)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-bold text-lg shadow-orange hover:opacity-90 transition-all active:scale-[0.98]"
              >
                Book FREE Demo →
              </button>
              <p className="text-xs text-center text-muted-foreground">
                No spam. We'll reach out via WhatsApp to confirm.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

