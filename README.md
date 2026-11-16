# BarberFlow — Agenda Online para Barbearia

MVP de agendamento online construído com **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Supabase (PostgreSQL)**, **Zod**, **date-fns / date-fns-tz** e **Vitest**.

## 1. Configurar o Supabase

1. Crie um projeto gratuito em [supabase.com](https://supabase.com).
2. No painel do projeto, abra **SQL Editor** > **New query**.
3. Copie e execute o conteúdo do arquivo `supabase/migrations/20261116000000_init_barberflow.sql`.
4. Vá em **Project Settings** > **API** e copie:
   - `Project URL` (`NEXT_PUBLIC_SUPABASE_URL`)
   - `anon public` (`NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - `service_role` (`SUPABASE_SERVICE_ROLE_KEY`)
5. Crie o arquivo `.env.local` na raiz do projeto a partir do `.env.example`:

```bash
cp .env.example .env.local