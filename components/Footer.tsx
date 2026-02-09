export default function Footer() {
    return (
        <footer className="border-t border-gray-200 py-12 mt-20">
            <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                <p className="font-serif italic mb-4">"A republic, if you can keep it."</p>
                <p>&copy; {new Date().getFullYear()} American Democracy Defined. Unit 1 Project.</p>
            </div>
        </footer>
    );
}
