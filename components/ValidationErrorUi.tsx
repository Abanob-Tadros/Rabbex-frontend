import { Check, Circle } from "lucide-react";

export type ValidationRule = {
  label: string;
  valid: boolean;
};

type ValidationErrorProps = {
  message?: string;
  title?: string;
  rules?: ValidationRule[];
};

export default function ValidationErrorUi({
  message,
  title,
  rules = [],
}: ValidationErrorProps) {

  if (!message && !rules.length) {
    return null;
  }

  // =========================
  // Normal Error
  // =========================
  if (message && !rules.length) {
    return (
      <div
        className="
          mt-2
          rounded-md
          border
          border-destructive/20
          bg-destructive/10
          px-3
          py-2.5
        "
      >
        <p className="text-xs font-medium text-destructive">
          {message}
        </p>
      </div>
    );
  }

  // =========================
  // Validation Rules
  // =========================
  return (
    <div
      className="
        mt-3
        rounded-lg
        border
        border-destructive/10
        bg-destructive/10
        p-4
      "
    >
      {title && (
        <p className="mb-4 text-sm font-semibold text-foreground">
          {title}
        </p>
      )}

      <div className="space-y-3">
        {rules.map((rule) => (
          <div
            key={rule.label}
            className="flex items-center gap-3"
          >
            {rule.valid ? (
              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-success/15
                  text-success
                "
              >
                <Check size={14} strokeWidth={3} />
              </span>
            ) : (
              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-destructive/15
                  text-destructive
                "
              >
                <Circle
                  size={10}
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
            )}

            <span
              className={`
                text-sm transition-colors
                ${
                  rule.valid
                    ? "text-muted-foreground"
                    : "text-destructive"
                }
              `}
            >
              {rule.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}