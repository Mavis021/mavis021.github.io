import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import portrait from '../assets/images/me-2026.webp';
import {
    profile, hero, about, researchInterests, publications, experience,
    projects, writing, education, awards, certifications, leadership, contact,
} from '../content';
import './Sections.scss';

const Section = ({ id, label, title, children }) => (
    <section className="section" id={id}>
        <div className="section-head">
            <span className="section-label">{label}</span>
            <h2>{title}</h2>
        </div>
        <div className="section-body">{children}</div>
    </section>
);

const QuestionLoop = ({ items, interval = 4200 }) => {
    const [i, setI] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return undefined;
        const id = setTimeout(() => setI((n) => (n + 1) % items.length), interval);
        return () => clearTimeout(id);
    }, [i, paused, items.length, interval]);

    const item = items[i];
    return (
        <div
            className="loop"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="loop-item" key={i}>
                {item.quote ? (
                    <p className="loop-q loop-quote">“{item.quote}”</p>
                ) : (
                    <>
                        <p className="loop-q">{item.q}</p>
                        <p className="loop-where">{item.where}</p>
                    </>
                )}
            </div>
            <div className="loop-dots" role="tablist" aria-label="Questions">
                {items.map((it, n) => (
                    <button
                        key={n}
                        role="tab"
                        aria-selected={n === i}
                        aria-label={`Show ${n + 1} of ${items.length}`}
                        className={n === i ? 'on' : ''}
                        onClick={() => setI(n)}
                    />
                ))}
            </div>
        </div>
    );
};

