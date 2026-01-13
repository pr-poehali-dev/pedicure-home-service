import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Профессиональный уход на дому
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Подологические <br />
              <span className="text-primary">услуги</span> с выездом
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Медицинский педикюр, лечение вросших ногтей и профессиональный уход 
              за стопами в комфортной домашней обстановке
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToBooking} className="gap-2 text-lg">
                <Icon name="Calendar" size={20} />
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Услуги и цены
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">3.5</div>
                <div className="text-sm text-muted-foreground">года опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">стерильность</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/_a-WYY1IAZelo5EGCYH6aeF7YCokrNjc6kATdqRisRVC5s0l4BNGP3KIgCSwG7QQPrSvNnWQPRIxDujOVk27JJ3M.jpg"
                alt="Профессиональный подолог"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Сертифицированный специалист</div>
                  <div className="text-sm text-muted-foreground">Медицинское образование</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;