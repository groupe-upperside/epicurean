"use client";
import * as React from "react";
import {useTranslations} from "next-intl";
import toast from "react-hot-toast";
import {cn} from "@/lib/utils/utils";
import {FloatingTextarea} from "@/components/ui/text-area";
import {FloatingInput} from "@/components/ui/input";

export type Option = { value: string; label: string };

export type JoinUsFormProps = {
    method?: "POST" | "GET";
    formAction?: (formData: FormData) => void | Promise<void>;
    className?: string;
    labels?: {
        location?: string;
        role?: string;
        lastName?: string;
        firstName?: string;
        email?: string;
        phone?: string;
        subject?: string;
        message?: string;
        submit?: string;
        cv?: string;
        cover?: string;
        filePlaceholder?: string;
    };
    locations?: Option[];
    roles?: Option[];
    defaultValues?: Partial<{
        localisation: string;
        metier: string;
        nom: string;
        prenom: string;
        email: string;
        telephone: string;
        objet: string;
        message: string;
    }>;
};

function FloatingSelect({
                            id,
                            name,
                            label,
                            options,
                            required,
                            defaultValue = "",
                        }: {
    id: string;
    name: string;
    label: string;
    options: Option[];
    required?: boolean;
    defaultValue?: string;
}) {
    return (
        <div className="relative select-wrapper">
            <select
                id={id}
                name={name}
                required={required}
                defaultValue={defaultValue}
                data-has-value={defaultValue !== "" ? "true" : undefined}
                onChange={(e) => {
                    e.currentTarget.dataset.hasValue = e.currentTarget.value !== "" ? "true" : "";
                }}
                className={cn(
                    "peer block w-full bg-transparent outline-none appearance-none",
                    "border-b border-brand-charcoal/40 focus:border-brand-charcoal",
                    "py-3 pr-10",
                    "text-base text-brand-charcoal",
                    "form-input"
                )}
            >
                <option value="" disabled hidden></option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <svg
                aria-hidden="true"
                focusable="false"
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-gray"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
            </svg>
            <label
                htmlFor={id}
                className={cn(
                    "pointer-events-none absolute left-0 top-3 text-brand-gray transition-all",
                    "peer-focus:-top-3 peer-focus:text-xs peer-focus:tracking-wide peer-focus:text-brand-charcoal",
                    "peer-data-[has-value=true]:-top-3 peer-data-[has-value=true]:text-xs",
                    "form-label"
                )}
            >
                {label}
            </label>
        </div>
    );
}

function FilePicker({
                        id,
                        name,
                        label,
                        placeholder,
                    }: {
    id: string;
    name: string;
    label: string;
    placeholder: string;
}) {
    const [fileName, setFileName] = React.useState<string>(placeholder);
    React.useEffect(() => {
        setFileName(placeholder);
    }, [placeholder]);
    return (
        <div className={cn("relative", "form-file-wrapper")}>
            <label htmlFor={id} className={cn("block mb-2", "form-file-label")}>{label}</label>
            <div className="relative border border-dashed border-brand-charcoal/30 rounded-md px-4 py-3 text-brand-gray">
                <span className={cn("block truncate", "form-file-text")}>{fileName}</span>
                <input
                    id={id}
                    name={name}
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    onChange={(e) => {
                        const f = e.target.files?.[0];
                        setFileName(f ? f.name : placeholder);
                    }}
                />
            </div>
        </div>
    );
}

