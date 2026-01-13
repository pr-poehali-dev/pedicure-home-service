import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Specialist = () => {
  const qualifications = [
    {
      icon: 'GraduationCap',
      title: 'Медицинское образование',
      description: 'Дипломированный специалист с профильным медицинским образованием',
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Регулярное повышение квалификации и участие в профессиональных конференциях',
    },
    {
      icon: 'Users',
      title: '10+ лет опыта',
      description: 'Более 500 довольных клиентов за годы практики',
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантия качества',
      description: 'Использование только сертифицированных материалов и стерильных инструментов',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              О специалисте
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Профессиональный подход к здоровью ваших стоп
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Я — дипломированный специалист по подологии с более чем 10-летним опытом работы. 
            Моя специализация — медицинский педикюр, лечение проблем стоп и ногтей, 
            индивидуальный подход к каждому клиенту.
          </p>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Регулярно повышаю квалификацию, слежу за новейшими методиками и технологиями 
            в области подологии. Работаю с использованием стерильных инструментов 
            и профессиональной аппаратуры.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {qualifications.map((item, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={item.icon as any} className="text-primary" size={20} />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/_a-WYY1IAZelo5EGCYH6aeF7YCokrNjc6kATdqRisRVC5s0l4BNGP3KIgCSwG7QQPrSvNnWQPRIxDujOVk27JJ3M.jpg"
                alt="Специалист подолог"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
