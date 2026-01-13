import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Лечение трещин и гиперкератоза',
      category: 'Медицинский педикюр',
      before: 'https://cdn.poehali.dev/files/6kR5ZZBf39rTfB98P344zEOC4sHtkI0varfjJtAMvJe8KDSzBTiWQ4hSR9tzkqjfgYtRHNohWSWxVObPDPz2XgGd.jpg',
      description: 'Устранение глубоких трещин и огрубевшей кожи пяток за один сеанс',
    },
    {
      id: 2,
      title: 'Коррекция вросшего ногтя',
      category: 'Лечебная процедура',
      before: 'https://cdn.poehali.dev/files/FfDqRCA9wAuOCl5dPEaUoKOc-sBA7iGj3-cfN2pmWplKGFNH0FsG2acOCCakA1LKGjvekKq4c4c5l5KFaX_R8vXV.jpg',
      description: 'Безоперационная коррекция вросших ногтей с установкой корректирующей системы',
    },
    {
      id: 3,
      title: 'Лечение сильного огрубения',
      category: 'Медицинский педикюр',
      before: 'https://cdn.poehali.dev/files/QC216DDaHU9ZoZM0h-M8gYFMNkzoozs0KOMKZyYiZUBZ8b-g6DMs4VB-FSKm_NKsR4i9EtQrIuPj3vxnHkeYQ6U1.jpg',
      description: 'Комплексная обработка стоп с выраженным гиперкератозом',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Примеры работ</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Реальные результаты лечебных процедур наших клиентов
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <Card
            key={item.id}
            className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div onClick={() => setSelectedImage(item.id)}>
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.before}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 backdrop-blur-sm">
                        До/После
                      </Badge>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 text-white">
                        <Icon name="ZoomIn" size={20} />
                        <span className="text-sm font-medium">Увеличить</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl">
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={item.before}
                      alt={item.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Icon name="ImagePlus" className="text-primary" size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-3">Конфиденциальность гарантирована</h3>
          <p className="text-muted-foreground mb-6">
            Все фотографии размещены с согласия клиентов. Мы соблюдаем полную конфиденциальность 
            и публикуем работы только с разрешения пациентов.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" className="text-primary" size={18} />
              <span>Профессиональная съёмка</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" className="text-primary" size={18} />
              <span>Реальные результаты</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" className="text-primary" size={18} />
              <span>Без ретуши</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