export default function JoinUsForm({
                                       method = "POST",
                                       formAction,
                                       className,
                                       labels,
                                       locations,
                                       roles,
                                       defaultValues,
                                   }: JoinUsFormProps) {
    const t = useTranslations("JoinUs");
    const tCommon = useTranslations("Common");
    const [submitting, setSubmitting] = React.useState(false);

    const L = {
        location: labels?.location ?? t("LabelsLocation.translation.content"),
        role: labels?.role ?? t("LabelsRole.translation.content"),
        lastName: labels?.lastName ?? t("LabelsLastName.translation.content"),
        firstName: labels?.firstName ?? t("LabelsFirstName.translation.content"),
        email: labels?.email ?? t("LabelsEmail.translation.content"),
        phone: labels?.phone ?? t("LabelsPhone.translation.content"),
        subject: labels?.subject ?? t("LabelsSubject.translation.content"),
        message: labels?.message ?? t("LabelsMessage.translation.content"),
        submit: labels?.submit ?? t("LabelsSubmit.translation.content"),
        cv: labels?.cv ?? t("LabelsCV.translation.content"),
        cover: labels?.cover ?? t("LabelsCoverLetter.translation.content"),
        filePlaceholder: labels?.filePlaceholder ?? t("LabelsFilePlaceholder.translation.content"),
    };

    const computedLocations: Option[] =
        locations ?? [
            { value: "salon", label: t("OptionsLocationSalon.translation.content") },
            { value: "paris", label: t("OptionsLocationParis.translation.content") },
            { value: "marrakech", label: t("OptionsLocationMarrakech.translation.content") },
        ];

    const computedRoles: Option[] =
        roles ?? [
            { value: "cuisine", label: t("OptionsRoleCuisine.translation.content") },
            { value: "salle", label: t("OptionsRoleSalle.translation.content") },
            { value: "service", label: t("OptionsRoleService.translation.content") },
            { value: "hotellerie", label: t("OptionsRoleHotellerie.translation.content") },
            { value: "support", label: t("OptionsRoleSupport.translation.content") },
            { value: "magasins", label: t("OptionsRoleMagasins.translation.content") },
            { value: "artistes", label: t("OptionsRoleArtistes.translation.content") },
            { value: "autre", label: t("OptionsRoleAutre.translation.content") },
        ];

    async function fileToBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                const base64 = result.includes(',') ? result.split(',')[1] : result;
                resolve(base64);
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (submitting) return;
        const form = e.currentTarget;
        const fd = new FormData(form);
        // Validate required fields
        const requiredFields = ['localisation','metier','nom','prenom','email','telephone','objet','message'];
        const firstEmpty = requiredFields.find((f) => !String(fd.get(f) ?? '').trim());
        if (firstEmpty) {
            if (typeof form.reportValidity === 'function') {
                form.reportValidity();
            }
            toast.error(tCommon('ToastFillRequired.translation.content'));
            (form.querySelector(`[name="${firstEmpty}"]`) as HTMLElement | null)?.focus();
            return;
        }
        setSubmitting(true);
        try {
            type Attachment = { ContentType: string; Filename: string; Base64Content: string };
            const payload: {
                localisation: string;
                metier: string;
                nom: string;
                prenom: string;
                email: string;
                telephone: string;
                objet: string;
                message: string;
                attachments: Attachment[];
            } = {
                localisation: fd.get('localisation') as string,
                metier: fd.get('metier') as string,
                nom: fd.get('nom') as string,
                prenom: fd.get('prenom') as string,
                email: fd.get('email') as string,
                telephone: fd.get('telephone') as string,
                objet: fd.get('objet') as string,
                message: fd.get('message') as string,
                attachments: [],
            };
            const cv = fd.get('cv') as File | null;
            const motivation = fd.get('motivation') as File | null;
            if (cv && cv.size > 0) {
                payload.attachments.push({
                    ContentType: cv.type || 'application/octet-stream',
                    Filename: cv.name || 'cv',
                    Base64Content: await fileToBase64(cv),
                });
            }
            if (motivation && motivation.size > 0) {
                payload.attachments.push({
                    ContentType: motivation.type || 'application/octet-stream',
                    Filename: motivation.name || 'cover',
                    Base64Content: await fileToBase64(motivation),
                });
            }

            const res = await fetch('/api/join-us', {
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
            id="join_us_form"
            onSubmit={onSubmit}
            action={formAction as unknown as string}
            method={method}
            className={cn("space-y-10", className)}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                <FloatingSelect
                    id="localisation"
                    name="localisation"
                    label={L.location}
                    options={computedLocations}
                    required
                    defaultValue={defaultValues?.localisation ?? ""}
                />
                <FloatingSelect
                    id="metier"
                    name="metier"
                    label={L.role}
                    options={computedRoles}
                    required
                    defaultValue={defaultValues?.metier ?? ""}
                />
            </div>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
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
                    id="telephone"
                    name="telephone"
                    type="tel"
                    label={L.phone}
                    autoComplete="tel"
                    required
                    defaultValue={defaultValues?.telephone}
                />
            </div>

            <FloatingInput
                id="objet"
                name="objet"
                label={L.subject}
                required
                defaultValue={defaultValues?.objet}
            />
            
            <FloatingTextarea
                id="message"
                name="message"
                rows={1}
                label={L.message}
                required
                defaultValue={defaultValues?.message}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 text-left pt-2">
                <FilePicker id="cv" name="cv" label={L.cv} placeholder={L.filePlaceholder} />
                <FilePicker id="motivation" name="motivation" label={L.cover} placeholder={L.filePlaceholder} />
            </div>

            <div className="pt-6 flex justify-center">
                <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                        "font-serif tracking-[0.2em] text-sm text-brand-charcoal",
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