import {cn} from "@/lib/utils/utils";

export function FloatingInput({
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