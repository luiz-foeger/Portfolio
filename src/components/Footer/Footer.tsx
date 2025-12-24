'use client';

import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaBehance } from 'react-icons/fa';
import { AnimatedLogo } from '../AnimatedLogo';

interface LinkItem { label: string; href: string; }
interface SocialItem { icon: React.ElementType; href: string; label: string; }

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks: LinkItem[] = [
    { label: 'Sobre Mim', href: 'https://luizfoeger.vercel.app/' },
    { label: 'Meu Portfólio', href: '#' },
    { label: 'Serviços', href: '#' },
  ];

  const projectLinks: LinkItem[] = [
    { label: 'LD Consultoria', href: 'https://equipeld.com.br' },
    { label: 'CineDev', href: 'https://cinedev-project.vercel.app/' },
    { label: 'EA SPORTS FC™ 24', href: 'https://ea-sports-fc.vercel.app/' },
    { label: 'Academia Equilíbrio', href: 'https://academia-equilibrio.vercel.app/' },
    { label: 'Montch.br®', href: 'https://montch.vercel.app/' },
  ];

  const socialLinks: SocialItem[] = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/luiz-foeger/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/luiz-foeger', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://instagram.com/foeger.dev', label: 'Instagram' },
    { icon: FaBehance, href: 'https://www.behance.net/foeger', label: 'Behance' },
    { icon: FaWhatsapp, href: 'https://wa.me/5527997649105', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr] gap-12 mb-12">

          {/* COLUNA 1: Informações */}
          <div className="flex flex-col items-start gap-8 md:gap-14"> {/* Gap menor no mobile */}

            <div className="w-64 md:w-[340px]">
              <AnimatedLogo />
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
              Desenvolvendo experiências digitais com foco em performance, design e interatividade.
            </p>
          </div>

          {/* COLUNA 2: Navegação */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Navegação</h3>
            <ul className="flex flex-col gap-3">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: Projetos */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Projetos Destaque</h3>
            <ul className="flex flex-col gap-3">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
                    {/* <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors"></span> */}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 4: Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Contato</h3>
            <a href="mailto:foegerluiz@gmail.com" className="text-sm hover:text-white transition-colors">foegerluiz@gmail.com</a>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="bg-neutral-900 p-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Luiz Felipe Föeger dos Santos | Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Privacidade</span>
            <span className="cursor-pointer hover:text-white transition-colors">Termos</span>
          </div>
        </div>

      </div>
    </footer>
  );
}