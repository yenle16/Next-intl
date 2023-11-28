import {notFound} from 'next/navigation';
 
// Can be imported from a shared config
const locales = ['en', 'vi','th'];
type LocaleLayoutProps = {
    children: React.ReactNode;
    params: { locale: string };
  };
  export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
  }