import Link from "next/link";

interface LeftNavbarButtonsProps {
    user: IUser | null;
}

export default function LeftNavbarButtons({ user: _user }: LeftNavbarButtonsProps) {
    return (
        <Link href="/" aria-label="Alva home" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6f61] via-[#ff8a45] to-[#ffb347] text-lg font-bold text-white shadow-sm">
                A
            </span>
            <span className="font-[var(--font-lora)] text-2xl font-semibold tracking-[0.08em] bg-gradient-to-r from-[#ff6f61] to-[#2cb68a] bg-clip-text text-transparent transition-all group-hover:brightness-90">
                ALVA
            </span>
        </Link>
    );
}
