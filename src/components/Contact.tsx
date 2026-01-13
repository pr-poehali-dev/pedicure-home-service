import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@podolog-dom.ru',
      link: 'mailto:info@podolog-dom.ru',
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+7 (999) 123-45-67',
      link: 'https://wa.me/79991234567',
    },
    {
      icon: 'Send',
      title: 'Telegram',
      value: '@podolog_dom',
      link: 'https://t.me/podolog_dom',
    },
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', hours: '9:00 - 21:00' },
    { day: 'Суббота', hours: '10:00 - 20:00' },
    { day: 'Воскресенье', hours: '10:00 - 18:00' },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Контакты</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Свяжитесь с нами удобным способом
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="Info" size={24} className="text-primary" />
                Контактная информация
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={item.icon as any} className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  График работы
                </h4>
                <div className="space-y-2">
                  {workingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Зона обслуживания</h3>
              <p className="text-muted-foreground mb-6">
                Осуществляем выезд на дом в пределах города и ближайших районов. 
                Для уточнения возможности выезда в ваш район свяжитесь с нами.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Бесплатный выезд</p>
                    <p className="text-sm text-muted-foreground">В пределах 10 км от центра</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Быстрый выезд</p>
                    <p className="text-sm text-muted-foreground">В течение 30-60 минут</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Все с собой</p>
                    <p className="text-sm text-muted-foreground">Привезем все необходимое оборудование</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('booking');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на приём
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Остались вопросы?</h3>
              <p className="text-muted-foreground mb-4">
                Свяжитесь с нами любым удобным способом, и мы с радостью ответим на все ваши вопросы
              </p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://t.me/podolog_dom" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="tel:+79991234567">
                    <Icon name="Phone" size={20} />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
