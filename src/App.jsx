import {
  Brain,
  MessageCircle,
  FileText,
  Volume2,
  Radar,
  ArrowRight,
  CheckCircle,
  Users,
  GraduationCap,
  ShieldCheck
} from "lucide-react";

const appUrl = "https://ladder.mrthinklab.com";

function App() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <div className="mark">▰▰▰</div>
          <span>MR | ThinkLab</span>
        </div>
        <a className="navCta" href={appUrl}>Start Learning</a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="eyebrow">Introducing Ladder</div>
          <h1>AI shouldn’t replace thinking. It should strengthen it.</h1>
          <p>
            Ladder is an AI Thinking Coach that helps students build reasoning,
            explanation, problem-solving, and independent thinking through guided
            learning conversations.
          </p>
          <div className="heroButtons">
            <a className="primary" href={appUrl}>Start Learning <ArrowRight size={18} /></a>
            <a className="secondary" href="#how">See How It Works</a>
          </div>
        </div>

        <div className="mockup">
          <div className="mockHeader">
            <span>Ladder Session</span>
            <span className="badge">Thinking Coach</span>
          </div>
          <div className="phase">Challenge</div>
          <div className="chat coach">
            When would this explanation stop being true? What assumption are we making?
          </div>
          <div className="chat student">
            It depends on the context. The same idea might not work in every situation.
          </div>
          <div className="reportCard">
            <FileText size={18} />
            <span>Session report generated</span>
          </div>
        </div>
      </section>

      <section className="section problem">
        <h2>Most AI tools give answers. Few develop thinking.</h2>
        <p>
          Students can get explanations anywhere. But explanation alone does not
          build judgment, confidence, or transfer. Ladder pushes students to think,
          justify, adapt, and reflect.
        </p>
      </section>

      <section className="section">
        <div className="sectionHead">
          <Radar className="icon" />
          <h2>The Thinking Radar</h2>
          <p>Every session is designed around four core thinking skills.</p>
        </div>

        <div className="grid four">
          <Card title="Decision-Making" text="Students choose between options, strategies, explanations, or interpretations." icon={<CheckCircle />} />
          <Card title="Justification" text="Students explain why their answer makes sense instead of stopping at correctness." icon={<MessageCircle />} />
          <Card title="Constraint Awareness" text="Students notice limits, assumptions, exceptions, and when an idea may not apply." icon={<ShieldCheck />} />
          <Card title="Adaptation" text="Students transfer ideas into new examples, subjects, and real-world situations." icon={<Brain />} />
        </div>
      </section>

      <section className="section" id="how">
        <h2>How Ladder works</h2>
        <div className="steps">
          <Step number="01" title="Choose a topic" text="Students select a subject, grade level, language, and learning goal." />
          <Step number="02" title="Start a guided session" text="The coach adapts to the student’s level and guides the learning conversation." />
          <Step number="03" title="Think through challenge" text="Students explain, compare, question, and apply ideas instead of memorizing." />
          <Step number="04" title="Receive a report" text="Parents and tutors get a clear summary of progress, strengths, and next steps." />
        </div>
      </section>

      <section className="section compare">
        <h2>Different from a normal AI chatbot</h2>
        <div className="comparison">
          <div>
            <h3>Typical AI Chatbot</h3>
            <p>Gives direct answers</p>
            <p>Explains content</p>
            <p>Stops when correct</p>
            <p>Limited parent visibility</p>
          </div>
          <div className="ladderCol">
            <h3>Ladder</h3>
            <p>Coaches thinking</p>
            <p>Asks follow-up questions</p>
            <p>Challenges assumptions</p>
            <p>Sends session reports</p>
          </div>
        </div>
      </section>

      <section className="section features">
        <h2>Built for real learning</h2>
        <div className="grid three">
          <Card title="English & Spanish" text="Students can learn in either language, with native-feeling session flow." icon={<GraduationCap />} />
          <Card title="Audio playback" text="Students can listen to coach messages when they want extra support." icon={<Volume2 />} />
          <Card title="Parent reports" text="Reports show what the student worked on, how they thought, and what comes next." icon={<FileText />} />
        </div>
      </section>

      <section className="section audience">
        <h2>Who Ladder is for</h2>
        <div className="grid three">
          <Card title="Students" text="Build confidence, reasoning, and independent learning habits." icon={<GraduationCap />} />
          <Card title="Parents" text="Understand how your child is thinking, not just what they completed." icon={<Users />} />
          <Card title="Tutors & Educators" text="Support deeper learning beyond memorization and answer-checking." icon={<Brain />} />
        </div>
      </section>

      <section className="pricing">
        <div className="pricingCard">
          <div className="eyebrow">Launch Offer</div>
          <h2>Ladder Premium</h2>
          <p className="price">$7.50 first month</p>
          <p className="then">Then $15/month. Cancel anytime.</p>
          <p className="value">
            A single private tutoring session can cost $30–$40 or more.
            Ladder provides personalized thinking coaching for just $15/month, with up to 3 guided sessions per day.
          </p>
          <ul>
            <li>Up to 3 personalized coaching sessions per day</li>
            <li>English & Spanish support</li>
            <li>Audio playback</li>
            <li>Parent/tutor reports</li>
            <li>Thinking Radar framework</li>
          </ul>
          <a className="primary full" href={appUrl}>Start Learning <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="final">
        <h2>Thinking matters more than ever.</h2>
        <p>
          In a world full of AI answers, Ladder helps students reason, explain,
          adapt, and think independently.
        </p>
        <a className="primary" href={appUrl}>Start Learning <ArrowRight size={18} /></a>
      </section>

      <footer>
        <span>MR | ThinkLab</span>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:hello@mrthinklab.com">Contact</a>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, text, icon }) {
  return (
    <div className="card">
      <div className="cardIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="step">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;
