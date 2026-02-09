// import { Heart } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-primary-foreground py-10">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid sm:grid-cols-3 gap-8">
//           {/* Brand */}
//           <div>
//             <h3 className="text-2xl font-display font-bold !text-primary-foreground mb-2">
//               WeePal
//             </h3>
//             <p className="text-primary-foreground/70 text-sm">
//               Where Kids Learn to Think, Create, and Thrive™
//             </p>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-bold font-body mb-2 text-primary-foreground">Contact</h4>
//             <p className="text-primary-foreground/80 text-sm">
//               Phone:{" "}
//               <a href="tel:+917842012006" className="hover:text-accent transition-colors">
//                 +91 78420 12006
//               </a>
//             </p>
//             <p className="text-primary-foreground/80 text-sm mt-1">
//               WhatsApp:{" "}
//               <a
//                 href="https://wa.me/917842012006"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-accent transition-colors"
//               >
//                 Chat with us
//               </a>
//             </p>
//             <p className="text-primary-foreground/80 text-sm mt-1">
//               Hyderabad, India
//             </p>
//           </div>

//           {/* Quick links */}
//           <div>
//             <h4 className="font-bold font-body mb-2 text-primary-foreground">Quick Links</h4>
//             <div className="space-y-1">
//               {[
//                 { label: "Pilot Program", href: "#pilot" },
//                 { label: "Our Teachers", href: "#teachers" },
//                 { label: "Book Demo", href: "#demo" },
//                 { label: "About Founder", href: "#founder" },
//               ].map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="block text-primary-foreground/70 text-sm hover:text-accent transition-colors"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
//           <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-1">
//             Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by WeePal · © {new Date().getFullYear()}
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Heart } from "lucide-react";
import logo from "@/assets/WeePal.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="WeePal"
              className="h-8 sm:h-10 w-auto mb-2"
            />
            <p className="text-primary-foreground/70 text-sm">
              Where Kids Learn to Think, Create, and Thrive™
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-body mb-2 text-primary-foreground">Contact</h4>
            <p className="text-primary-foreground/80 text-sm">
              Phone:{" "}
              <a href="tel:+917842012006" className="hover:text-accent transition-colors">
                +91 78420 12006
              </a>
            </p>
            <p className="text-primary-foreground/80 text-sm mt-1">
              WhatsApp:{" "}
              <a
                href="https://wa.me/message/WDZQSMTFKZDDE1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Chat with us
              </a>
            </p>
            <p className="text-primary-foreground/80 text-sm mt-1">
              Hyderabad, India
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold font-body mb-2 text-primary-foreground">Quick Links</h4>
            <div className="space-y-1">
              {[
                { label: "Pilot Program", href: "#pilot" },
                { label: "Our Teachers", href: "#teachers" },
                { label: "Book Demo", href: "#demo" },
                { label: "About Founder", href: "#founder" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-1">
             by WeePal · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
