export const CATEGORIES = {
  Core: ['DSA','OOP','DBMS','OS','Networks'],
  Languages: ['Java','Python','JavaScript','TypeScript','C','C++','C#','Go'],
  Web: ['React','Next.js','Node.js','Express','REST','GraphQL'],
  Data: ['SQL','MongoDB','PostgreSQL','MySQL','Redis'],
  Cloud: ['AWS','Azure','GCP','Docker','Kubernetes','CI/CD','Linux'],
  Testing: ['Selenium','Cypress','Playwright','JUnit','PyTest']
}

function wordFound(word, text){
  const re = new RegExp(`\\b${word.replace(/[-.]/g,'\\$&')}\\b`, 'i')
  return re.test(text)
}

export function extractSkills(jd){
  const text = (jd||'').toString()
  const skills = []
  Object.entries(CATEGORIES).forEach(([cat,arr])=>{
    arr.forEach(w=>{ if(wordFound(w, text)) skills.push({category:cat, skill:w}) })
  })
  if(skills.length===0) return [{category:'General', skill:'General fresher stack'}]
  return skills
}

export function buildChecklist(skills){
  const byCat = {}
  skills.forEach(s=>{ byCat[s.category]=byCat[s.category]||[]; byCat[s.category].push(s.skill) })
  const rounds = [
    {title:'Round 1: Aptitude / Basics', items:['Basic arithmetic','Time management','Interpretation of problems','Pseudocode practice','Read job description carefully']},
    {title:'Round 2: DSA + Core CS', items:['Array/String practice','Linked lists','Trees/Graphs basics','Complexity analysis','Core CS revision']},
    {title:'Round 3: Tech interview (projects + stack)', items:['Project walkthrough','System tradeoffs','Language-specific questions','API design','Databases and caching']},
    {title:'Round 4: Managerial / HR', items:['Behavioral stories','STAR method','Salary expectations','Company fit','Questions to ask recruiter']},
  ]
  // adapt items
  if(byCat['Web']){
    rounds[2].items.push('Frontend frameworks (React)');
    rounds[2].items.push('State management');
  }
  if(byCat['Cloud']){
    rounds[2].items.push('Cloud deployment basics');
  }
  if(byCat['Data']) rounds[2].items.push('Database design and indexing')
  return rounds
}

export function build7DayPlan(skills){
  const hasWeb = skills.some(s=>s.skill.toLowerCase().includes('react'))
  const plan = [
    'Day 1: Basics + core CS',
    'Day 2: Basics + core CS',
    'Day 3: DSA + coding practice',
    'Day 4: DSA + coding practice',
    'Day 5: Project + resume alignment',
    'Day 6: Mock interview questions',
    'Day 7: Revision + weak areas'
  ]
  if(hasWeb) plan[4] = 'Day 5: Frontend project + resume alignment (React)'
  return plan
}

export function buildQuestions(skills){
  const questions = []
  const textSkills = skills.map(s=>s.skill)
  if(textSkills.includes('SQL')) questions.push('Explain indexing and when it helps.')
  if(textSkills.includes('React')) questions.push('Explain state management options in React.')
  if(textSkills.some(s=>['DSA','OOP'].includes(s))) questions.push('How would you optimize search in sorted data?')
  // fill to 10
  while(questions.length<10) questions.push('Describe a challenging project you worked on and tradeoffs you made.')
  return questions
}

export function computeReadiness({skills,company,role,jdText}){
  let score = 35
  const cats = new Set(skills.map(s=>s.category))
  score += Math.min(6, cats.size) * 5
  if(company) score +=10
  if(role) score +=10
  if((jdText||'').length > 800) score +=10
  return Math.min(100, score)
}
