import Link from "next/link";

interface LeftNavbarButtonsProps {
    user: IUser | null;
}

export default function LeftNavbarButtons({ user: _user }: LeftNavbarButtonsProps) {
    return (
        <Link href="/" aria-label="Alva home" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ff6f61] text-lg font-bold text-white shadow-sm">
                A
            </span>
            <span className="font-[var(--font-inter-tight)] text-2xl font-semibold tracking-[0.08em] text-[#1f2f3a] transition-colors group-hover:text-[#ff6f61]">
                ALVA
            </span>
        </Link>
    );
}
