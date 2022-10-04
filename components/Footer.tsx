import Link from "next/link";
import { FC, memo } from "react";
import { BRAND_NAME, CATEGORIES, INTRO, KEYWORDS } from "../constants";

const _FooterLink: FC<{ label: string; href: string }> = ({ label, href }) => (
  <li className="items-center">
    <Link href={href}>
      <a className="link link-hover active:bg-transparent">{label}</a>
    </Link>
  </li>
);

const FooterLink = memo(_FooterLink);

const Footer: FC = () => {
  const year = new Date().toLocaleDateString("ar-EG", { year: "numeric" });
  return (
    <footer>
      <div className="md:px-10 text-sm leading-relaxed bg-white border-t px-5 py-4 text-slate-500">
        <p className="text-justify mb-1">{INTRO}</p>
        <p>
          {CATEGORIES.map((c) => c.title).join(" - ")} - {KEYWORDS}
        </p>
      </div>
      <div className="md:px-10 md:py-2 text-sm flex flex-col md:flex-row-reverse bg-slate-700 text-neutral-content">
        <ul className="menu menu-vertical md:menu-horizontal">
          <FooterLink label="سياسة الخصوصية" href="/privacy-policy" />
          <FooterLink label="اتصل بنا" href="/contact" />
        </ul>
        <div className="border-t border-t-slate-500/60 md:hidden"></div>
        <p className="md:ml-auto flex items-center justify-center min-h-[3rem]">
          جميع الحقوق محفوظة {BRAND_NAME} © {year}
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
