export const mockData = {
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      about: 'About',
      services: 'Services',
      clients: 'Clients',
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      tagline: 'We turn ideas into videos that connect.',
      subtitle: 'Cinematic storytelling that moves audiences',
      cta: 'View Portfolio'
    },
    portfolio: {
      title: 'Our Work',
      subtitle: 'Every frame tells a story',
      videos: [
        {
          id: 1,
          title: 'Brand Story',
          category: 'Commercial',
          thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
          duration: '2:30'
        },
        {
          id: 2,
          title: 'Product Launch',
          category: 'Tech',
          thumbnail: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80',
          duration: '1:45'
        },
        {
          id: 3,
          title: 'Documentary',
          category: 'Film',
          thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
          duration: '3:15'
        },
        {
          id: 4,
          title: 'Music Video',
          category: 'Music',
          thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
          duration: '2:00'
        },
        {
          id: 5,
          title: 'Social Campaign',
          category: 'Social',
          thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
          duration: '0:45'
        },
        {
          id: 6,
          title: 'Event Coverage',
          category: 'Event',
          thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
          duration: '4:00'
        }
      ]
    },
    about: {
      title: 'About Us',
      subtitle: 'Crafting visual experiences',
      description: 'We are a team of passionate storytellers, editors, and visual artists dedicated to bringing your vision to life through the power of video.',
      timeline: [
        { year: '2020', event: 'First client' },
        { year: '2021', event: '50+ Projects Delivered' },
        { year: '2023', event: 'International Recognition' },
        { year: '2025', event: 'Over 150 million views' }
      ],
      team: [
        { name: 'Gustavo Henrique', role: 'Co-Founder & Creative Director', image: 'https://i.ibb.co/3YTLpwcq/nano-banana-2025-10-20-T18-05-23.png' },
        { name: 'Guilherme Duarte', role: 'Co-Founder & Studio Director', image: 'https://i.ibb.co/7t4snnDX/nano-banana-2025-10-20-T18-11-10.png' },

      ]
    },
    services: {
      title: 'Services',
      subtitle: 'What we do best',
      items: [
        {
          id: 1,
          title: 'Commercial Editing',
          description: 'Transform raw footage into compelling brand stories',
          icon: 'Film',
          preview: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80'
        },
        {
          id: 2,
          title: 'Color Grading',
          description: 'Professional color correction and cinematic looks',
          icon: 'Palette',
          preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80'
        },
        {
          id: 3,
          title: 'Motion Graphics',
          description: 'Dynamic animations that bring ideas to life',
          icon: 'Sparkles',
          preview: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80'
        },
        {
          id: 4,
          title: 'Sound Design',
          description: 'Immersive audio that completes the experience',
          icon: 'Music',
          preview: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80'
        },
        {
          id: 5,
          title: 'Documentary',
          description: 'Authentic storytelling for meaningful narratives',
          icon: 'Video',
          preview: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80'
        },
        {
          id: 6,
          title: 'Social Content',
          description: 'Engaging shorts optimized for social platforms',
          icon: 'Share2',
          preview: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80'
        }
      ]
    },
    testimonials: {
      title: 'What Clients Say',
      subtitle: 'Trusted by brands worldwide',
      items: [
        {
          id: 1,
          quote: 'Their attention to detail and creative vision transformed our brand story into something truly magical.',
          author: 'Sarah Johnson',
          company: 'TechCorp',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
        },
        {
          id: 2,
          quote: 'Working with this team was seamless. They understood our vision and delivered beyond expectations.',
          author: 'Michael Lee',
          company: 'Creative Studio',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
        },
        {
          id: 3,
          quote: 'The final product was stunning. Every cut, every transition was perfectly timed.',
          author: 'Emma Davis',
          company: 'Fashion Brand',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'
        }
      ]
    },
    blog: {
      title: 'Behind the Edit',
      subtitle: 'Insights from our studio',
      posts: [
        {
          id: 1,
          title: 'The Art of Pacing',
          excerpt: 'How rhythm and timing create emotional impact',
          date: '2024-01-15',
          image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80',
          category: 'Technique'
        },
        {
          id: 2,
          title: 'Color Psychology in Video',
          excerpt: 'Understanding how color influences viewer perception',
          date: '2024-01-10',
          image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80',
          category: 'Color'
        },
        {
          id: 3,
          title: 'Music & Mood',
          excerpt: 'Choosing the perfect soundtrack for your story',
          date: '2024-01-05',
          image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
          category: 'Sound'
        }
      ]
    },
    contact: {
      title: 'Let\'s Create Together',
      subtitle: 'Ready to bring your vision to life?',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Tell us about your project',
        submit: 'Send Message'
      },
      social: {
        whatsapp: '11 96 42 46 388',
        instagram: '@prod.lora'
      }
    },
    footer: {
      tagline: 'Cut. Rhythm. Emotion.',
      copyright: '2024 LoRa Studio. All rights reserved.'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      portfolio: 'Portfólio',
      about: 'Sobre',
      services: 'Serviços',
      clients: 'Clientes',
      blog: 'Blog',
      contact: 'Contato'
    },
    hero: {
      tagline: 'Transformamos ideias em vídeos que conectam.',
      subtitle: 'Narrativas cinematográficas que movem audiências',
      cta: 'Ver Portfólio'
    },
    portfolio: {
      title: 'Nosso Trabalho',
      subtitle: 'Cada frame conta uma história',
      videos: [
        {
          id: 1,
          title: 'História da Marca',
          category: 'Comercial',
          thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
          duration: '2:30'
        },
        {
          id: 2,
          title: 'Lançamento de Produto',
          category: 'Tech',
          thumbnail: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80',
          duration: '1:45'
        },
        {
          id: 3,
          title: 'Documentário',
          category: 'Filme',
          thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
          duration: '3:15'
        },
        {
          id: 4,
          title: 'Videoclipe',
          category: 'Música',
          thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
          duration: '2:00'
        },
        {
          id: 5,
          title: 'Campanha Social',
          category: 'Social',
          thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
          duration: '0:45'
        },
        {
          id: 6,
          title: 'Cobertura de Evento',
          category: 'Evento',
          thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
          duration: '4:00'
        }
      ]
    },
    about: {
      title: 'Sobre Nós',
      subtitle: 'Criando experiências visuais',
      description: 'Somos uma equipe de contadores de histórias apaixonados, editores e artistas visuais dedicados a dar vida à sua visão através do poder do vídeo.',
      timeline: [
        { year: '2018', event: 'Fundação do Estúdio' },
        { year: '2019', event: '50+ Projetos Entregues' },
        { year: '2021', event: 'Reconhecimento Internacional' },
        { year: '2023', event: '200+ Clientes Satisfeitos' }
      ],
      team: [
        { name: 'Alex Rivera', role: 'Diretor Criativo', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
        { name: 'Maria Santos', role: 'Editora Chefe', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
        { name: 'James Chen', role: 'Colorista', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' }
      ]
    },
    services: {
      title: 'Serviços',
      subtitle: 'O que fazemos de melhor',
      items: [
        {
          id: 1,
          title: 'Edição Comercial',
          description: 'Transforme imagens brutas em histórias de marca convincentes',
          icon: 'Film',
          preview: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80'
        },
        {
          id: 2,
          title: 'Correção de Cor',
          description: 'Correção profissional e looks cinematográficos',
          icon: 'Palette',
          preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80'
        },
        {
          id: 3,
          title: 'Motion Graphics',
          description: 'Animações dinâmicas que dão vida às ideias',
          icon: 'Sparkles',
          preview: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80'
        },
        {
          id: 4,
          title: 'Design de Som',
          description: 'Áudio imersivo que completa a experiência',
          icon: 'Music',
          preview: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80'
        },
        {
          id: 5,
          title: 'Documentário',
          description: 'Narrativas autênticas e significativas',
          icon: 'Video',
          preview: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80'
        },
        {
          id: 6,
          title: 'Conteúdo Social',
          description: 'Shorts envolventes otimizados para redes sociais',
          icon: 'Share2',
          preview: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80'
        }
      ]
    },
    testimonials: {
      title: 'O Que Dizem os Clientes',
      subtitle: 'Confiança de marcas em todo o mundo',
      items: [
        {
          id: 1,
          quote: 'A atenção aos detalhes e visão criativa transformaram nossa história de marca em algo verdadeiramente mágico.',
          author: 'Sarah Johnson',
          company: 'TechCorp',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
        },
        {
          id: 2,
          quote: 'Trabalhar com esta equipe foi perfeito. Eles entenderam nossa visão e entregaram além das expectativas.',
          author: 'Michael Lee',
          company: 'Creative Studio',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
        },
        {
          id: 3,
          quote: 'O produto final foi impressionante. Cada corte, cada transição foi perfeitamente cronometrado.',
          author: 'Emma Davis',
          company: 'Fashion Brand',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'
        }
      ]
    },
    blog: {
      title: 'Por Trás da Edição',
      subtitle: 'Insights do nosso estúdio',
      posts: [
        {
          id: 1,
          title: 'A Arte do Ritmo',
          excerpt: 'Como ritmo e timing criam impacto emocional',
          date: '2024-01-15',
          image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80',
          category: 'Técnica'
        },
        {
          id: 2,
          title: 'Psicologia das Cores em Vídeo',
          excerpt: 'Entendendo como a cor influencia a percepção do espectador',
          date: '2024-01-10',
          image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80',
          category: 'Cor'
        },
        {
          id: 3,
          title: 'Música & Atmosfera',
          excerpt: 'Escolhendo a trilha sonora perfeita para sua história',
          date: '2024-01-05',
          image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
          category: 'Som'
        }
      ]
    },
    contact: {
      title: 'Vamos Criar Juntos',
      subtitle: 'Pronto para dar vida à sua visão?',
      form: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Conte-nos sobre seu projeto',
        submit: 'Enviar Mensagem'
      },
      social: {
        whatsapp: '11 96 42 46 388',
        instagram: '@prod.lora'
      }
    },
    footer: {
      tagline: 'Corte. Ritmo. Emoção.',
      copyright: '2024 LoRa Studio. Todos os direitos reservados.'
    }
  }
};