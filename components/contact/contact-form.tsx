import * as React from "react";
import {useTranslations} from "next-intl";

export type ContactFormProps = {
    action?: string;
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
};

function cn(...parts: Array<string | false | null | undefined>) {
    return parts.filter(Boolean).join(" ");
}

function FloatingInput({
                           id,
                           name,
                           type = "text",
                           label,
                           autoComplete,
                           required,
                           defaultValue,
                       }: {
    id: string;
    name: string;
    type?: string;
    label: string;
    autoComplete?: string;
    required?: boolean;
    defaultValue?: string;
}) {
    return (
        <div className="relative">
            <input
                id={id}
                name={name}
                type={type}
                autoComplete={autoComplete}
                placeholder=" "
                defaultValue={defaultValue}
                required={required}
                className={cn(
                    "peer block w-full bg-transparent outline-none",
                    "border-b border-brand-charcoal/40 focus:border-brand-charcoal",
                    "py-3",
                    "text-base text-brand-charcoal",
                    "form-input"
                )}
            />
            <label
                htmlFor={id}
                className={cn(
                    "pointer-events-none absolute left-0 top-3 text-brand-gray transition-all",
                    "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base",
                    "peer-focus:-top-3 peer-focus:text-xs peer-focus:tracking-wide peer-focus:text-brand-charcoal",
                    "peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs",
                    "form-label"
                )}
            >
                {label}
            </label>
        </div>
    );
}

function FloatingTextarea({
                              id,
                              name,
                              label,
                              rows = 1,
                              required,
                              defaultValue,
                          }: {
    id: string;
    name: string;
    label: string;
    rows?: number;
    required?: boolean;
    defaultValue?: string;
}) {
    return (
        <div className="relative">
      <textarea
          id={id}
          name={name}
          rows={rows}
          placeholder=" "
          defaultValue={defaultValue}
          required={required}
          className={cn(
              "peer block w-full bg-transparent outline-none resize-none",
              "border-b border-brand-charcoal/40 focus:border-brand-charcoal",
              "py-3",
              "text-base text-brand-charcoal",
              "form-input"
          )}
      />
            <label
                htmlFor={id}
                className={cn(
                    "pointer-events-none absolute left-0 top-3 text-brand-gray transition-all",
                    "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base",
                    "peer-focus:-top-3 peer-focus:text-xs peer-focus:tracking-wide peer-focus:text-brand-charcoal",
                    "peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs",
                    "form-label"
                )}
            >
                {label}
            </label>
        </div>
    );
}

export default function ContactForm({
                                        action = "#",
                                        method = "POST",
                                        formAction,
                                        className,
                                        labels,
                                        defaultValues,
                                    }: ContactFormProps) {
    const t = useTranslations("Contact");

    const L = {
        lastName: labels?.lastName ?? t("LabelsLastName.translation.content"),
        firstName: labels?.firstName ?? t("LabelsFirstName.translation.content"),
        email: labels?.email ?? t("LabelsEmail.translation.content"),
        subject: labels?.subject ?? t("LabelsSubject.translation.content"),
        message: labels?.message ?? t("LabelsMessage.translation.content"),
        submit: labels?.submit ?? t("LabelsSubmit.translation.content"),
    };

    return (
        <form
            id="contact_form"
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
                    defaultValue={defaultValues?.nom}
                />
                <FloatingInput
                    id="prenom"
                    name="prenom"
                    label={L.firstName}
                    autoComplete="given-name"
                    defaultValue={defaultValues?.prenom}
                />
            </div>

            <FloatingInput
                id="email"
                name="email"
                type="email"
                label={L.email}
                autoComplete="email"
                defaultValue={defaultValues?.email}
            />

            <FloatingInput
                id="sujet"
                name="sujet"
                label={L.subject}
                defaultValue={defaultValues?.sujet}
            />

            <FloatingTextarea
                id="message"
                name="message"
                rows={1}
                label={L.message}
                defaultValue={defaultValues?.message}
            />

            <div className="pt-6 w-full flex justify-center">
                <button
                    type="submit"
                    className={cn(
                        "font-serif cursor-pointer tracking-[0.2em] text-sm text-brand-charcoal",
                        "hover:text-brand-gray transition-colors duration-300"
                    )}
                >
                    {L.submit}
                </button>
            </div>
        </form>
    );
}