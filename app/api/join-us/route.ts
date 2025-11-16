import { NextRequest, NextResponse } from 'next/server';
import { sendJoinUsEmail, JoinUsAttachment } from '@/app/lib/actions/sendEmail/action';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Expect body like: { localisation, metier, nom, prenom, email, telephone, objet, message, attachments?: JoinUsAttachment[] }
    const { localisation, metier, nom, prenom, email, telephone, objet, message, attachments } = body || {};

    const data: Record<string, unknown> = {
      Localisation: localisation,
      Métier: metier,
      Nom: nom,
      Prénom: prenom,
      Email: email,
      Téléphone: telephone,
      Objet: objet,
      Message: message,
    };

    await sendJoinUsEmail(data, attachments as JoinUsAttachment[] | undefined);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
