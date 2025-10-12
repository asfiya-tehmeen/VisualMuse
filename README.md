# Visual Muse

A full-stack AI platform for context-aware creative asset generation.

## Structure
- `/frontend` – React + Tailwind CSS + Axios (UI, live preview, asset management)
- `/backend/node` – Node.js Express API Gateway (routes, orchestrates, Supabase integration)
- `/backend/python` – FastAPI (AI integrations: Gemini, NanoBanana, Canva MCP)
- `/backend/supabase_setup.sql` – SQL for Supabase tables/buckets

## Setup
1. Copy `.env.example` to `.env` in each subfolder and fill in API keys.
2. Run `supabase_setup.sql` in your Supabase SQL editor.
3. Install dependencies and start each service (see subfolder README.md files).

## Features
- Context-aware text and image generation
- Brand kit integration
- Live preview and export
- Multi-platform asset export (PNG, PDF)
- Supabase storage for assets and history

---
See subfolder README.md files for more details.