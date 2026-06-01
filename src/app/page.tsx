'use client'

import { VercelV0Chat } from "@/components/ui/v0-ai-chat"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950">
      <main className="flex-1 flex items-center justify-center">
        <VercelV0Chat />
      </main>
      <footer className="mt-auto py-4 text-center text-neutral-600 text-xs">
        Powered by Z.ai
      </footer>
    </div>
  )
}
