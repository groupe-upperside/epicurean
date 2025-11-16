import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/app/lib/actions/sendEmail/action';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Expecting: { nom, prenom, email, sujet, message }
    const { nom, prenom, email, sujet, message } = body || {};

    // Build a readable payload for email
    const data: Record<string, unknown> = {
      Nom: nom,
      Prénom: prenom,
      Email: email,
      Sujet: sujet,
      Message: message,
    };

    await sendContactEmail(data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
