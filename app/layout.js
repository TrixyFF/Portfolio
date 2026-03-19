import './globals.css';

export const metadata = {
  title: 'Trixy — Cybersecurity & Digital Forensics',
  description:
    'Personal portfolio of Trixy, a Cybersecurity & Digital Forensics student at Temasek Polytechnic. Explore projects in security, forensics, post-quantum cryptography, and more.',
  keywords: ['cybersecurity', 'digital forensics', 'portfolio', 'Temasek Polytechnic', 'OSINT'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
