'use client';

import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold">Lukita AI</div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Building Your Financial Future</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Lukita AI is crafting an intelligent financial assistant to transform how you manage your money.
          </p>
          <a
            href={apiUrl}
            className="inline-block px-6 py-3 mb-8 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>

          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Lukita AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
