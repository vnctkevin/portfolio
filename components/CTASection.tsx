import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
    return (
        <section className="bg-gray-900 dark:bg-gray-100 py-16">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-100 dark:text-gray-800">
                        Ready to get started?
                    </h1>
                    <div className="flex flex-row items-center space-x-4 md:space-y-0 md:space-x-4">
                        <Link href="https://jurnal.vnctkevin.com/" className="inline-flex items-center justify-center px-6 py-3 mt-4 md:mt-0 text-sm font-medium text-gray-100 dark:text-black bg-gray-600 dark:bg-gray-300 rounded-md shadow-sm transition-colors hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-500  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                            Read My Blog
                        </Link>
                        <Link href="mailto:vnctkevin@gmail.com" className="inline-flex items-center justify-center px-6 py-3 mt-4 md:mt-0 text-sm font-medium text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm transition-colors hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-500  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                            Email Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}