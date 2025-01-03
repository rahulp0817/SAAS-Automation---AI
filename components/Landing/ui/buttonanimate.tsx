import ShimmerButton from "@/components/ui/shimmer-button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
export function Buttonanimate() {
  return (
    <div className="z-10 flex min-h-36 items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white flex justify-center items-center gap-2 dark:from-white dark:to-slate-900/10 lg:text-lg group">
          Get Started
          <ArrowRightIcon className="size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </span>
      </ShimmerButton>
    </div>
  );
}
