import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const { toast } = useToast();

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
  ];

  const services = [
    'Классический педикюр',
    'Аппаратный педикюр',
    'Медицинский педикюр',
    'Педикюр для диабетиков',
    'SPA-педикюр',
    'Обработка мозолей/трещин',
    'Парафинотерапия',
    'Консультация подолога',
    'Коррекция вросшего ногтя',
    'Установка корректирующих систем',
    'Протезирование ногтей',
    'Изготовление ортопедических стелек',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !selectedService || !name || !phone || !address) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: `Спасибо, ${name}! Мы свяжемся с вами в ближайшее время для подтверждения записи.`,
    });

    setSelectedTime('');
    setSelectedService('');
    setName('');
    setPhone('');
    setAddress('');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Запись на приём</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Выберите удобную дату и время, и мы приедем к вам на дом
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Calendar" size={24} />
              Выберите дату и время
            </CardTitle>
            <CardDescription>
              Доступные слоты для записи
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date() || date.getDay() === 0}
                className="rounded-md border"
              />
            </div>

            {date && (
              <div className="space-y-3">
                <Label>Выберите время</Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? 'default' : 'outline'}
                      onClick={() => setSelectedTime(time)}
                      className="w-full"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileText" size={24} />
              Данные для записи
            </CardTitle>
            <CardDescription>
              Укажите контактную информацию
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="service">Услуга *</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  placeholder="Введите ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Адрес выезда *</Label>
                <Input
                  id="address"
                  placeholder="Укажите адрес для выезда"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              {date && selectedTime && (
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium mb-2">Выбрано:</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>📅 {date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <p>🕐 {selectedTime}</p>
                    {selectedService && <p>💼 {selectedService}</p>}
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                После отправки заявки мы свяжемся с вами для подтверждения записи
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="MapPin" className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Выезд по городу</h3>
            <p className="text-sm text-muted-foreground">
              Бесплатный выезд в пределах города
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Удобное время</h3>
            <p className="text-sm text-muted-foreground">
              Работаем с 9:00 до 21:00, включая выходные
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheck" className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Безопасность</h3>
            <p className="text-sm text-muted-foreground">
              Все инструменты стерильные и одноразовые
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;
