'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth/client';
import { ArrowRight, LoaderCircle } from 'lucide-react';

export default function ResetPassword(){
 const [token,setToken]=useState('');
 const [ready,setReady]=useState(false);
 const [busy,setBusy]=useState(false);
 const [done,setDone]=useState(false);
 const [message,setMessage]=useState('');
 useEffect(()=>{const params=new URLSearchParams(window.location.search);Promise.resolve().then(()=>{setToken(params.get('token')??'');setReady(true);});},[]);
 async function reset(event:React.FormEvent<HTMLFormElement>){
  event.preventDefault();const data=new FormData(event.currentTarget);const password=String(data.get('password'));
  if(password!==data.get('confirm')){setMessage('The passwords do not match. Enter the same password in both fields.');return;}
  setBusy(true);setMessage('');
  try{const r=await authClient.resetPassword({newPassword:password,token});if(r.error)throw new Error(r.error.message??'The recovery link is not valid. Request a new email.');setDone(true);}
  catch(e){setMessage(e instanceof Error?e.message:'Password recovery is unavailable. Try again later.');}finally{setBusy(false);}
 }
 return <main className="recovery-page"><Link className="brand" href="/"><Image src="/icon.svg" alt="" width="32" height="32"/>deskloom.</Link><section className="recovery-form"><h1>{done?'Your password is updated.':'A fresh start.'}</h1>{done?<><p>Return to the studio and sign in with your new password.</p><Link className="primary-button" href="/">Return to Deskloom <ArrowRight size={16}/></Link></>:!ready?<p role="status">Read the recovery link…</p>:!token?<><p>This recovery link has no token or has expired. Open Sign in in the studio, then select Forgot password.</p><Link className="primary-button" href="/">Return to the studio <ArrowRight size={16}/></Link></>:<><p>Set a new password with at least 8 characters.</p><form className="auth-form" onSubmit={reset}><label>New password<input name="password" type="password" autoComplete="new-password" minLength={8} maxLength={128} required/></label><label>Confirm new password<input name="confirm" type="password" autoComplete="new-password" minLength={8} maxLength={128} required/></label>{message&&<p className="auth-message" role="alert">{message}</p>}<button type="submit" className="primary-button" disabled={busy}>{busy&&<LoaderCircle size={16} className="spin"/>}Update password <ArrowRight size={16}/></button></form></>}</section></main>;
}
