// import { MessageCircle } from "lucide-react";

// const FinalCTA = () => {
//   return (
//     <section className="bg-orange-gradient py-10 sm:py-14">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold !text-accent-foreground mb-3">
//           Only 25 Spots Left — March 15th Start
//         </h2>
//         <p className="text-accent-foreground/90 text-lg mb-8 font-body">
//           10 weeks · Live classes · Money-back guarantee
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <a
//             href="#hero-form"
//             className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] w-full sm:w-auto text-center"
//           >
//             Book Demo →
//           </a>
//           <a
//             href="https://wa.me/917842012006?text=Hi!%20I%20want%20to%20join%20the%20WeePal%20Pilot%20Program!"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] w-full sm:w-auto text-center"
//           >
//             Join Pilot →
//           </a>
//           <a
//             href="https://wa.me/917842012006"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-accent-foreground text-accent px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
//           >
//             <MessageCircle className="w-5 h-5" />
//             WhatsApp: +91 78420 12006 →
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FinalCTA;

import { MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-orange-gradient py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold !text-accent-foreground mb-3">
          Only 20 Spots — start on the 25th of every month
        </h2>
        <p className="text-accent-foreground/90 text-lg mb-8 font-body">
          10 weeks · Live classes · Money-back guarantee
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#hero-form"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] w-full sm:w-auto text-center"
          >
            Book Demo →
          </a>
          <a
            href="https://wa.me/message/WDZQSMTFKZDDE1?text=Hi!%20I%20want%20to%20join%20the%20WeePal%20Pilot%20Program!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] w-full sm:w-auto text-center"
          >
            Join Program →
          </a>
          <a
            href="https://wa.me/message/WDZQSMTFKZDDE1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-foreground text-accent px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
