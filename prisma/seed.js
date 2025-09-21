const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  // Create demo user
  const hashedPassword = await bcrypt.hash('demo123', 12)
  
  const user = await prisma.user.upsert({
    where: { email: 'demo@mailify.com' },
    update: {},
    create: {
      name: 'Demo User',
      email: 'demo@mailify.com',
      password: hashedPassword,
    },
  })

  // Create sample emails
  const sampleEmails = [
    {
      subject: 'Urgent: Server Maintenance Tonight',
      sender: 'admin@company.com',
      body: 'Dear Team,\n\nWe will be performing critical server maintenance tonight from 11 PM to 3 AM EST. Please ensure all your work is saved and logged out by 10:45 PM. The system will be completely unavailable during this time.\n\nThis maintenance is crucial for security updates and performance improvements. We apologize for any inconvenience.\n\nBest regards,\nIT Team',
      summary: 'Critical server maintenance scheduled tonight 11 PM-3 AM EST. System will be unavailable. Save work and logout by 10:45 PM.',
      tag: 'Urgent'
    },
    {
      subject: 'Weekly Newsletter - Tech Updates',
      sender: 'newsletter@techblog.com',
      body: 'Hello Tech Enthusiasts!\n\nWelcome to this week\'s tech newsletter. Here are the top stories:\n\n1. New JavaScript framework released\n2. AI breakthrough in natural language processing\n3. Cybersecurity trends for 2024\n4. Cloud computing cost optimization tips\n\nRead more on our website. Don\'t forget to follow us on social media for daily updates!\n\nHappy coding!',
      summary: 'Weekly tech newsletter covering JavaScript frameworks, AI breakthroughs, cybersecurity trends, and cloud optimization tips.',
      tag: 'Informative'
    },
    {
      subject: 'CONGRATULATIONS! You\'ve Won $1,000,000!!!',
      sender: 'winner@lottery-scam.com',
      body: 'CONGRATULATIONS!!!\n\nYou have been selected as the LUCKY WINNER of our international lottery! You\'ve won $1,000,000 USD!!!\n\nTo claim your prize, please send us your:\n- Full name\n- Address\n- Phone number\n- Bank account details\n- Social security number\n\nSend this information immediately to claim your prize before it expires!\n\nACT NOW!!!',
      summary: 'Suspicious lottery scam email requesting personal and financial information to claim fake prize money.',
      tag: 'Spam'
    },
    {
      subject: 'Project Deadline Reminder',
      sender: 'manager@company.com',
      body: 'Hi Team,\n\nJust a friendly reminder that the Q4 project deliverables are due this Friday, December 15th. Please make sure to:\n\n- Complete all assigned tasks\n- Update the project tracker\n- Submit your final reports\n- Attend the review meeting at 2 PM\n\nIf you have any concerns or need additional resources, please let me know ASAP.\n\nThanks for your hard work!\nSarah',
      summary: 'Reminder about Q4 project deadline this Friday. Complete tasks, update tracker, submit reports, attend 2 PM review meeting.',
      tag: 'Urgent'
    },
    {
      subject: 'New Employee Benefits Program',
      sender: 'hr@company.com',
      body: 'Dear Employees,\n\nWe\'re excited to announce our new comprehensive benefits program starting January 1st, 2024. The new program includes:\n\n- Enhanced health insurance coverage\n- Increased 401(k) matching\n- Flexible work arrangements\n- Professional development budget\n- Wellness programs and gym membership\n\nDetailed information packets will be distributed next week. We\'ll also be hosting information sessions throughout December.\n\nWe believe these improvements will better support your work-life balance and career growth.\n\nBest regards,\nHR Team',
      summary: 'New employee benefits program launching January 2024 with enhanced health insurance, 401(k) matching, flexible work, and wellness programs.',
      tag: 'Informative'
    }
  ]

  for (const emailData of sampleEmails) {
    await prisma.email.create({
      data: {
        ...emailData,
        userId: user.id,
      },
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })