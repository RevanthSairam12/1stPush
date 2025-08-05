'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStudentAuth } from '@/contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { Loader2, Crown, User, Mail, Hash } from 'lucide-react'

export default function StudentLoginPage() {
  const { studentLogin, isLoading, student, isStudentAuthenticated } = useStudentAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [formData, setFormData] = useState({
    emailOrRoll: '',
    password: ''
  })

  // Redirect if already authenticated
  useEffect(() => {
    if (isStudentAuthenticated && student) {
      console.log('Already authenticated, redirecting to dashboard')
      router.push('/dashboard')
    }
  }, [isStudentAuthenticated, student, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.emailOrRoll.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your email or roll number',
        variant: 'destructive'
      })
      return
    }

    try {
      console.log('Attempting login with:', formData.emailOrRoll)
      const result = await studentLogin(formData.emailOrRoll, formData.password || 'demo')
      console.log('Login result:', result)

      if (result.success) {
        toast({
          title: 'Success!',
          description: 'Welcome to your dashboard',
        })
        console.log('Login successful, redirecting to dashboard...')

        // Wait a bit for the auth state to update, then redirect
        setTimeout(() => {
          console.log('Performing redirect to dashboard')
          router.push('/dashboard')
        }, 500)
      } else {
        console.error('Login failed:', result.error)
        toast({
          title: 'Login Failed',
          description: result.error || 'Invalid credentials',
          variant: 'destructive'
        })
      }
    } catch (error) {
      console.error('Login error:', error)
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive'
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Demo accounts for testing
  const demoAccounts = [
    { name: 'Arjun Sharma', email: 'arjun.sharma@raghuenggcollege.in', roll: '23981A001', role: 'Team Leader' },
    { name: 'Priya Patel', email: 'priya.patel@raghuenggcollege.in', roll: '23981A002', role: 'Team Leader' },
    { name: 'Rohan Verma', email: 'rohan.verma@raghuenggcollege.in', roll: '23981A011', role: 'Member' },
    { name: 'Kavya Menon', email: 'kavya.menon@raghuenggcollege.in', roll: '23981A012', role: 'Member' },
    { name: 'Nikhil Pandey', email: 'nikhil.pandey@raghuenggcollege.in', roll: '23981A015', role: 'Individual' }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundColor: 'hsl(240 10% 3.9%)',
      color: 'hsl(0 0% 98%)',
      '--background': '240 10% 3.9%',
      '--foreground': '0 0% 98%',
      '--card': '240 10% 3.9%',
      '--card-foreground': '0 0% 98%',
      '--primary': '263 70% 50%',
      '--primary-foreground': '0 0% 98%',
      '--muted': '240 3.7% 15.9%',
      '--muted-foreground': '240 5% 64.9%',
      '--border': '240 3.7% 15.9%'
    } as React.CSSProperties}>
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-primary opacity-10 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-accent opacity-8 blur-xl animate-pulse delay-1000" />
      
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h1 className="text-3xl font-bold text-gradient-primary">E-Cell REC</h1>
            </div>
            <h2 className="text-xl font-semibold text-foreground">Student Dashboard Login</h2>
            <p className="text-muted-foreground">Access your entrepreneurship journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Login Form */}
            <Card className="card-dark dashboard-card-hover">
              <CardHeader>
                <CardTitle>Login to Dashboard</CardTitle>
                <CardDescription>
                  Enter your college email or roll number to access your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="emailOrRoll">Email or Roll Number</Label>
                    <Input
                      id="emailOrRoll"
                      name="emailOrRoll"
                      type="text"
                      placeholder="your.email@raghuenggcollege.in or 23981A001"
                      value={formData.emailOrRoll}
                      onChange={handleInputChange}
                      className="input-dark"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter password (demo: any password works)"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="input-dark"
                    />
                    <p className="text-xs text-muted-foreground">
                      For demo purposes, any password will work
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full button-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging in...
                      </>
                    ) : (
                      'Login to Dashboard'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Demo Accounts */}
            <Card className="card-dark dashboard-card-hover">
              <CardHeader>
                <CardTitle>Demo Accounts</CardTitle>
                <CardDescription>
                  Click on any account below to quickly login and test the dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {demoAccounts.map((account, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
                    onClick={() => setFormData({ emailOrRoll: account.email, password: 'demo' })}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        {account.role === 'Team Leader' ? (
                          <Crown className="h-4 w-4 text-yellow-500" />
                        ) : (
                          <User className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{account.name}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {account.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Hash className="h-3 w-3" />
                            {account.roll}
                          </span>
                        </div>
                        <p className="text-xs text-primary">{account.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <Card className="card-dark">
            <CardContent className="p-4">
              <div className="text-center space-y-2">
                <h3 className="font-semibold">Testing Instructions</h3>
                <p className="text-sm text-muted-foreground">
                  Use any of the demo accounts above to test different user roles and dashboard features. 
                  Team Leaders can manage ideas and teams, while Members can view team information and submit individual ideas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
