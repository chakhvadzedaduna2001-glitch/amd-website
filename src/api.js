import {contact} from './data'
export async function send(kind,values){
  if(!contact.formEndpoint){console.log(kind,values);return true}
  const r=await fetch(contact.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({kind,...values})})
  if(!r.ok)throw new Error('send failed')
  return true
}
