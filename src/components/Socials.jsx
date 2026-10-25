import {contact} from '../data'
const icons={
  Facebook:<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.5-3.2h-3.2V7.9c0-.9.4-1.6 1.7-1.6h1.6V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.5V13h2.9v8h3.1z"/></svg>,
  Instagram:<svg className="ln" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
  TikTok:<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>}
const cls={Facebook:'fb',Instagram:'ig',TikTok:'tt'}
export default function Socials({label}){
  return(<div>{label&&<p className="soclabel">გამოგვყევით სოციალურ ქსელებში</p>}<div className="socials">{contact.socials.map(s=>s.url
    ?<a key={s.name} className={'soc '+cls[s.name]} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>{icons[s.name]}</a>
    :<span key={s.name} className={'soc '+cls[s.name]} role="img" aria-label={s.name}>{icons[s.name]}</span>)}</div></div>)
}
