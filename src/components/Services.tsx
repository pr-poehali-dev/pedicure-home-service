import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      title: 'Классический педикюр',
      price: '1 100 - 1 500 ₽',
      duration: '1-1,5 часа',
      description: 'Базовый уход: обработка стоп, кутикулы, ногтей; удаление огрубевшей кожи. Подходит для здоровых ног без выраженных проблем.',
      icon: 'Sparkles',
      popular: false,
    },
    {
      title: 'Аппаратный педикюр',
      price: '1 500 - 2 000 ₽',
      duration: '1-1,5 часа',
      description: 'Обработка специальными фрезами без замачивания. Более щадящий и точный метод. Рекомендован при сухой коже и диабетической стопе.',
      icon: 'Zap',
      popular: true,
    },
    {
      title: 'Медицинский педикюр',
      price: '3 800 - 5 500 ₽',
      duration: '1,5-2 часа',
      description: 'Лечебная процедура для стоп с патологиями: гиперкератоз, трещины, грибок, деформированные ногти. Включает диагностику и коррекцию.',
      icon: 'Stethoscope',
      popular: false,
    },
    {
      title: 'Педикюр для диабетиков',
      price: '3 300 - 4 400 ₽',
      duration: '1-1,5 часа',
      description: 'Специализированный уход для пациентов с сахарным диабетом. Минимальная травматизация, профилактика трещин и инфекций.',
      icon: 'Heart',
      popular: false,
    },
    {
      title: 'SPA-педикюр',
      price: '2 500 - 3 500 ₽',
      duration: '1,5-2 часа',
      description: 'Комплексный уход: пилинг, маска, парафинотерапия, массаж. Глубокое увлажнение, расслабление, ароматтерапия.',
      icon: 'Flower',
      popular: false,
    },
    {
      title: 'Обработка мозолей/трещин',
      price: '600 - 1 000 ₽',
      duration: '20-40 мин',
      description: 'Локальная коррекция: удаление стержневых мозолей, шлифовка трещин. Применение кератолитиков и защитных пластырей.',
      icon: 'Wrench',
      popular: false,
    },
    {
      title: 'Парафинотерапия',
      price: '800 - 1 200 ₽',
      duration: '30-40 мин',
      description: 'Нанесение тёплого парафина для глубокого увлажнения. Смягчение кожи, уменьшение сухости, снятие усталости.',
      icon: 'Droplet',
      popular: false,
    },
    {
      title: 'Консультация подолога',
      price: '1 600 - 2 000 ₽',
      duration: '30-60 мин',
      description: 'Диагностика состояния стоп и ногтей. Выявление причин проблем. Рекомендации по уходу и подбору обуви.',
      icon: 'MessageSquare',
      popular: false,
    },
    {
      title: 'Коррекция вросшего ногтя',
      price: '1 000 - 2 000 ₽',
      duration: '30-60 мин',
      description: 'Безоперационное удаление врастающего края. Антисептическая обработка, профилактика рецидивов.',
      icon: 'Scissors',
      popular: false,
    },
    {
      title: 'Установка корректирующих систем',
      price: 'от 3 800 ₽',
      duration: '40-60 мин',
      description: 'Монтаж скоб/пластин для исправления врастающих или деформированных ногтей. Требуется контроль в процессе ношения.',
      icon: 'Settings',
      popular: false,
    },
    {
      title: 'Протезирование ногтей',
      price: '1 100 - 2 700 ₽',
      duration: '40-90 мин',
      description: 'Восстановление эстетики после травм, операций, грибковых поражений. Индивидуальная подгонка под форму натурального ногтя.',
      icon: 'Shield',
      popular: false,
    },
    {
      title: 'Изготовление ортопедических стелек',
      price: 'от 1 500 ₽',
      duration: '30-60 мин',
      description: 'Индивидуальный подбор или изготовление по слепку. Коррекция плоскостопия, разгрузка проблемных зон.',
      icon: 'Footprints',
      popular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Профессиональный уход за стопами с выездом к вам на дом. Все процедуры проводятся 
          с использованием стерильных инструментов
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in relative"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {service.popular && (
              <Badge className="absolute -top-2 -right-2 z-10">Популярно</Badge>
            )}
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={service.icon as any} className="text-primary" size={24} />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-lg font-semibold text-primary">
                {service.price}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">{service.description}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>{service.duration}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-2xl animate-fade-in">
        <h3 className="text-xl font-semibold mb-4">Дополнительная информация</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
            <span>Выезд на дом включен в стоимость услуг в пределах города</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
            <span>Сложные случаи: цена увеличивается на 20-50% из-за повышенной трудоёмкости</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
            <span>Скидки для постоянных клиентов (5-15%) и при записи на пакет процедур</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
            <span>Все расходные материалы включены в стоимость</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
