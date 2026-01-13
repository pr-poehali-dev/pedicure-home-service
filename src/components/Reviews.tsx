import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      name: 'Мария Петрова',
      initials: 'МП',
      rating: 5,
      date: '15 января 2026',
      text: 'Прекрасный специалист! Очень деликатный подход, всё объясняет и советует. После медицинского педикюра стопы стали намного лучше. Спасибо за профессионализм!',
    },
    {
      name: 'Анна Смирнова',
      initials: 'АС',
      rating: 5,
      date: '10 января 2026',
      text: 'Обратилась с проблемой вросшего ногтя. Решили вопрос за один сеанс, процедура прошла практически безболезненно. Очень рекомендую!',
    },
    {
      name: 'Елена Ковалёва',
      initials: 'ЕК',
      rating: 5,
      date: '5 января 2026',
      text: 'Удобно, что мастер приезжает на дом. Не нужно никуда ехать, особенно актуально для пожилых людей. Делала педикюр для мамы, она очень довольна!',
    },
    {
      name: 'Ирина Волкова',
      initials: 'ИВ',
      rating: 5,
      date: '28 декабря 2025',
      text: 'Как диабетик, долго искала специалиста, который понимает специфику ухода. Здесь знают своё дело! Аккуратно, стерильно, профессионально.',
    },
    {
      name: 'Ольга Новикова',
      initials: 'ОН',
      rating: 5,
      date: '20 декабря 2025',
      text: 'SPA-педикюр просто волшебный! Такое расслабление и эффект потрясающий. Стопы мягкие как у младенца. Теперь буду ходить регулярно!',
    },
    {
      name: 'Светлана Морозова',
      initials: 'СМ',
      rating: 5,
      date: '15 декабря 2025',
      text: 'Отличный мастер своего дела. Помогла справиться с трещинами на пятках, дала рекомендации по уходу. Результат заметен сразу!',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="Star"
            size={16}
            className={index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Отзывы клиентов</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Что говорят наши клиенты о качестве услуг
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {review.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>

              <div className="mb-3">
                {renderStars(review.rating)}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {review.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-3 rounded-full">
          <Icon name="Star" className="text-primary fill-primary" size={20} />
          <span className="font-semibold text-lg">5.0</span>
          <span className="text-muted-foreground">на основе 500+ отзывов</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
