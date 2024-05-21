import clsx from 'clsx';
import styles from './styles.module.css';

export function ScrollAnimationDemoOne() {
  return (
    <div className={clsx('flex items-start flex-col gap-2', styles.container)}>
      <div
        className={clsx(
          'w-full h-2 top-0 bg-red-900 origin-left',
          styles.progress
        )}
      />
      <div
        className={clsx(
          'relative w-full overflow-y-scroll h-[240px] rounded-xl',
          styles.scrollContainer
        )}
      >
        <div className="w-full h-[1200px] bg-gradient-to-b from-stone-100 to-stone-400 flex justify-center items-top">
          <span className="block mt-24 font-medium text-sm">Scroll down</span>
        </div>
      </div>
    </div>
  );
}
