"use client";
import * as React from "react";
import {useTranslations} from "next-intl";
import toast from "react-hot-toast";
import {FloatingTextarea} from "@/components/ui/text-area";
import {cn} from "@/lib/utils/utils";
import {FloatingInput} from "@/components/ui/input";

export type ContactFormProps = {
    method?: "POST" | "GET";
    formAction?: (formData: FormData) => void | Promise<void>;
    className?: string;
    labels?: {
        lastName?: string;
        firstName?: string;
        email?: string;
        subject?: string;
        message?: string;
        submit?: string;
    };
    defaultValues?: Partial<{
        nom: string;
        prenom: string;
        email: string;
        sujet: string;
        message: string;
    }>;
}

export default function ContactForm({
                                        method = "POST",
                                        formAction,
                                        className,
                                        labels,
                                        defaultValues,
                                    }: ContactFormProps) {
    const t = useTranslations("Contact");
    const tCommon = useTranslations("Common");
    const [submitting, setSubmitting] = React.useState(false);

    const L = {
        lastName: labels?.lastName ?? t("LabelsLastName.translation.content"),
        firstName: labels?.firstName ?? t("LabelsFirstName.translation.content"),
        email: labels?.email ?? t("LabelsEmail.translation.content"),
        subject: labels?.subject ?? t("LabelsSubject.translation.content"),
        message: labels?.message ?? t("LabelsMessage.translation.content"),
        submit: labels?.submit ?? t("LabelsSubmit.translation.content"),
    };

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (submitting) return;
        const form = e.currentTarget;
        const fd = new FormData(form);
        const requiredFields = ['nom', 'prenom', 'email', 'sujet', 'message'];
        const firstEmpty = requiredFields.find((f) => !String(fd.get(f) ?? '').trim());
        if (firstEmpty) {
            if (typeof form.reportValidity === 'function') {
                form.reportValidity();
            }
            toast.error(tCommon('ToastFillRequired.translation.content'));
            const el = form.querySelector(`[name="${firstEmpty}"]`) as HTMLElement | null;
            el?.focus();
            return;
        }
        setSubmitting(true);
        try {
            const payload = {
                nom: fd.get('nom') as string,
                prenom: fd.get('prenom') as string,
                email: fd.get('email') as string,
                sujet: fd.get('sujet') as string,
                message: fd.get('message') as string,
            };
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Failed');
            toast.success(tCommon('ToastMessageSent.translation.content'));
            form.reset();
        } catch (err) {
            toast.error(tCommon('ToastError.translation.content'));
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form
            id="contact_form"
            onSubmit={onSubmit}
            action={formAction as unknown as string}
            method={method}
            className={cn("space-y-10", className)}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                <FloatingInput
                    id="nom"
                    name="nom"
                    label={L.lastName}
                    autoComplete="family-name"
                    required
                    defaultValue={defaultValues?.nom}
                />
                <FloatingInput
                    id="prenom"
                    name="prenom"
                    label={L.firstName}
                    autoComplete="given-name"
                    required
                    defaultValue={defaultValues?.prenom}
                />
            </div>

            <FloatingInput
                id="email"
                name="email"
                type="email"
                label={L.email}
                autoComplete="email"
                required
                defaultValue={defaultValues?.email}
            />

            <FloatingInput
                id="sujet"
                name="sujet"
                label={L.subject}
                required
                defaultValue={defaultValues?.sujet}
            />

            <FloatingTextarea
                id="message"
                name="message"
                rows={1}
                label={L.message}
                required
                defaultValue={defaultValues?.message}
            />

            <div className="pt-6 w-full flex justify-center">
                <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                        "font-serif cursor-pointer tracking-[0.2em] text-sm text-brand-charcoal",
                        "hover:text-brand-gray transition-colors duration-300",
                        submitting && "opacity-50 cursor-not-allowed"
                    )}
                >
                    {L.submit}
                </button>
            </div>
        </form>
    );
}