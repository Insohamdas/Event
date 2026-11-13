/**
 * Kirshiv Events - Tailwind Configuration
 * Defines custom brand tokens, colors, and typography hierarchy.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00A3E0',
          cyanLight: '#38BDF8',
          cyanPill: '#E0F2FE',
          royal: '#004B87',
          navy: '#002B4E',
          sand: '#FBF7EE',
          sandDark: '#F3EDE0',
          peach: '#E4BE9B',
          peachHover: '#D4A880'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  }
};

