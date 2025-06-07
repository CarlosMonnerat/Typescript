import Product from "../model/Product";

 const products: Product [] = [
  {
   id: 1,
   name: 'Smartphone Alpha One',
   price: 2599.9,
   description: 'Smartphone com tela AMOLED de 6.7", 256GB de armazenamento, 8GB de RAM e câmera tripla de 64MP',
   image: 'https://images.pexels.com/photos/27635789/pexels-photo-27635789/free-photo-of-smartphone-tecnologia-exibicao-visor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
   },
   {
    id: 2,
    name: 'Notebook Pro 15',
    price: 5499.9,
    description: 'Notebook com tela de 15 polegadas, Intel i7, 16GB RAM, SSD 512GB',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Fone Bluetooth X100',
    price: 299.9,
    description: 'Fone de ouvido bluetooth com cancelamento de ruído',
    image: 'https://images.pexels.com/photos/10958687/pexels-photo-10958687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Smartwatch Series 5',
    price: 1199.0,
    description: 'Relógio inteligente com monitoramento de saúde e GPS',
    image: 'https://images.pexels.com/photos/31541471/pexels-photo-31541471/free-photo-of-smartwatch-com-aplicativos-coloridos-na-tela.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Tablet Ultra 10',
    price: 2399.5,
    description: 'Tablet de 10.1", 64GB, ideal para leitura e vídeos',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Teclado Mecânico RGB',
    price: 349.9,
    description: 'Teclado mecânico com iluminação RGB e switches azuis',
    image: 'https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    name: 'Mouse Gamer Precision',
    price: 199.9,
    description: 'Mouse com 16000 DPI e botões programáveis',
    image: 'https://images.pexels.com/photos/28779687/pexels-photo-28779687/free-photo-of-mouse-gamer-futurista-em-tapete-de-alta-tecnologia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    name: 'Monitor 4K UltraWide',
    price: 2899.0,
    description: 'Monitor 4K UltraWide de 34 polegadas, ideal para produtividade',
    image: 'https://images.pexels.com/photos/1714204/pexels-photo-1714204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 9,
    name: 'Webcam HD 1080p',
    price: 349.0,
    description: 'Webcam com resolução Full HD, ideal para videoconferências',
    image: 'https://images.pexels.com/photos/28374509/pexels-photo-28374509/free-photo-of-lente-de-camera-de-seguranca-webcam-luzes-de-neon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 10,
    name: 'Caixa de Som Bluetooth',
    price: 499.9,
    description: 'Caixa de som portátil com som potente e bateria de longa duração',
    image: 'https://images.pexels.com/photos/4917455/pexels-photo-4917455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 11,
    name: 'HD Externo 2TB',
    price: 399.9,
    description: 'HD portátil com 2TB de capacidade e conexão USB 3.0',
    image: 'https://images.pexels.com/photos/11216304/pexels-photo-11216304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 12,
    name: 'SSD NVMe 1TB',
    price: 699.0,
    description: 'SSD ultra-rápido NVMe com 1TB de capacidade',
    image: 'https://images.pexels.com/photos/28666524/pexels-photo-28666524/free-photo-of-ssd-nvme-de-alto-desempenho-em-superficie-cinza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 13,
    name: 'Roteador Wi-Fi 6',
    price: 799.0,
    description: 'Roteador com suporte ao padrão Wi-Fi 6 para conexões mais rápidas',
    image: 'https://images.pexels.com/photos/28348054/pexels-photo-28348054/free-photo-of-dispositivo-roteador-de-rede-sem-fio-residencial-inteligente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 14,
    name: 'Headset Gamer Surround',
    price: 599.0,
    description: 'Headset com som surround 7.1 e microfone com cancelamento de ruído',
    image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg'
  },
  {
    id: 15,
    name: 'Carregador Sem Fio',
    price: 149.9,
    description: 'Base de carregamento sem fio compatível com Qi',
    image: 'https://images.pexels.com/photos/18589085/pexels-photo-18589085/free-photo-of-alto-falante-megafone-dispositivo-aparelho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 16,
    name: 'Drone Compacto 4K',
    price: 3499.0,
    description: 'Drone com câmera 4K e estabilização de imagem',
    image: 'https://images.pexels.com/photos/6145874/pexels-photo-6145874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 17,
    name: 'Câmera de Ação',
    price: 999.0,
    description: 'Câmera de ação à prova d’água com gravação em 4K',
    image: 'https://images.pexels.com/photos/6370373/pexels-photo-6370373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 18,
    name: 'Pen Drive 128GB',
    price: 89.9,
    description: 'Pen Drive USB 3.1 de 128GB de alta velocidade',
    image: 'https://images.pexels.com/photos/18641665/pexels-photo-18641665/free-photo-of-memoria-lembranca-acessorio-pequeno.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 19,
    name: 'Smart TV 50"',
    price: 2999.9,
    description: 'Smart TV 4K com acesso a apps e assistente de voz',
    image: 'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 20,
    name: 'Cadeira Gamer Confort',
    price: 1399.0,
    description: 'Cadeira ergonômica com suporte lombar e encosto reclinável',
    image: 'https://images.pexels.com/photos/13871187/pexels-photo-13871187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export default products;

