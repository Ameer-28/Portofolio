const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildAssets() {
  console.log('Building high-quality lanyard assets...');

  // 1. Process profile photo
  const profileImg = await sharp('public/images/profile.jpg')
    .extract({ left: 0, top: 100, width: 576, height: 620 }) // Focus on face & upper torso
    .resize(660, 570, { fit: 'cover', position: 'top' })
    .modulate({ brightness: 1.05, saturation: 1.1 })
    .sharpen({ sigma: 1.2 })
    .png()
    .toBuffer();

  const photoBase64 = 'data:image/png;base64,' + profileImg.toString('base64');

  // Generate QR Code mockup SVG
  const qrSvg = `
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="8" fill="#ffffff"/>
    <rect x="8" y="8" width="28" height="28" rx="4" fill="#090a0f"/>
    <rect x="14" y="14" width="16" height="16" rx="2" fill="#ffffff"/>
    <rect x="18" y="18" width="8" height="8" fill="#090a0f"/>
    <rect x="64" y="8" width="28" height="28" rx="4" fill="#090a0f"/>
    <rect x="70" y="14" width="16" height="16" rx="2" fill="#ffffff"/>
    <rect x="74" y="18" width="8" height="8" fill="#090a0f"/>
    <rect x="8" y="64" width="28" height="28" rx="4" fill="#090a0f"/>
    <rect x="14" y="70" width="16" height="16" rx="2" fill="#ffffff"/>
    <rect x="18" y="74" width="8" height="8" fill="#090a0f"/>
    <rect x="42" y="10" width="6" height="6" fill="#090a0f"/>
    <rect x="52" y="10" width="6" height="12" fill="#090a0f"/>
    <rect x="42" y="22" width="12" height="6" fill="#090a0f"/>
    <rect x="10" y="42" width="8" height="6" fill="#090a0f"/>
    <rect x="22" y="42" width="14" height="8" fill="#090a0f"/>
    <rect x="42" y="36" width="8" height="8" fill="#090a0f"/>
    <rect x="54" y="32" width="12" height="6" fill="#090a0f"/>
    <rect x="72" y="42" width="18" height="6" fill="#090a0f"/>
    <rect x="42" y="50" width="6" height="16" fill="#090a0f"/>
    <rect x="54" y="46" width="16" height="8" fill="#090a0f"/>
    <rect x="42" y="72" width="14" height="8" fill="#090a0f"/>
    <rect x="60" y="64" width="8" height="18" fill="#090a0f"/>
    <rect x="74" y="56" width="16" height="10" fill="#090a0f"/>
    <rect x="74" y="72" width="8" height="18" fill="#090a0f"/>
    <rect x="86" y="76" width="6" height="14" fill="#090a0f"/>
  </svg>`;
  const qrBase64 = 'data:image/svg+xml;base64,' + Buffer.from(qrSvg).toString('base64');

  // FRONT CARD SVG
  const frontSvg = `
  <svg width="839" height="1266" viewBox="0 0 839 1266" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0e1017"/>
        <stop offset="50%" stop-color="#08090f"/>
        <stop offset="100%" stop-color="#121522"/>
      </linearGradient>

      <linearGradient id="borderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
        <stop offset="35%" stop-color="#6366f1" stop-opacity="0.6"/>
        <stop offset="70%" stop-color="#ffffff" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.7"/>
      </linearGradient>

      <linearGradient id="photoFrame" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#6366f1" stop-opacity="0.9"/>
      </linearGradient>

      <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
        <circle cx="0" cy="0" r="1" fill="rgba(255,255,255,0.08)"/>
      </pattern>

      <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fbbf24"/>
        <stop offset="50%" stop-color="#d97706"/>
        <stop offset="100%" stop-color="#b45309"/>
      </linearGradient>

      <clipPath id="photoClip">
        <rect x="89.5" y="180" width="660" height="570" rx="24"/>
      </clipPath>
      <clipPath id="cardClip">
        <rect x="0" y="0" width="839" height="1266" rx="40"/>
      </clipPath>
    </defs>

    <!-- Main Card Body -->
    <g clip-path="url(#cardClip)">
      <!-- Background -->
      <rect width="839" height="1266" fill="url(#bgGrad)"/>
      <rect width="839" height="1266" fill="url(#grid)"/>

      <!-- Ambient Glow Blobs -->
      <circle cx="150" cy="250" r="220" fill="#6366f1" opacity="0.16"/>
      <circle cx="700" cy="800" r="260" fill="#38bdf8" opacity="0.12"/>

      <!-- Top Punch Hole Area (Center X=419.5, Y=108) -->
      <rect x="369.5" y="88" width="100" height="40" rx="20" fill="#040507" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
      <circle cx="419.5" cy="108" r="14" fill="#000000"/>

      <!-- Header Elements -->
      <g transform="translate(80, 75)">
        <text x="0" y="32" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="24" font-weight="900" letter-spacing="2">AMEER<tspan fill="#38bdf8">.DEV</tspan></text>
        <text x="0" y="52" fill="#94a3b8" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" font-weight="600" letter-spacing="1.5">DEVELOPER PASS // 2026</text>
      </g>

      <g transform="translate(590, 75)">
        <rect x="0" y="12" width="169" height="36" rx="18" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.5)" stroke-width="1.5"/>
        <circle cx="22" cy="30" r="5" fill="#10b981"/>
        <text x="36" y="36" fill="#34d399" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="14" font-weight="800" letter-spacing="1.5">ACTIVE PASS</text>
      </g>

      <!-- Horizontal Divider -->
      <line x1="80" y1="155" x2="759" y2="155" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

      <!-- ================= LARGE PHOTO CONTAINER (660 x 570) ================= -->
      <!-- Photo Outer Glow / Border -->
      <rect x="86.5" y="177" width="666" height="576" rx="27" fill="none" stroke="url(#photoFrame)" stroke-width="3" opacity="0.95"/>
      
      <!-- Embedded Photo -->
      <g clip-path="url(#photoClip)">
        <image href="${photoBase64}" x="89.5" y="180" width="660" height="570" preserveAspectRatio="xMidYMid slice"/>
        
        <!-- Subtle shadow gradient at bottom of photo -->
        <linearGradient id="photoBottomShadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="60%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#08090f" stop-opacity="0.8"/>
        </linearGradient>
        <rect x="89.5" y="180" width="660" height="570" fill="url(#photoBottomShadow)"/>

        <!-- Photo Corner Accents -->
        <path d="M 108 210 L 108 198 L 120 198" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M 731 210 L 731 198 L 719 198" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
        
        <!-- In-photo verified tag -->
        <g transform="translate(110, 690)">
          <rect width="210" height="38" rx="19" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(56, 189, 248, 0.6)" stroke-width="1.5"/>
          <circle cx="20" cy="19" r="4.5" fill="#38bdf8"/>
          <text x="34" y="25" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="14" font-weight="800" letter-spacing="1.5">VERIFIED // AMN-26</text>
        </g>
      </g>

      <!-- ================= INFO SECTION (BELOW PHOTO) ================= -->
      <!-- Name -->
      <text x="419.5" y="812" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="40" font-weight="900" letter-spacing="1.5" text-anchor="middle">
        MUHAMMAD AMIN M.
      </text>

      <!-- Role & Specialization -->
      <g transform="translate(419.5, 852)">
        <rect x="-195" y="-18" width="390" height="34" rx="17" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>
        <text x="0" y="5" fill="#38bdf8" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="17" font-weight="800" letter-spacing="2" text-anchor="middle">
          BACKEND DEVELOPER
        </text>
      </g>

      <text x="419.5" y="910" fill="#94a3b8" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="600" letter-spacing="1" text-anchor="middle">
        SMK TELKOM MALANG  •  SOFTWARE ENGINEERING
      </text>

      <!-- Tech Stack Badges Row -->
      <g transform="translate(89.5, 938)">
        <!-- Badge 1: NestJS -->
        <g transform="translate(0, 0)">
          <rect width="120" height="34" rx="8" fill="rgba(234, 40, 78, 0.15)" stroke="rgba(234, 40, 78, 0.5)" stroke-width="1.2"/>
          <text x="60" y="22" fill="#fb7185" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="14" font-weight="800" letter-spacing="1" text-anchor="middle">NestJS</text>
        </g>
        <!-- Badge 2: TypeScript -->
        <g transform=\"translate(132, 0)\">
          <rect width=\"130\" height=\"34\" rx=\"8\" fill=\"rgba(49, 120, 198, 0.15)\" stroke=\"rgba(49, 120, 198, 0.5)\" stroke-width=\"1.2\"/>
          <text x=\"65\" y=\"22\" fill=\"#60a5fa\" font-family=\"system-ui, -apple-system, Segoe UI, sans-serif\" font-size=\"14\" font-weight=\"800\" letter-spacing=\"1\" text-anchor=\"middle\">TypeScript</text>
        </g>
        <!-- Badge 3: PostgreSQL -->
        <g transform=\"translate(274, 0)\">
          <rect width=\"130\" height=\"34\" rx=\"8\" fill=\"rgba(51, 103, 145, 0.15)\" stroke=\"rgba(51, 103, 145, 0.5)\" stroke-width=\"1.2\"/>
          <text x=\"65\" y=\"22\" fill=\"#38bdf8\" font-family=\"system-ui, -apple-system, Segoe UI, sans-serif\" font-size=\"14\" font-weight=\"800\" letter-spacing=\"1\" text-anchor=\"middle\">PostgreSQL</text>
        </g>
        <!-- Badge 4: Prisma -->
        <g transform=\"translate(416, 0)\">
          <rect width=\"115\" height=\"34\" rx=\"8\" fill=\"rgba(16, 185, 129, 0.15)\" stroke=\"rgba(16, 185, 129, 0.5)\" stroke-width=\"1.2\"/>
          <text x=\"57.5\" y=\"22\" fill=\"#34d399\" font-family=\"system-ui, -apple-system, Segoe UI, sans-serif\" font-size=\"14\" font-weight=\"800\" letter-spacing=\"1\" text-anchor=\"middle\">Prisma</text>
        </g>
        <!-- Badge 5: Docker -->
        <g transform=\"translate(543, 0)\">
          <rect width=\"117\" height=\"34\" rx=\"8\" fill=\"rgba(99, 102, 241, 0.15)\" stroke=\"rgba(99, 102, 241, 0.5)\" stroke-width=\"1.2\"/>
          <text x=\"58.5\" y=\"22\" fill=\"#a5b4fc\" font-family=\"system-ui, -apple-system, Segoe UI, sans-serif\" font-size=\"14\" font-weight=\"800\" letter-spacing=\"1\" text-anchor=\"middle\">Docker</text>
        </g>
      </g>

      <!-- Bottom Decorative Card Divider -->
      <line x1=\"89.5\" y1=\"1002\" x2=\"749.5\" y2=\"1002\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\"/>

      <!-- ================= FOOTER CREDENTIALS & SECURITY ================= -->
      <g transform=\"translate(89.5, 1022)\">
        <!-- QR Code -->
        <image href=\"${qrBase64}\" x=\"0\" y=\"10\" width=\"120\" height=\"120\"/>

        <!-- High-tech Barcode & Key info -->
        <g transform=\"translate(145, 15)\">
          <text x=\"0\" y=\"18\" fill=\"#ffffff\" font-family=\"monospace, Consolas, sans-serif\" font-size=\"15\" font-weight=\"700\" letter-spacing=\"2\">
            ID-SERIAL: <tspan fill=\"#38bdf8\">AMN-2026-DEV-01</tspan>
          </text>
          <text x=\"0\" y=\"38\" fill=\"#94a3b8\" font-family=\"monospace, Consolas, sans-serif\" font-size=\"13\" font-weight=\"500\" letter-spacing=\"1.5\">
            ISSUED: SEP 2026 // AUTH: MASTER-PASS
          </text>
          
          <!-- Barcode simulation lines -->
          <g transform=\"translate(0, 52)\" fill=\"#ffffff\" opacity=\"0.9\">
            <rect x=\"0\" y=\"0\" width=\"4\" height=\"44\"/>
            <rect x=\"6\" y=\"0\" width=\"2\" height=\"44\"/>
            <rect x=\"11\" y=\"0\" width=\"6\" height=\"44\"/>
            <rect x=\"20\" y=\"0\" width=\"3\" height=\"44\"/>
            <rect x=\"26\" y=\"0\" width=\"8\" height=\"44\"/>
            <rect x=\"37\" y=\"0\" width=\"2\" height=\"44\"/>
            <rect x=\"42\" y=\"0\" width=\"5\" height=\"44\"/>
            <rect x=\"50\" y=\"0\" width=\"3\" height=\"44\"/>
            <rect x=\"56\" y=\"0\" width=\"7\" height=\"44\"/>
            <rect x=\"66\" y=\"0\" width=\"4\" height=\"44\"/>
            <rect x=\"73\" y=\"0\" width=\"2\" height=\"44\"/>
            <rect x=\"78\" y=\"0\" width=\"6\" height=\"44\"/>
            <rect x=\"87\" y=\"0\" width=\"4\" height=\"44\"/>
            <rect x=\"94\" y=\"0\" width=\"8\" height=\"44\"/>
            <rect x=\"105\" y=\"0\" width=\"3\" height=\"44\"/>
            <rect x=\"111\" y=\"0\" width=\"5\" height=\"44\"/>
            <rect x=\"119\" y=\"0\" width=\"2\" height=\"44\"/>
            <rect x=\"124\" y=\"0\" width=\"6\" height=\"44\"/>
            <rect x=\"133\" y=\"0\" width=\"4\" height=\"44\"/>
            <rect x=\"140\" y=\"0\" width=\"7\" height=\"44\"/>
            <rect x=\"150\" y=\"0\" width=\"3\" height=\"44\"/>
            <rect x=\"156\" y=\"0\" width=\"5\" height=\"44\"/>
            <rect x=\"164\" y=\"0\" width=\"2\" height=\"44\"/>
            <rect x=\"169\" y=\"0\" width=\"8\" height=\"44\"/>
            <rect x=\"180\" y=\"0\" width=\"3\" height=\"44\"/>
            <rect x=\"186\" y=\"0\" width=\"6\" height=\"44\"/>
            <rect x=\"195\" y=\"0\" width=\"4\" height=\"44\"/>
            <rect x=\"202\" y=\"0\" width=\"7\" height=\"44\"/>
            <rect x=\"212\" y=\"0\" width=\"3\" height=\"44\"/>
            <rect x=\"218\" y=\"0\" width=\"5\" height=\"44\"/>
            <rect x=\"226\" y=\"0\" width=\"2\" height=\"44\"/>
            <rect x=\"231\" y=\"0\" width=\"6\" height=\"44\"/>
            <rect x=\"240\" y=\"0\" width=\"4\" height=\"44\"/>
            <rect x=\"247\" y=\"0\" width=\"8\" height=\"44\"/>
            <rect x=\"258\" y=\"0\" width=\"3\" height=\"44\"/>
            <rect x=\"264\" y=\"0\" width=\"6\" height=\"44\"/>
            <rect x=\"273\" y=\"0\" width=\"2\" height=\"44\"/>
            <rect x=\"278\" y=\"0\" width=\"5\" height=\"44\"/>
            <rect x=\"286\" y=\"0\" width=\"4\" height=\"44\"/>
            <rect x=\"293\" y=\"0\" width=\"7\" height=\"44\"/>
            <rect x=\"303\" y=\"0\" width=\"3\" height=\"44\"/>
            <rect x=\"309\" y=\"0\" width=\"6\" height=\"44\"/>
            <rect x=\"318\" y=\"0\" width=\"4\" height=\"44\"/>
            <rect x=\"325\" y=\"0\" width=\"8\" height=\"44\"/>
            <rect x=\"336\" y=\"0\" width=\"3\" height=\"44\"/>
            <rect x=\"342\" y=\"0\" width=\"5\" height=\"44\"/>
            <rect x=\"350\" y=\"0\" width=\"2\" height=\"44\"/>
            <rect x=\"355\" y=\"0\" width=\"6\" height=\"44\"/>
            <rect x=\"364\" y=\"0\" width=\"4\" height=\"44\"/>
            <rect x=\"371\" y=\"0\" width=\"7\" height=\"44\"/>
          </g>
          <text x=\"0\" y=\"110\" fill=\"#94a3b8\" font-family=\"monospace, Consolas, sans-serif\" font-size=\"12\" font-weight=\"600\" letter-spacing=\"2\">
            * 9 8 7 4 0 2 1 8 3 5 4 0 9 2 *
          </text>
        </g>

        <!-- Security Gold Hologram / Smart Chip -->
        <g transform=\"translate(545, 20)\">
          <rect width=\"115\" height=\"85\" rx=\"10\" fill=\"url(#chipGrad)\" stroke=\"#fef08a\" stroke-width=\"1.5\" opacity=\"0.9\"/>
          <rect x=\"12\" y=\"12\" width=\"91\" height=\"61\" rx=\"6\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"1.5\"/>
          <line x1=\"12\" y1=\"42.5\" x2=\"103\" y2=\"42.5\" stroke=\"#78350f\" stroke-width=\"1.5\"/>
          <line x1=\"42\" y1=\"12\" x2=\"42\" y2=\"73\" stroke=\"#78350f\" stroke-width=\"1.5\"/>
          <line x1=\"73\" y1=\"12\" x2=\"73\" y2=\"73\" stroke=\"#78350f\" stroke-width=\"1.5\"/>
          <rect x=\"47\" y=\"28\" width=\"21\" height=\"29\" rx=\"4\" fill=\"#d97706\" stroke=\"#78350f\" stroke-width=\"1.2\"/>
          <text x=\"57.5\" y=\"102\" fill=\"#94a3b8\" font-family=\"system-ui, -apple-system, Segoe UI, sans-serif\" font-size=\"11\" font-weight=\"800\" letter-spacing=\"1.5\" text-anchor=\"middle\">
            SMART RFID
          </text>
        </g>
      </g>

      <!-- Overall Card Chamfer Border -->
      <rect x=\"2\" y=\"2\" width=\"835\" height=\"1262\" rx=\"38\" fill=\"none\" stroke=\"url(#borderGlow)\" stroke-width=\"4\"/>
    </g>
  </svg>
  `;

  // BACK CARD SVG
  const backSvg = `
  <svg width="839" height="1266" viewBox="0 0 839 1266" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="backBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090b12"/>
        <stop offset="50%" stop-color="#0e1019"/>
        <stop offset="100%" stop-color="#090a10"/>
      </linearGradient>

      <linearGradient id="magStripe" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#111218"/>
        <stop offset="30%" stop-color="#1f212c"/>
        <stop offset="70%" stop-color="#111218"/>
        <stop offset="100%" stop-color="#1f212c"/>
      </linearGradient>

      <linearGradient id="backBorderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6366f1" stop-opacity="0.7"/>
        <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#6366f1" stop-opacity="0.7"/>
      </linearGradient>

      <pattern id="backGrid" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255, 255, 255, 0.035)" stroke-width="1"/>
      </pattern>

      <clipPath id="backCardClip">
        <rect x="0" y="0" width="839" height="1266" rx="40"/>
      </clipPath>
    </defs>

    <g clip-path="url(#backCardClip)">
      <!-- Background -->
      <rect width="839" height="1266" fill="url(#backBgGrad)"/>
      <rect width="839" height="1266" fill="url(#backGrid)"/>

      <!-- Ambient Glow Blobs -->
      <circle cx="419.5" cy="600" r="320" fill="#6366f1" opacity="0.12"/>

      <!-- Top Punch Hole Area -->
      <rect x="369.5" y="88" width="100" height="40" rx="20" fill="#040507" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
      <circle cx="419.5" cy="108" r="14" fill="#000000"/>

      <!-- Magnetic Security Strip -->
      <rect x="0" y="160" width="839" height="120" fill="url(#magStripe)"/>
      <line x1="0" y1="160" x2="839" y2="160" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <line x1="0" y1="280" x2="839" y2="280" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="419.5" y="226" fill="rgba(255,255,255,0.2)" font-family="monospace, Consolas, sans-serif" font-size="20" font-weight="800" letter-spacing="8" text-anchor="middle">
        AUTHENTIC SECURITY ENCRYPTED STRIP
      </text>

      <!-- Signature Panel -->
      <g transform="translate(89.5, 315)">
        <rect width="660" height="70" rx="8" fill="#f8fafc"/>
        <text x="30" y="46" fill="#0f172a" font-family="'Segoe Script', 'Brush Script MT', cursive, sans-serif" font-size="32" font-weight="bold">
          Muhammad Amin M.
        </text>
        <text x="635" y="44" fill="#64748b" font-family="monospace, sans-serif" font-size="14" font-weight="bold" text-anchor="end">
          AUTHORIZED SIGNATURE
        </text>
      </g>

      <!-- Central Branding & Watermark -->
      <g transform="translate(419.5, 515)">
        <circle cx="0" cy="0" r="75" fill="rgba(56, 189, 248, 0.08)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="2"/>
        <text x="0" y="18" fill="#38bdf8" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="52" font-weight="900" letter-spacing="-2" text-anchor="middle">
          AM
        </text>
        
        <text x="0" y="115" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="32" font-weight="900" letter-spacing="3" text-anchor="middle">
          AMEER<tspan fill="#38bdf8">.DEV</tspan>
        </text>
        <text x="0" y="145" fill="#94a3b8" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="15" font-weight="700" letter-spacing="2" text-anchor="middle">
          OFFICIAL DEVELOPER CREDENTIAL
        </text>
      </g>

      <!-- Specifications / Credential Box -->
      <g transform="translate(89.5, 705)">
        <rect width="660" height="280" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
        
        <g transform="translate(30, 40)">
          <!-- Row 1 -->
          <text x="0" y="0" fill="#64748b" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">FULL NAME</text>
          <text x="0" y="25" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" font-weight="700">Muhammad Amin Murtadho</text>
          
          <text x="340" y="0" fill="#64748b" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">INSTITUTION</text>
          <text x="340" y="25" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" font-weight="700">SMK Telkom Malang</text>

          <!-- Row 2 -->
          <text x="0" y="80" fill="#64748b" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">DOMAIN</text>
          <text x="0" y="105" fill="#38bdf8" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" font-weight="700">Backend Architecture</text>
          
          <text x="340" y="80" fill="#64748b" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">PORTFOLIO URL</text>
          <text x="340" y="105" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" font-weight="700">ameer.dev</text>

          <!-- Row 3 -->
          <text x="0" y="160" fill="#64748b" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">GITHUB</text>
          <text x="0" y="185" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" font-weight="700">github.com/Ameer-28</text>
          
          <text x="340" y="160" fill="#64748b" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">SECURITY CLEARANCE</text>
          <text x="340" y="185" fill="#34d399" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" font-weight="700">LEVEL 5 // VERIFIED</text>
        </g>
      </g>

      <!-- Bottom Terms & Contact -->
      <g transform="translate(89.5, 1025)">
        <text x="330" y="30" fill="#94a3b8" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" font-weight="500" text-anchor="middle">
          This card certifies developer credentials and identity pass.
        </text>
        <text x="330" y="52" fill="#64748b" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="12" font-weight="500" text-anchor="middle">
          Designed &amp; engineered with Next.js, React Three Fiber &amp; Rapier Physics.
        </text>

        <!-- Small QR Code -->
        <g transform="translate(280, 75)">
          <image href="${qrBase64}" width="100" height="100"/>
        </g>
      </g>

      <!-- Overall Card Border -->
      <rect x="2" y="2" width="835" height="1262" rx="38" fill="none" stroke="url(#backBorderGlow)" stroke-width="4"/>
    </g>
  </svg>
  `;

  // LANYARD STRAP SVG (1024 x 256)
  const strapSvg = `
  <svg width="1024" height="256" viewBox="0 0 1024 256" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="strapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1a1c26"/>
        <stop offset="15%" stop-color="#10121a"/>
        <stop offset="50%" stop-color="#090a10"/>
        <stop offset="85%" stop-color="#10121a"/>
        <stop offset="100%" stop-color="#1a1c26"/>
      </linearGradient>

      <!-- Woven Texture Pattern -->
      <pattern id="fabricWeave" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 0 0 L 12 12 M 12 0 L 0 12" stroke="rgba(255,255,255,0.07)" stroke-width="1.5"/>
        <rect width="12" height="12" fill="none" stroke="rgba(0,0,0,0.5)" stroke-width="0.8"/>
      </pattern>
    </defs>

    <!-- Strap Base -->
    <rect width="1024" height="256" fill="url(#strapGradient)"/>
    <rect width="1024" height="256" fill="url(#fabricWeave)"/>

    <!-- High-Definition Edge Stitching -->
    <!-- Top Stitches -->
    <line x1="0" y1="16" x2="1024" y2="16" stroke="#cbd5e1" stroke-width="4.5" stroke-dasharray="14 8" opacity="0.9"/>
    <line x1="0" y1="28" x2="1024" y2="28" stroke="rgba(56, 189, 248, 0.45)" stroke-width="1.5"/>
    
    <!-- Bottom Stitches -->
    <line x1="0" y1="240" x2="1024" y2="240" stroke="#cbd5e1" stroke-width="4.5" stroke-dasharray="14 8" opacity="0.9"/>
    <line x1="0" y1="228" x2="1024" y2="228" stroke="rgba(56, 189, 248, 0.45)" stroke-width="1.5"/>

    <!-- Repeated Typography Across Strap (Seamless Repeat) -->
    <g fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="52" font-weight="900" letter-spacing="4" text-anchor="middle" dominant-baseline="central">
      
      <!-- Section 1 -->
      <g transform="translate(256, 128)">
        <text x="0" y="0">AMEER<tspan fill="#38bdf8">.DEV</tspan></text>
      </g>
      
      <!-- Star Divider 1 -->
      <polygon points="512,112 517,123 528,128 517,133 512,144 507,133 496,128 507,123" fill="#38bdf8"/>

      <!-- Section 2 -->
      <g transform="translate(768, 128)">
        <text x="0" y="0">BACKEND DEV</text>
      </g>
      
      <!-- Star Divider 2 -->
      <polygon points="1024,112 1029,123 1040,128 1029,133 1024,144 1019,133 1008,128 1019,123" fill="#38bdf8"/>
      <polygon points="0,112 5,123 16,128 5,133 0,144 -5,133 -16,128 -5,123" fill="#38bdf8"/>
    </g>
  </svg>
  `;

  // Render all to disk
  await sharp(Buffer.from(frontSvg)).png().toFile('public/images/id-card-front.png');
  console.log('Saved public/images/id-card-front.png');

  await sharp(Buffer.from(backSvg)).png().toFile('public/images/id-card-back.png');
  console.log('Saved public/images/id-card-back.png');

  await sharp(Buffer.from(strapSvg)).png().toFile('public/assets/lanyard/lanyard_amin.png');
  console.log('Saved public/assets/lanyard/lanyard_amin.png');

  // Also update card_default_texture.png
  const defaultAtlas = await sharp('public/assets/lanyard/card_default_texture.png').toBuffer();
  const frontBuffer = await sharp('public/images/id-card-front.png').resize(839, 1266).toBuffer();
  const backBuffer = await sharp('public/images/id-card-back.png').resize(839, 1269).toBuffer();

  await sharp(defaultAtlas)
    .composite([
      { input: frontBuffer, left: 0, top: 0 },
      { input: backBuffer, left: 839, top: 0 },
    ])
    .png()
    .toFile('public/assets/lanyard/card_default_texture.png');
  console.log('Updated public/assets/lanyard/card_default_texture.png successfully!');
}

buildAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
