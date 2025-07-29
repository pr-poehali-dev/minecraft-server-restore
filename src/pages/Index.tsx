import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [players, setPlayers] = useState({ current: 12, max: 50 });
  const [performance, setPerformance] = useState({ cpu: 45, ram: 78, tps: 19.8 });

  // Симулируем живые данные
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers(prev => ({
        ...prev,
        current: Math.floor(Math.random() * 15) + 8
      }));
      setPerformance(prev => ({
        cpu: Math.floor(Math.random() * 30) + 30,
        ram: Math.floor(Math.random() * 20) + 65,
        tps: parseFloat((Math.random() * 2 + 18.5).toFixed(1))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-orbitron text-white">MINECRAFT SERVER</h1>
                <p className="text-slate-400">GAMING4FREE Hosting</p>
              </div>
            </div>
            <Badge 
              variant={isOnline ? "default" : "destructive"} 
              className={`px-4 py-2 text-sm font-semibold ${
                isOnline 
                  ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border-red-500/30'
              }`}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${isOnline ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              {isOnline ? 'ОНЛАЙН' : 'ОФФЛАЙН'}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Server Control Panel */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-orbitron text-green-400 text-xl flex items-center gap-2">
              <Icon name="Power" size={24} />
              УПРАВЛЕНИЕ СЕРВЕРОМ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                onClick={() => setIsOnline(true)}
              >
                <Icon name="Play" size={20} className="mr-2" />
                ЗАПУСТИТЬ
              </Button>
              <Button 
                variant="destructive"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                onClick={() => setIsOnline(false)}
              >
                <Icon name="Square" size={20} className="mr-2" />
                ОСТАНОВИТЬ
              </Button>
              <Button 
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <Icon name="RotateCcw" size={20} className="mr-2" />
                ПЕРЕЗАПУСК
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Players Online */}
          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-400 font-orbitron text-sm flex items-center gap-2">
                <Icon name="Users" size={16} />
                ИГРОКИ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {players.current}/{players.max}
              </div>
              <Progress 
                value={(players.current / players.max) * 100} 
                className="mt-2 h-2 bg-slate-700"
              />
            </CardContent>
          </Card>

          {/* CPU Usage */}
          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-700/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-green-400 font-orbitron text-sm flex items-center gap-2">
                <Icon name="Cpu" size={16} />
                CPU
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{performance.cpu}%</div>
              <Progress 
                value={performance.cpu} 
                className="mt-2 h-2 bg-slate-700"
              />
            </CardContent>
          </Card>

          {/* RAM Usage */}
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-700/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-400 font-orbitron text-sm flex items-center gap-2">
                <Icon name="HardDrive" size={16} />
                RAM
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{performance.ram}%</div>
              <Progress 
                value={performance.ram} 
                className="mt-2 h-2 bg-slate-700"
              />
            </CardContent>
          </Card>

          {/* TPS */}
          <Card className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-yellow-700/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-400 font-orbitron text-sm flex items-center gap-2">
                <Icon name="Gauge" size={16} />
                TPS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{performance.tps}</div>
              <div className="text-xs text-slate-400 mt-1">тиков/сек</div>
            </CardContent>
          </Card>
        </div>

        {/* World Map & Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* World Map */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-orbitron text-cyan-400 text-xl flex items-center gap-2">
                <Icon name="Map" size={24} />
                КАРТА МИРА
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/img/facd39d3-6e82-4ad5-93c5-931d871ec3ae.jpg" 
                  alt="Карта мира Minecraft"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-center text-white">
                    <span className="text-sm">Размер: 2000x2000</span>
                    <Button 
                      size="sm" 
                      className="bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      <Icon name="ExternalLink" size={14} className="mr-1" />
                      Открыть
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Server Rules */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-orbitron text-pink-400 text-xl flex items-center gap-2">
                <Icon name="Shield" size={24} />
                ПРАВИЛА СЕРВЕРА
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  'Запрещен гриф и воровство',
                  'Уважайте других игроков',
                  'Не используйте читы и модификации',
                  'Не стройте рядом с чужими постройками',
                  'Запрещена реклама других серверов',
                  'Используйте адекватные ники'
                ].map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-pink-400 text-xs font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Server Info */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-orbitron text-white text-xl flex items-center gap-2">
              <Icon name="Info" size={24} />
              ИНФОРМАЦИЯ О СЕРВЕРЕ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-green-400">IP Адрес</h3>
                <p className="text-white bg-slate-700/50 px-3 py-2 rounded font-mono">mc.gaming4free.ru</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-green-400">Версия</h3>
                <p className="text-white">Minecraft 1.20.4</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-green-400">Режим</h3>
                <p className="text-white">Survival, PvP</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;