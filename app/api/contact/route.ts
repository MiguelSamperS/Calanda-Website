// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    // Sanitizar mínimo para el HTML
    const esc = (s: string) =>
      String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Usa onresend.com mientras el dominio propio no esté verificado
    const FROM = 'Web Calanda <no-reply@calanda.onresend.com>';
    // Cuando tu dominio quede Verified en Resend, cambia a:
    // const FROM = 'Web Calanda <no-reply@calanda.com.co>';

    const html = `
      <table style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; max-width:600px; color:#0f172a">
        <tr><td><h2>Nuevo mensaje desde la web</h2></td></tr>
        <tr><td><strong>Nombre:</strong> ${esc(name)}</td></tr>
        <tr><td><strong>Email:</strong> ${esc(email)}</td></tr>
        <tr><td style="padding-top:12px"><strong>Mensaje:</strong><br/>${esc(message).replace(/\n/g,'<br/>')}</td></tr>
      </table>
    `;

    const text = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;

    const r = await resend.emails.send({
      from: FROM,
      to: ['info@calanda.com.co'],
      reply_to: email,
      subject: 'Nuevo contacto desde calanda.com.co',
      html,
      text,
    });

    if (!r || (r as any).error) {
      console.error('Resend error:', (r as any).error);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
