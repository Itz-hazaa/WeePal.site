// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { label: "Program", href: "#GrowEasy" },
//   { label: "Achievements", href: "#achievements" },
//   { label: "Founder", href: "#founder" },
//   { label: "Teachers", href: "#teachers" },
//   { label: "Demo", href: "#demo" },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-card/95 backdrop-blur-md shadow-warm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 sm:h-20">
//           <a href="#" className="flex items-center gap-2">
//             <span className="text-2xl sm:text-3xl font-display font-bold text-primary">
//               WeePal
//             </span>
//           </a>

//           {/* Desktop nav */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
//               >
//                 {link.label}
//               </a>
//             ))}
//             <a
//               href="#hero-form"
//               className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold text-sm shadow-orange hover:opacity-90 transition-opacity"
//             >
//               Book Free Demo
//             </a>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="md:hidden p-2 text-primary"
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileOpen && (
//           <div className="md:hidden pb-4 animate-fade-in">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setMobileOpen(false)}
//                 className="block py-3 px-2 text-foreground/80 hover:text-primary font-medium border-b border-border/50"
//               >
//                 {link.label}
//               </a>
//             ))}
//             <a
//               href="#hero-form"
//               onClick={() => setMobileOpen(false)}
//               className="block mt-3 text-center bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold shadow-orange"
//             >
//               Book Free Demo
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/WeePal.png"; // adjust path as needed

const navLinks = [
  { label: "Program", href: "#GrowEasy" },
  { label: "Achievements", href: "#achievements" },
  { label: "Founder", href: "#founder" },
  { label: "Teachers", href: "#teachers" },
  { label: "Demo", href: "#demo" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-warm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <img
              src={logo}
              alt="WeePal logo"
              className="h-8 sm:h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#hero-form"
              className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold text-sm shadow-orange hover:opacity-90 transition-opacity"
            >
              Book Free Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-2 text-foreground/80 hover:text-primary font-medium border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#hero-form"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold shadow-orange"
            >
              Book Free Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
