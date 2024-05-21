import clsx from 'clsx';

export function TextWrapHero({ variant }: { variant?: 'balance' | 'pretty' }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 px-8 py-32 bg-slate-200 rounded-xl">
      <span className="text-2xl font-semibold text-slate-900">
        This is my headline text
      </span>
      <span
        className={clsx('text-xl text-slate-700 max-w-md text-center', {
          '[text-wrap:balance]': variant === 'balance',
          '[text-wrap:pretty]': variant === 'pretty',
        })}
      >
        And this is my subheading text which is a little bit longer
      </span>
    </div>
  );
}

export function TextWrapPrettyVsBalance() {
  const text =
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.';
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col justify-center gap-2 px-7 md:px-16 py-8 bg-stone-200 rounded-xl">
        <span className="text-base font-medium text-slate-900">
          text-wrap: wrap (default value)
        </span>
        <span className="text-base text-slate-700 max-w-md">{text}</span>
      </div>
      <div className="w-full flex flex-col justify-center gap-2 px-7 md:px-16 py-8 bg-stone-200 rounded-xl">
        <span className="text-base font-medium text-slate-900">
          text-wrap: pretty
        </span>
        <span className="text-base text-slate-700 max-w-md [text-wrap:pretty]">
          {text}
        </span>
      </div>
      <div className="w-full flex flex-col justify-center gap-2 px-7 md:px-16 py-8 bg-stone-200 rounded-xl">
        <span className="text-base font-medium text-slate-900">
          text-wrap: balance
        </span>

        <span className="text-base text-slate-700 max-w-md [text-wrap:balance]">
          {text}
        </span>
      </div>
    </div>
  );
}
