import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="py-12 px-4 text-center">
            {links.map(link => (
                link.url ? (<Link
                    key={link.label}
                    href={link.url}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`p-1 mx-1 text-center ${link.active ? "text-blue-800 font-bold" : ''}`}
                />
                ) : (
                    <span
                        key={link.label}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="p-1 mx-1 text-slate-300"
                    ></span>
                )
            ))}
        </div>
    );
}