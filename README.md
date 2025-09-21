# Mailify - Smart Email Summarizer App

A full-stack web application that allows users to store, manage, and get AI-generated summaries of emails with automatic classification.

## 🚀 Features

- **Secure Authentication**: NextAuth.js with Google OAuth and email/password login
- **Email Management**: Add, view, and organize emails
- **AI Summarization**: Get 2-3 line summaries of long emails using OpenAI GPT
- **Smart Classification**: Automatic tagging as Urgent, Informative, or Spam
- **Search & Filter**: Find emails by content and filter by tags
- **Responsive Design**: Beautiful UI with Tailwind CSS
- **Real-time Updates**: Regenerate summaries on demand

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: MongoDB with Prisma ORM
- **Authentication**: NextAuth.js
- **AI**: OpenAI API (GPT-3.5-turbo)
- **Deployment**: Vercel + MongoDB Atlas

## 📋 Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account
- OpenAI API key
- Google OAuth credentials (optional)

## 🚀 Local Development Setup

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd Mailify
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/mailify?retryWrites=true&w=majority"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# OpenAI API
OPENAI_API_KEY="your-openai-api-key"
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with sample data
npm run db:seed
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🌐 Deployment

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to your environment variables

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

```env
DATABASE_URL="your-mongodb-atlas-connection-string"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-app.vercel.app"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
OPENAI_API_KEY="your-openai-api-key"
```

## 👤 Demo User

For quick testing, use the seeded demo account:
- **Email**: demo@mailify.com
- **Password**: demo123

The demo account comes with 5 sample emails showcasing different features.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/
│   │   ├── emails/
│   │   └── register/
│   ├── auth/
│   │   ├── signin/
│   │   └── signup/
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AddEmailForm.tsx
│   └── EmailCard.tsx
lib/
├── auth.ts
├── ai.ts
└── prisma.ts
prisma/
├── schema.prisma
└── seed.js
types/
└── next-auth.d.ts
```

## 🔧 API Endpoints

- `POST /api/register` - User registration
- `GET /api/emails` - Get user emails (with optional tag filter)
- `POST /api/emails` - Create new email with AI processing
- `PUT /api/emails/[id]` - Update email (regenerate summary)

## 🤖 AI Features

The app uses OpenAI's GPT-3.5-turbo to:
- Generate concise 2-3 line summaries
- Classify emails as Urgent, Informative, or Spam
- Process emails in real-time when added
- Allow summary regeneration on demand

## 🎨 UI Features

- Clean, modern design with Tailwind CSS
- Responsive layout for all devices
- Expandable email cards
- Real-time search and filtering
- Loading states and error handling
- Intuitive navigation and user experience

## 🔒 Security

- Secure authentication with NextAuth.js
- Password hashing with bcrypt
- JWT-based sessions
- Protected API routes
- Input validation and sanitization

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.