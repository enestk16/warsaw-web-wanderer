
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calendar, Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Friends = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already authenticated in this session
    const authStatus = sessionStorage.getItem('friendsAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'War$aw!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('friendsAuth', 'true');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('friendsAuth');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">Friends Only Area</CardTitle>
            <p className="text-slate-600">Enter password to access private content</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full">
                Access Private Area
              </Button>
            </form>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="w-full mt-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Main Site
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Hey Friends! 👋</h1>
          <div className="space-x-4">
            <Button variant="outline" onClick={() => navigate('/')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Main Site
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Heart className="mr-2 h-5 w-5 text-red-400" />
                Family Moments
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-100">
              <p className="mb-4">Some of my favorite family memories from Warsaw:</p>
              <div className="space-y-2">
                <div className="bg-white/5 p-3 rounded">
                  📸 Family dinner at Restaurant Warszawa - December 2023
                </div>
                <div className="bg-white/5 p-3 rounded">
                  📸 Christmas morning with grandparents - 2023
                </div>
                <div className="bg-white/5 p-3 rounded">
                  📸 Birthday celebration at Łazienki Park - Summer 2023
                </div>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                * Photo gallery coming soon - still organizing all the pics! 📷
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Calendar className="mr-2 h-5 w-5 text-green-400" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-100">
              <p className="mb-4">Mark your calendars! 🗓️</p>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded">
                  <div className="font-semibold">New Year's Party 🎉</div>
                  <div className="text-sm">December 31st, 2024 - My place</div>
                </div>
                <div className="bg-white/5 p-3 rounded">
                  <div className="font-semibold">Study Group Hangout 📚</div>
                  <div className="text-sm">Every Thursday - University Library</div>
                </div>
                <div className="bg-white/5 p-3 rounded">
                  <div className="font-semibold">Weekend Trip Planning 🏔️</div>
                  <div className="text-sm">January 2025 - Location TBD</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Users className="mr-2 h-5 w-5 text-blue-400" />
              Party Memories & Inside Jokes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Epic Party Moments 🎊</h4>
                <div className="space-y-2">
                  <div className="bg-white/5 p-3 rounded">
                    🍕 The Great Pizza Debate of October 2023
                  </div>
                  <div className="bg-white/5 p-3 rounded">
                    🎮 Gaming marathon that lasted until 4 AM
                  </div>
                  <div className="bg-white/5 p-3 rounded">
                    🎸 Karaoke night disaster (but so much fun!)
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Our Inside Jokes 😂</h4>
                <div className="space-y-2">
                  <div className="bg-white/5 p-3 rounded">
                    "That's so Warsaw!" - You know what this means 😉
                  </div>
                  <div className="bg-white/5 p-3 rounded">
                    The legendary "Pierogi Incident" of 2023
                  </div>
                  <div className="bg-white/5 p-3 rounded">
                    Coffee shop code names for different study spots
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-center text-blue-200">
                💫 "Life is better with friends like you all!" 💫
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Friends;
