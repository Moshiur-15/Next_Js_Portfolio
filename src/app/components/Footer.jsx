export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Moshiur Islam. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}