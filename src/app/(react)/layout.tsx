import Link from "next/link"
export default function ReactLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <section>
        <div className="flex flex-row h-full py-5 px-2  text-white">
            <div className="flex w-1/6 py-5 px-5 text-left bg-slate-300">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/react">React</Link></li>
                    <li><Link href="/react/ticktoc">TickToc</Link></li>
                </ul>
            </div>
        {children}
        </div>
    </section>)
  }