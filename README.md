# Mailify - Smart Email Summarizer App

A full-stack web application that allows users to manually add emails and get AI-generated summaries with automatic classification.

1. Open `vercel-url`
2. **Quick Test**: Use demo account
   - Email: `demo@mailify.com`
   - Password: `demo123`


## 🚀 Features

- **Secure Authentication**: NextAuth.js with Google OAuth and email/password login
- **Manual Email Entry**: Add emails by copying and pasting content
- **AI Summarization**: Get 2-3 line summaries using Google Gemini AI
- **Smart Classification**: Automatic tagging as Urgent, Informative, or Spam
- **Search & Filter**: Find emails by content and filter by tags
- **Beautiful UI**: Modern gradient design with Tailwind CSS
- **Real-time Updates**: Regenerate summaries on demand

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: MongoDB with Prisma ORM
- **Authentication**: NextAuth.js
- **AI**: Google Gemini AI
- **Deployment**: Vercel + MongoDB Atlas

## 🚀 How to Run This Application

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier works)
- Google Gemini API key
- Google OAuth credentials (optional)

### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/mailify.git
cd mailify
npm install
```

### Step 2: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free account and cluster
3. Get connection string from "Connect" → "Connect your application"
4. Whitelist your IP address in Network Access

### Step 3: Get Google Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create new API key
3. Copy the key for environment variables

### Step 4: Environment Variables

Create `.env` file in root directory:

```env
# Database (Required)
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/mailify?retryWrites=true&w=majority"

# NextAuth (Required)
NEXTAUTH_SECRET="your-random-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Google Gemini AI (Required)
GEMINI_API_KEY="your-gemini-api-key"

# Google OAuth (Optional - for Google login)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### Step 5: Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed with demo data (optional)
npm run db:seed
```

### Step 6: Run Application

```bash
# Start development server
npm run dev
```

### Step 7: Access Application

1. Open `http://localhost:3000`
2. **Quick Test**: Use demo account
   - Email: `demo@mailify.com`
   - Password: `demo123`
3. **Or** create your own account

### 🎯 What You Can Do

- ✅ Sign up/login with email or Google
- ✅ Add emails manually (copy/paste content)
- ✅ Get AI summaries and classifications
- ✅ Search and filter emails
- ✅ Regenerate summaries
- ✅ View organized email dashboard

### 🔧 Troubleshooting

**Database Connection Issues:**
- Check MongoDB Atlas IP whitelist
- Verify connection string format
- Ensure cluster is running

**AI Not Working:**
- Verify Gemini API key is correct
- Check API key has proper permissions
- Ensure you have API quota remaining

**Build Errors:**
- Run `npm run db:generate` after any schema changes
- Clear `.next` folder and restart dev server

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
GEMINI_API_KEY="your-gemini-api-key"
```

## 👤 Demo User

For quick testing, use the seeded demo account:
- **Email**: demo@mailify.com
- **Password**: demo123

The demo account comes with 5 sample emails showcasing different AI classifications and summaries.

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
│   ├── about/
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AddEmailForm.tsx
│   ├── EmailCard.tsx
│   └── Providers.tsx
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

## 📧 How to Use

1. **Sign Up**: Create an account with your email
2. **Login**: Sign in to access the dashboard
3. **Add Emails**: Click "Add New Email" and manually enter:
   - Subject line
   - Sender email
   - Full email content
4. **AI Processing**: Gemini AI automatically generates summary and classification
5. **Manage**: Search, filter, and organize your emails
6. **Regenerate**: Click refresh icon to regenerate AI summaries

## ⚠️ Current Limitations

- **Manual Entry Only**: No automatic email fetching from Gmail/Outlook
- **No Email Integration**: Requires copy/paste of email content
- **Light Mode Only**: No dark mode support
- **Proof of Concept**: Designed for testing AI email processing

## 🤖 AI Features

The app uses Google Gemini AI to:
- Generate concise 2-3 line summaries
- Classify emails as Urgent, Informative, or Spam
- Process emails in real-time when manually added
- Allow summary regeneration on demand

## 🎨 UI Features

- Beautiful gradient backgrounds and modern design
- Light mode only interface
- Responsive layout for all devices
- Expandable email cards with improved content display
- Real-time search and filtering
- Loading states and error handling
- Intuitive navigation and user experience

## 🔒 Security

- Secure authentication with NextAuth.js
- Password hashing with bcrypt
- JWT-based sessions
- Protected API routes
- Input validation and sanitization


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.