export const Hero = () => (
    <header className="hero" id="home">
        <div className="hero-text">
            <p className="hero-eyebrow">{profile.honorific} {profile.name} · {profile.location}</p>
            <h1 className="visually-hidden">{profile.name}, AI/ML engineer</h1>
            <QuestionLoop items={hero.questions} />
            <p className="hero-sub">{hero.intro}</p>
            <div className="hero-actions">
                <a className="btn btn-solid" href={`mailto:${profile.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} /> Get in touch
                </a>
                <a className="btn" href="#research">
                    Research <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
            <div className="hero-socials">
                <a target="_blank" rel="noreferrer" aria-label="LinkedIn" href={profile.links.linkedin}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a target="_blank" rel="noreferrer" aria-label="GitHub" href={profile.links.github}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a target="_blank" rel="noreferrer" aria-label="Medium" href={profile.links.medium}>
                    <FontAwesomeIcon icon={faMedium} />
                </a>
                <a aria-label="Email" href={`mailto:${profile.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
        <div className="hero-portrait">
            <div className="hero-arch" aria-hidden="true" />
            <img src={portrait} alt={profile.name} width="380" height="531" />
        </div>
    </header>
);

export const About = () => (
    <Section id="about" label="01" title="About">
        <div className="prose">
            {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
    </Section>
);

export const Research = () => (
    <Section id="research" label="02" title="Research">
        <h3 className="sub-title">Interests</h3>
        <ul className="chips">
            {researchInterests.map((r) => <li key={r}>{r}</li>)}
        </ul>

        {publications.length > 0 && (
            <>
                <h3 className="sub-title">Publications</h3>
                <ul className="pubs">
                    {publications.map((p) => (
                        <li key={p.title}>
                            <span className="pub-title">
                                {p.href ? <a href={p.href} target="_blank" rel="noreferrer">{p.title}</a> : p.title}
                            </span>
                            {p.authors && <span className="pub-meta">{p.authors}</span>}
                            {p.venue && <span className="pub-meta">{p.venue}</span>}
                            {p.status && <span className="status">{p.status}</span>}
                        </li>
                    ))}
                </ul>
            </>
        )}
    </Section>
);

export const Experience = () => (
    <Section id="experience" label="03" title="Experience">
        <ol className="timeline">
            {experience.map((e) => (
                <li key={(e.role || '') + e.org}>
                    <span className="period">{e.period}</span>
                    {e.roles ? (
                        <div>
                            <h3>{e.org}</h3>
                            <p className="org"><span>{e.orgNote}</span></p>
                            <div className="roles">
                                {e.roles.map((r) => (
                                    <div className="role" key={r.role}>
                                        <h4>{r.role}</h4>
                                        <p className="role-meta">{r.type} · {r.period}</p>
                                        <ul>
                                            {r.points.map((p) => <li key={p}>{p}</li>)}
                                        </ul>
                                        {r.stack && <p className="stack">{r.stack}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3>{e.role}</h3>
                            <p className="org">{e.org}<span> · {e.orgNote}</span></p>
                            <ul>
                                {e.points.map((p) => <li key={p}>{p}</li>)}
                            </ul>
                            {e.stack && <p className="stack">{e.stack}</p>}
                        </div>
                    )}
                </li>
            ))}
        </ol>
    </Section>
);

export const Projects = () => (
    <Section id="projects" label="04" title="Projects">
        <div className="cards">
            {projects.map((p) => (
                <div className="card" key={p.name}>
                    <div className="card-top">
                        <h3>{p.name}</h3>
                        <div className="card-icons">
                            {p.href && (
                                <a href={p.href} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} title="GitHub">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            )}
                            {p.video && (
                                <a className="yt" href={p.video} target="_blank" rel="noreferrer" aria-label={`${p.name} demo video on YouTube`} title="Demo video">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            )}
                        </div>
                    </div>
                    <p className="card-label">{p.label}</p>
                    <p>{p.description}</p>
                    <p className="stack">{p.stack}</p>
                </div>
            ))}
        </div>
    </Section>
);

export const Writing = () => (
    <Section id="writing" label="05" title="Writing">
        <ul className="posts">
            {writing.map((w) => (
                <li key={w.href}>
                    <a href={w.href} target="_blank" rel="noreferrer">
                        <span className="post-date">{w.date}</span>
                        <span className="post-body">
                            <span className="post-title">
                                {w.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </span>
                            <span className="post-desc">{w.description}</span>
                            <span className="post-pub">
                                {w.publication}
                                {w.note && <span className="post-note">{w.note}</span>}
                            </span>
                        </span>
                    </a>
                </li>
            ))}
        </ul>
        <a className="text-link" href={profile.links.medium} target="_blank" rel="noreferrer">
            All posts on Medium <FontAwesomeIcon icon={faArrowRight} />
        </a>
    </Section>
);

const MiniList = ({ title, items }) => (
    <div className="mini">
        <h3 className="sub-title">{title}</h3>
        <ul>
            {items.map((it) => (
                <li key={it.title + (it.detail || it.place || '')}>
                    <span className="mini-title">{it.title}</span>
                    <span className="mini-detail">
                        {it.detail || it.place}
                        {it.period && <span className="mini-period"> · {it.period}</span>}
                    </span>
                    {it.note && <span className="mini-note">{it.note}</span>}
                </li>
            ))}
        </ul>
    </div>
);

export const Background = () => (
    <Section id="background" label="06" title="Background">
        <div className="mini-grid">
            <div className="mini-col">
                <MiniList title="Education" items={education} />
                <MiniList title="Leadership" items={leadership} />
            </div>
            <div className="mini-col">
                <MiniList title="Awards" items={awards} />
                <MiniList title="Certifications" items={certifications} />
            </div>
        </div>
    </Section>
);

export const ContactCTA = () => (
    <section className="cta" id="contact">
        <span className="section-label">07</span>
        <h2>{contact.line}</h2>
        <div className="hero-actions">
            <a className="btn btn-solid" href={`mailto:${profile.email}`}>
                <FontAwesomeIcon icon={faEnvelope} /> {profile.email}
            </a>
            <Link className="btn" to="/contact">Contact form</Link>
        </div>
    </section>
);
