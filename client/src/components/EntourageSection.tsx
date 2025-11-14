import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display italic text-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          data-testid="text-entourage-title"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          {/* Parents Section */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
            <div>
              <h3 className="text-sm md:text-lg font-semibold text-foreground mb-3">Parents of the Groom</h3>
              <p className="text-foreground/90 text-xs md:text-sm">Mr. Warren William Dela Cuadra</p>
              <p className="text-foreground/90 text-xs md:text-sm">Mrs. Leny Dela Cuadra</p>
            </div>
            <div>
              <h3 className="text-sm md:text-lg font-semibold text-foreground mb-3">Parents of the Bride</h3>
              <p className="text-foreground/90 text-xs md:text-sm">Mr. Roderick Penaflor</p>
              <p className="text-foreground/90 text-xs md:text-sm">Mrs. Rhea Estanislao</p>
            </div>
          </div>

          {/* Principal Sponsors */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-display italic text-foreground mb-6">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">NINONG</h4>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-foreground/90 text-xs md:text-sm">Charles Dominique Rebebes</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mark Joseph Florendo</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Ryan Atezora</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Roel F. Estanislao</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Jeremy Ebanks</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">NINANG</h4>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-foreground/90 text-xs md:text-sm">Mary Mae Rebebes</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Vaneza Rochelle Florendo</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Laarni Lagman</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Jennifer Labitad</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Daphne Pearl Viernes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Man and Matrons of Honor */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Best Man</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">Nikko John Layaoen</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Matrons of Honor</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">Rose Ann Castillo</p>
                <p className="text-foreground/90 text-xs md:text-sm">Lovely Jame Montalban</p>
              </div>
            </div>
          </div>

          {/* Secondary Sponsors */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-display italic text-foreground mb-6">Secondary Sponsors</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-8">
              <div>
                <h4 className="text-sm md:text-md font-semibold text-foreground mb-2 md:mb-4">Veil</h4>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-foreground/90 text-xs md:text-sm">Steven-Ace Lopez</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Clarissa May Castillo</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm md:text-md font-semibold text-foreground mb-2 md:mb-4">Cord</h4>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-foreground/90 text-xs md:text-sm">Jeric Lazo</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Jane Cindy Estanislao</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bridesmaid and Groomsman */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Groomsman</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">Kurt Justin Parayno</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Bridesmaid</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">Alexandria Tindugan</p>
              </div>
            </div>
          </div>

          {/* Special Roles */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Special Roles</h4>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <p className="text-foreground/90 text-xs md:text-sm"><span className="text-foreground font-medium">Coin Bearer:</span> Prince Jewel Penaflor</p>
                <p className="text-foreground/90 text-xs md:text-sm"><span className="text-foreground font-medium">Bible Bearer:</span> Kyle Raven Penaflor</p>
                <p className="text-foreground/90 text-xs md:text-sm"><span className="text-foreground font-medium">Ring Bearer:</span> Isaiah Nash Tulio</p>
                <p className="text-foreground/90 text-xs md:text-sm"><span className="text-foreground font-medium">Banner Bearer:</span> Mark Jeremy Tindugan</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Flower Girls</h4>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <p className="text-foreground/90 text-xs md:text-sm">Geleny Faith Dela Cuadra</p>
                <p className="text-foreground/90 text-xs md:text-sm">Khristine Mhae Dela Cuadra</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;